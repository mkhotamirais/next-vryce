import { Button } from "@/components/ui/button";
import Link from "next/link";
import EditBlogForm from "./EditBlogForm";
import { getBlogCategories } from "@/actions/blogCategory";
import { redirect } from "next/navigation";
import { getBlogBySlug } from "@/actions/getData";

export default async function EditBlog({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);
  const blogCategories = await getBlogCategories();

  if (!blogCategories?.length || !blog) redirect("/");

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Edit Blog</h1>
        <Button asChild>
          <Link href="/admin/blog">Go to Blog List</Link>
        </Button>
      </div>
      <EditBlogForm blog={blog} blogCategories={blogCategories} />
    </>
  );
}
