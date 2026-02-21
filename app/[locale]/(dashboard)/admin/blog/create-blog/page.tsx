import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateBlogForm from "./CreateBlogForm";
import { getBlogCategories } from "@/actions/blogCategory";

export default async function CreateBlog() {
  const blogCategories = await getBlogCategories();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-2xl">Create Blog</h1>
        <Button>
          <Link href="/admin/blog">Go to Blog List</Link>
        </Button>
      </div>
      <CreateBlogForm blogCategories={blogCategories} />
    </div>
  );
}
