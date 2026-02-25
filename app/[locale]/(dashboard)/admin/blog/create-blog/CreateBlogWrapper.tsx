"use client";

import { useBlogCategory } from "@/hooks/tanstack-hooks/useBlogCategory";
import CreateBlogForm from "./CreateBlogForm";
import { redirect } from "next/navigation";

export default function CreateBlogWrapper() {
  const { data: blogCategories, isPending } = useBlogCategory();

  if (isPending) return <div>Loading...</div>;

  if (!blogCategories) redirect("/admin/blog-category");

  return <CreateBlogForm blogCategories={blogCategories} />;
}
