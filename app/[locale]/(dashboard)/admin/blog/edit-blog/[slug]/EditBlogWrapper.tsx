"use client";

import { useBlogCategory } from "@/hooks/tanstack-hooks/useBlogCategory";
import { redirect } from "next/navigation";
import EditBlogForm from "./EditBlogForm";
import { useBlogDetail } from "@/hooks/tanstack-hooks/useBlog";

export default function EditBlogWrapper({ slug }: { slug: string }) {
  const { data: blogCategories, isPending } = useBlogCategory();
  const { data: blog, isPending: isPendingBlog } = useBlogDetail(slug);

  if (isPending || isPendingBlog) return <div>Loading...</div>;
  if (!blogCategories || !blog) redirect("/admin/blog-category");

  return <EditBlogForm blogCategories={blogCategories} blog={blog} />;
}
