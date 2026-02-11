import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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

export default function Talent() {
  const t = useTranslations("talent");
  const title = t("title");
  return (
    <div>
      <HeroWrapper title={title} />
      <section className="py-12">
        <div className="container">Content</div>
      </section>
    </div>
  );
}
