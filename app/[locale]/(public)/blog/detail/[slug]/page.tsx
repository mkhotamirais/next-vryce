import { getBlogBySlug, getBlogs } from "@/actions/blog";
import { smartTrim } from "@/lib/utils";
import { setRequestLocale } from "next-intl/server";
import BlogDetailClient from "./BlogDetailClient";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

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
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blog-detail", slug],
    queryFn: () => getBlogBySlug(slug),
  });

  return (
    <div className="py-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogDetailClient slug={slug} />
      </HydrationBoundary>
    </div>
  );
}
