import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { blogCategorySchema } from "@/lib/schemas/blog";
import { generateSlug } from "@/lib/utils";
import z from "zod";

export async function GET() {
  try {
    const categories = await prisma.blogCategory.findMany({
      orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
    });
    return Response.json(categories);
  } catch (error) {
    console.log(error);
    return Response.json({ ok: false, message: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const validatedFields = blogCategorySchema.safeParse(body);

  if (!validatedFields.success)
    return Response.json({ ok: false, errors: z.treeifyError(validatedFields.error) }, { status: 400 });

  const { name } = validatedFields.data;
  const slug = generateSlug(name);

  if (await prisma.blogCategory.findUnique({ where: { slug } })) {
    return Response.json({ ok: false, message: `Blog category "${name}" already exists` }, { status: 400 });
  }

  try {
    await prisma.blogCategory.create({ data: { name, slug } });
    return Response.json({ ok: true, message: `Blog category "${name}" created successfully` }, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ ok: false, message: "Internal Server Error" }, { status: 500 });
  }
}
