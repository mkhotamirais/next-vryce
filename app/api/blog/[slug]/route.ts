import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { blogSchema } from "@/lib/schemas/blog";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import z from "zod";

const revalidateBlog = () => {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/blog/page/[page]", "page");
};

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const blog = await prisma.blog.findFirst({
      where: { slug },
      include: { BlogCategory: { select: { name: true, slug: true } }, User: { select: { name: true } } },
    });
    if (!blog) return Response.json({ ok: false, message: "Blog not found" }, { status: 404 });
    return Response.json(blog);
  } catch (error) {
    console.log(error);
    return Response.json({ ok: false, message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const slug = (await params).slug;
    const session = await auth();
    if (!session || !session.user || session.user.role !== "ADMIN")
      return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });

    const currentBlog = await prisma.blog.findUnique({ where: { slug } });
    if (!currentBlog) return Response.json({ ok: false, message: "Blog not found" }, { status: 404 });

    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    const imageFile = file instanceof File && file.size > 0 ? file : null;
    const removeImage = formData.get("removeImage") === "true";

    const rawData = Object.fromEntries(formData.entries());
    const validatedFields = blogSchema.safeParse({ ...rawData, image: imageFile });

    if (!validatedFields.success)
      return Response.json(
        { ok: false, message: "Validation failed", errors: z.treeifyError(validatedFields.error) },
        { status: 400 },
      );

    const { title, content } = validatedFields.data;
    let categoryId = validatedFields.data.categoryId;

    const existingBlogTitle = await prisma.blog.findFirst({ where: { title, id: { not: currentBlog.id } } });
    if (existingBlogTitle)
      return Response.json({ ok: false, message: "Nama produk sudah digunakan." }, { status: 409 });

    const existingCategory = await prisma.blogCategory.findUnique({ where: { id: categoryId } });
    if (!existingCategory) {
      const defaultCategory = await prisma.blogCategory.findFirst({ where: { isDefault: true } });
      if (!defaultCategory)
        return Response.json({
          ok: false,
          message: "Selected category was deleted and no default category found",
          status: 404,
        });
      categoryId = defaultCategory.id;
    }

    let imageUrlUpdate: string | null = currentBlog.imageUrl;

    if (removeImage) {
      if (currentBlog.imageUrl) await del(currentBlog.imageUrl);
      imageUrlUpdate = null;
    } else if (imageFile) {
      if (currentBlog.imageUrl) await del(currentBlog.imageUrl);
      const blob = await put(`blogs/${Date.now()}-${imageFile.name}`, imageFile, { access: "public", multipart: true });
      imageUrlUpdate = blob.url;
    }

    await prisma.blog.update({ data: { title, slug, content, imageUrl: imageUrlUpdate, categoryId }, where: { slug } });

    revalidateBlog();
    return Response.json({ ok: true, message: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ ok: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const session = await auth();
  if (!session || !session.user || session.user.role !== "ADMIN") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const blog = await prisma.blog.findFirst({ where: { slug } });
    if (!blog) return Response.json({ error: "Blog not found" }, { status: 404 });

    if (blog.imageUrl) await del(blog.imageUrl);
    await prisma.blog.delete({ where: { slug } });

    revalidateBlog();
    return Response.json({ message: `Blog "${blog.title}" deleted successfully` });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
