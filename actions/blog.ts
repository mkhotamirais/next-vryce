"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { blogSchema } from "@/lib/schemas/blog";
import { generateSlug } from "@/lib/utils";
import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import z from "zod";

const revalidateBlog = () => {
  revalidatePath("/");
  revalidatePath("/blog", "layout");
  revalidatePath("/admin/blog", "layout");
};

interface GetBlogParams {
  limit?: number;
  page?: number;
  keyword?: string;
  excludeSlug?: string;
  categorySlug?: string;
  userId?: string;
}

export const getBlogs = async ({
  limit = 8,
  page = 1,
  keyword,
  excludeSlug,
  categorySlug,
  userId,
}: GetBlogParams = {}) => {
  const whereClause: {
    title?: { contains: string; mode: "insensitive" };
    slug?: { not: string };
    BlogCategory?: { slug: string };
    userId?: string;
  } = {};

  if (keyword) whereClause.title = { contains: keyword, mode: "insensitive" };
  if (excludeSlug) whereClause.slug = { not: excludeSlug };
  if (categorySlug) whereClause.BlogCategory = { slug: categorySlug };
  if (userId) whereClause.userId = userId;

  const totalBlogsCount = await prisma.blog.count({
    where: whereClause,
  });

  const skip = (page - 1) * limit;

  const blogs = await prisma.blog.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
    take: limit,
    skip: skip,
    include: {
      BlogCategory: { select: { name: true, slug: true } },
      User: { select: { name: true } },
    },
  });

  const totalPages = Math.ceil(totalBlogsCount / limit);
  const hasMore = totalBlogsCount > page * limit;

  return { blogs, totalBlogsCount, totalPages, hasMore, nextPage: page + 1 };
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await prisma.blog.findFirst({
    where: { slug },
    include: { BlogCategory: { select: { name: true, slug: true } }, User: { select: { name: true } } },
  });
  return blog;
};

export const createBlog = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session || !session.user) return { ok: false, message: "Unauthorized" };

    const file = formData.get("image") as File | null;
    const imageFile = file instanceof File && file.size > 0 ? file : null;

    const rawData = Object.fromEntries(formData.entries());
    const validatedFields = blogSchema.safeParse({ ...rawData, image: imageFile });

    if (!validatedFields.success)
      return { ok: false, message: "Validation failed", errors: z.treeifyError(validatedFields.error) };

    let imageUrl: string | null = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const blob = await put(`blogs/${Date.now()}-${imageFile.name}`, imageFile, {
          access: "public",
          multipart: true,
        });
        imageUrl = blob.url;
      } catch (error) {
        console.log(error);
        return { ok: false, message: "Failed to upload image" };
      }
    }

    const { title, content } = validatedFields.data;
    const categoryId = validatedFields.data.categoryId;
    const slug = generateSlug(title);

    const existingBlogTitle = await prisma.blog.findFirst({ where: { title } });
    if (existingBlogTitle) return { ok: false, message: "Blog title already exists" };

    await prisma.blog.create({
      data: { title, slug, content, imageUrl, categoryId, userId: session.user.id as string },
    });

    revalidateBlog();
    return { ok: true, message: "Blog created successfully" };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};

export const deleteBlog = async (slug: string) => {
  try {
    const session = await auth();
    if (!session || !session.user) return { ok: false, message: "Unauthorized" };

    const currentBlog = await prisma.blog.findUnique({ where: { slug } });
    if (!currentBlog) return { ok: false, message: "Blog not found" };

    if (currentBlog.imageUrl) {
      try {
        await del(currentBlog.imageUrl);
      } catch (blobError) {
        console.log("Failed to delete Vercel blob:", blobError);
      }
    }
    await prisma.blog.delete({ where: { slug } });

    revalidateBlog();
    return { ok: true, message: "Blog deleted successfully" };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};

export const updateBlog = async (slug: string, formData: FormData) => {
  try {
    const session = await auth();
    if (!session || !session.user) return { ok: false, message: "Unauthorized" };

    const currentBlog = await prisma.blog.findUnique({ where: { slug } });
    if (!currentBlog) return { ok: false, message: "Blog not found" };

    const file = formData.get("image") as File | null;
    const imageFile = file instanceof File && file.size > 0 ? file : null;
    const removeImage = formData.get("removeImage") === "true";

    const rawData = Object.fromEntries(formData.entries());
    const validatedFields = blogSchema.safeParse({ ...rawData, image: imageFile });

    if (!validatedFields.success)
      return { ok: false, message: "Validation failed", errors: z.treeifyError(validatedFields.error) };

    const { title, content } = validatedFields.data;
    let categoryId = validatedFields.data.categoryId;

    const existingBlogTitle = await prisma.blog.findFirst({ where: { title, id: { not: currentBlog.id } } });
    if (existingBlogTitle) return { ok: false, message: "Blog title already exists" };

    const existingCategory = await prisma.blogCategory.findFirst({ where: { id: categoryId } });
    if (!existingCategory) {
      const defaultCategory = await prisma.blogCategory.findFirst({ where: { isDefault: true } });
      if (!defaultCategory) return { ok: false, message: "Default category not found" };
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

    await prisma.blog.update({ where: { slug }, data: { title, content, imageUrl: imageUrlUpdate, categoryId } });

    revalidateBlog();
    return { ok: true, message: "Blog updated successfully" };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};
