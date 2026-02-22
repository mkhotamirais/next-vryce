import { getTranslations, setRequestLocale } from "next-intl/server";
import { blogLimit } from "@/lib/common";
import BasePage from "../../BasePage";
import { getBlogs } from "@/actions/blog";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
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

  return <BasePage page={page} limit={blogLimit} />;
}
