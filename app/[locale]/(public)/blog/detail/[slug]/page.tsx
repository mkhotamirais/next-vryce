import { getBlogBySlug, getBlogs } from "@/actions/blog";
import { smartTrim, stripHtml } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BlogDetailClient from "./BlogDetailClient";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });

  const blog = await getBlogBySlug(slug);

  const title = smartTrim(blog?.title || "", 50) || smartTrim(t("title"), 50);
  const description = stripHtml(smartTrim(blog?.content || "", 150)) || smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "id" ? "/id/tentang" : "/en/about",
      languages: { en: "/en/about", id: "/id/tentang", "x-default": "/id/tentang" },
    },
  };
}

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
