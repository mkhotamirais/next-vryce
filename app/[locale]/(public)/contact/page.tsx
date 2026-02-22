import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

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

export default function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("contact");
  const title = t("title");
  const headline = t("headline");

  return (
    <>
      <HeroWrapper title={title} headline={headline} />
      <section>content</section>
    </>
  );
}
