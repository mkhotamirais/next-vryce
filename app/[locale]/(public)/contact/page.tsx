import HeroWrapper from "@/components/HeroWrapper";
import { smartTrim } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "id" ? "/id/kontak" : "/en/contact",
      languages: { en: "/en/contact", id: "/id/tentang", "x-default": "/id/tentang" },
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
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section>content</section>
    </div>
  );
}
