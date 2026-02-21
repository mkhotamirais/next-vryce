"use server";

import prisma from "@/lib/prisma";

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
