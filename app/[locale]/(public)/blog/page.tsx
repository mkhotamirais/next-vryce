import { getTranslations } from "next-intl/server";
import BasePage from "./BasePage";
import { blogLimit } from "@/lib/common";

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

interface Props {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ keyword: string }>;
}

export default async function Blog({ params, searchParams }: Props) {
  const page = Number((await params).page) || 1;
  const keyword = (await searchParams).keyword || "";

  return <BasePage page={page} limit={blogLimit} keyword={keyword} />;
}
