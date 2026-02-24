import HeroWrapper from "@/components/HeroWrapper";
import HomeContactUs from "@/components/home/HomeContactUs";
import ServiceCard from "@/components/cards/ServiceCard";
import useServices from "@/hooks/useServices";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

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

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Services({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("services");

  const { services } = useServices();

  const title = t("title");
  const headline = t("headline");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section className="py-12 bg-primary/4">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </section>
      <HomeContactUs />
    </div>
  );
}
