import { getTranslations, setRequestLocale } from "next-intl/server";
import BasePage from "./BasePage";
import { blogLimit } from "@/lib/common";
import { smartTrim } from "@/lib/utils";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getBlogs } from "@/actions/blog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: "/en/blog", id: "/id/blog", "x-default": "/id/blog" },
    },
  };
}

interface Props {
  params: Promise<{ locale: string; page: string }>;
}

export default async function Blog({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const page = Number((await params).page) || 1;
  const queryClient = new QueryClient();

  // Prefetch data di Server
  await queryClient.prefetchQuery({
    queryKey: ["blogs", page, blogLimit, ""], // Keyword kosong untuk default list
    queryFn: () => getBlogs({ page, limit: blogLimit }),
  });

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BasePage page={page} limit={blogLimit} />;
      </HydrationBoundary>
    </div>
  );
}
