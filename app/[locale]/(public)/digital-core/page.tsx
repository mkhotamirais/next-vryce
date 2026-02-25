import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { getTranslations } from "next-intl/server";
import { smartTrim } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "id" ? "/id/solusi-digital" : "/en/digital-core",
      languages: { en: "/en/digital-core", id: "/id/solusi-digital", "x-default": "/id/solusi-digital" },
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default function DigitalCore({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("digital_core");
  const title = t("title");
  const headline = t("headline");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section className="py-12">
        <div className="container">Content layanan web, landing page, sama ai </div>
      </section>
    </div>
  );
}
