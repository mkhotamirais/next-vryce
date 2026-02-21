import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.talent" });

  return {
    title: t("title"),
    description: t("description"),
    // 2. Tambahkan Alternates untuk SEO Internasional (Sangat Penting!)
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Talent({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("talent");
  const title = t("title");
  return (
    <>
      <HeroWrapper title={title} />
      <section className="py-12">
        <div className="container">Content</div>
      </section>
    </>
  );
}
