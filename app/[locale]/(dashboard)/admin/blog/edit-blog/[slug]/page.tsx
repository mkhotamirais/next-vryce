import { Button } from "@/components/ui/button";
import Link from "next/link";
import EditBlogWrapper from "./EditBlogWrapper";
import { getBlogs } from "@/actions/blog";

export const generateStaticParams = async () => {
  const { blogs } = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export default async function EditBlog({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Edit Blog</h1>
        <Button asChild>
          <Link href="/admin/blog">Go to Blog List</Link>
        </Button>
      </div>
      <EditBlogWrapper slug={slug} />
    </>
  );
}
