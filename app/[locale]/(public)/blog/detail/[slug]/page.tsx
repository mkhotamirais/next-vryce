import { getBlogBySlug, getBlogs } from "@/actions/blog";
import ShareSocialGroup from "@/components/ShareSocialGroup";
import { baseUrl } from "@/lib/common";
import { diffForHumans, smartTrim } from "@/lib/utils";
import { ArrowLeft, Calendar, Folder, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);

  return { title: smartTrim(blog?.title || "", 60), description: smartTrim(blog?.content || "", 160) };
};

export const generateStaticParams = async () => {
  const { blogs } = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);
  const currentBlogCategory = blog?.BlogCategory;
  const url = `${baseUrl}/blog/${blog?.slug}`;
  // const { blogs: otherBlogs } = await getBlogs({
  //   limit: blogLimit,
  //   categorySlug: currentBlogCategory?.slug,
  // });

  if (!slug || !blog) return notFound();

  return (
    <section className="py-8">
      <div className="container">
        <article className="prose mx-auto">
          <div className="sticky top-16 bg-white flex items-center justify-between py-2 mb-6">
            <Link
              href="/blog"
              className="text-sm flex gap-2 items-center text no-underline hover:underline hover:text-primary transition-all"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
            <div>
              <ShareSocialGroup url={url} title={blog.title} />
            </div>
          </div>
          <h1>{blog.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Folder className="size-4" />
            <span>{currentBlogCategory?.name}</span>
            <span>|</span>
            <Calendar className="size-4" />
            <span>{diffForHumans(blog.createdAt)}</span>
          </div>
          <div className="h-72 w-full">
            {blog?.imageUrl ? (
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1000}
                height={600}
                className="h-full w-full object-cover object-center"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <ImageIcon className="size-60" />
              </div>
            )}
          </div>
          <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </article>
      </div>
    </section>
  );
}
