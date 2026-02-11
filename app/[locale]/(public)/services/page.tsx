import HeroWrapper from "@/components/HeroWrapper";
import ServiceCard from "@/components/ServiceCard";
import useServices from "@/hooks/useServices";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });

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

export default function Services() {
  const { services } = useServices();

  return (
    <>
      <HeroWrapper title="Layanan Vryce" />
      <section className="py-12 bg-primary/4">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
