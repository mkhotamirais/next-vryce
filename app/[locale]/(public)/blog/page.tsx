import { getTranslations, setRequestLocale } from "next-intl/server";
import BasePage from "./BasePage";
import { blogLimit } from "@/lib/common";
import { use } from "react";

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
  params: Promise<{ locale: string; page: string }>;
  searchParams: Promise<{ keyword: string }>;
}

export default async function Blog({ params, searchParams }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const page = Number((await params).page) || 1;
  const keyword = (await searchParams).keyword || "";

  return <BasePage page={page} limit={blogLimit} keyword={keyword} />;
}
