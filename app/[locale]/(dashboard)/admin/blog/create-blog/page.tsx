import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateBlogForm from "./CreateBlogForm";
import { getBlogCategories } from "@/actions/blogCategory";
import { Suspense } from "react";
// import { redirect } from "next/navigation";

export default async function CreateBlog() {
  const blogCategories = await getBlogCategories();

  // if (!blogCategories?.length) redirect("/admin/blog-category");

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-2xl">Create Blog</h1>
        <Button>
          <Link href="/admin/blog">Go to Blog List</Link>
        </Button>
      </div>
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <CreateBlogForm blogCategories={blogCategories} />
      </Suspense>
    </div>
  );
}
