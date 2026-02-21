import { Suspense } from "react";
import List from "./List";
import Create from "./Create";
import { getBlogCategories } from "@/actions/blogCategory";

export default async function BlogCategory() {
  const blogCategories = await getBlogCategories();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Blog Category</h1>
      <div className="space-y-4">
        <Create />
        {blogCategories && blogCategories.length > 0 && <List blogCategories={blogCategories} />}
      </div>
    </div>
  );
}
