import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.digital_core" });

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

export default function DigitalCore({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);
  const t = useTranslations("digital_core");
  const title = t("title");
  return (
    <>
      <HeroWrapper title={title} />
      <section className="py-12">
        <div className="container">Content layanan web, landing page, sama ai </div>
      </section>
    </>
  );
}
