import { getBlogBySlug, getBlogs } from "@/actions/blog";
import { smartTrim } from "@/lib/utils";
import { setRequestLocale } from "next-intl/server";
import BlogDetailClient from "./BlogDetailClient";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);

  return { title: smartTrim(blog?.title || "", 60), description: smartTrim(blog?.content || "", 160) };
};

export const generateStaticParams = async () => {
  const { blogs } = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export default async function BlogDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="py-8">
      <BlogDetailClient />
      {/* <div className="container">
        <NewsletterForm />
      </div> */}
    </div>
  );
}
