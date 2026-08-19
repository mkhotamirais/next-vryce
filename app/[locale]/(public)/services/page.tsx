import HeroWrapper from "@/components/HeroWrapper";
import ServiceCard from "@/components/cards/ServiceCard";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { smartTrim } from "@/lib/utils";
import { serviceKeys } from "@/lib/common";
import HomeContact from "@/components/home/HomeContact";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "id" ? "/id/layanan" : "/en/services",
      languages: { en: "/en/services", id: "/id/layanan", "x-default": "/id/layanan" },
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

  const title = t("title");
  const headline = t("headline");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {serviceKeys.map((key) => {
            const serviceData = {
              title: t(`${key}.title`),
              purpose: t(`${key}.purpose`),
              benefits: t(`${key}.benefits`),
              price: t(`${key}.price`),
              priceFor: t(`${key}.priceFor`),
              priceNote: t(`${key}.priceNote`),
            };

            return <ServiceCard key={key} service={serviceData} />;
          })}
        </div>
      </section>
      <HomeContact />
    </div>
  );
}
