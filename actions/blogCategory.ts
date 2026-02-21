"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { blogCategorySchema } from "@/lib/schemas/blog";
import { generateSlug } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import z from "zod";

const revalidateBlogCategory = () => {
  revalidatePath("/admin/blog-category");
  revalidatePath("/admin/blog/create-blog");
};

export const getBlogCategories = async () => {
  const categories = await prisma.blogCategory.findMany({ orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }] });
  return categories;
};

export const getBlogCategoryBySlug = async (slug: string) => {
  const category = await prisma.blogCategory.findUnique({ where: { slug } });
  return category;
};

export const createBlogCategory = async ({ name }: { name: string }) => {
  const session = await auth();
  if (!session) {
    return { ok: false, message: "Unauthorized" };
  }

  const validatedFields = blogCategorySchema.safeParse({ name });
  if (!validatedFields.success)
    return { ok: false, message: "Validation failed", errors: z.treeifyError(validatedFields.error) };
  const slug = generateSlug(name);

  const existingCategory = await prisma.blogCategory.findUnique({ where: { slug } });
  if (existingCategory) return { ok: false, message: `Blog category "${name}" already exists` };

  try {
    await prisma.blogCategory.create({ data: { name, slug: generateSlug(name) } });

    revalidateBlogCategory();
    return { ok: true, message: `Blog category "${name}" created successfully` };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};

export const deleteBlogCategory = async (id: string) => {
  const session = await auth();
  if (!session) return { ok: false, message: "Unauthorized" };

  const currentCategory = await prisma.blogCategory.findUnique({ where: { id } });
  if (!currentCategory) return { ok: false, message: "Blog category not found" };

  if (currentCategory.isDefault) return { ok: false, message: "Default blog category cannot be deleted" };

  try {
    const blogCount = await prisma.blog.count({ where: { categoryId: id } });

    if (blogCount > 0) {
      const defaultCategory = await prisma.blogCategory.findFirst({ where: { isDefault: true } });
      if (!defaultCategory) return { ok: false, message: "Default category not found" };

      await prisma.$transaction(async (tx) => {
        await tx.blog.updateMany({ where: { categoryId: id }, data: { categoryId: defaultCategory.id } });
        await tx.blogCategory.delete({ where: { id } });
      });

      revalidateBlogCategory();
      return {
        ok: true,
        message: `Blog category "${currentCategory.name}" deleted. ${blogCount} posts moved to "${defaultCategory.name}"`,
      };
    } else {
      await prisma.blogCategory.delete({ where: { id } });
      revalidateBlogCategory();
      return { ok: true, message: `Blog category "${currentCategory.name}" deleted successfully` };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};

export const updateBlogCategory = async ({ id, name }: { id: string; name: string }) => {
  const session = await auth();
  if (!session) return { ok: false, message: "Unauthorized" };

  const validatedFields = blogCategorySchema.safeParse({ name });
  if (!validatedFields.success)
    return { ok: false, error: "Validation failed", errors: z.treeifyError(validatedFields.error) };
  const slug = generateSlug(name);

  const currentCategory = await prisma.blogCategory.findUnique({ where: { id } });
  if (!currentCategory) return { ok: false, message: "Blog category not found" };

  if (currentCategory.isDefault) return { ok: false, message: "Default blog category cannot be updated" };

  const existingCategoryName = await prisma.blogCategory.findFirst({
    where: { name, id: { not: currentCategory.id } },
  });
  if (existingCategoryName) return { ok: false, message: `Blog category "${name}" already exists` };

  try {
    await prisma.blogCategory.update({ where: { id }, data: { name, slug } });

    revalidateBlogCategory();
    return { ok: true, message: `Blog category "${currentCategory.name}" updated successfully` };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Internal Server Error" };
  }
};
