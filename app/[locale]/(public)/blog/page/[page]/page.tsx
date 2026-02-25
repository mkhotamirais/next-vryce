import { getTranslations, setRequestLocale } from "next-intl/server";
import { blogLimit } from "@/lib/common";
import BasePage from "../../BasePage";
import { getBlogs } from "@/actions/blog";
import { routing } from "@/i18n/routing";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });

  return {
    title: `${t("title")} - Page ${page}`,
    description: t("description"),
    alternates: {
      canonical: `/${locale}/blog/page/${page}`,
      languages: { en: `/en/blog/page/${page}`, id: `/id/blog/page/${page}` },
    },
  };
}

export async function generateStaticParams() {
  const { totalPages } = await getBlogs({ limit: blogLimit });
  const locales = routing.locales;

  const paths = [];

  for (const locale of locales) {
    // Loop sesuai jumlah halaman yang ada di database
    for (let i = 1; i <= totalPages; i++) {
      paths.push({
        locale: locale,
        page: i.toString(),
      });
    }
  }

  return paths;
}

interface Props {
  params: Promise<{ locale: string; page: string }>;
  searchParams: Promise<{ keyword: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const page = Number((await params).page) || 1;
  const queryClient = new QueryClient();

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
