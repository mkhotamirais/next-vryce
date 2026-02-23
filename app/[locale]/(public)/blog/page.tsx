import { getTranslations, setRequestLocale } from "next-intl/server";
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
  params: Promise<{ locale: string; page: string }>;
}

export default async function Blog({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const page = Number((await params).page) || 1;

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <BasePage page={page} limit={blogLimit} />;
    </div>
  );
}
