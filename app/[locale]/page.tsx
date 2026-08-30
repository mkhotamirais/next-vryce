import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeOurClients from "@/components/sections/OurClients";
import { smartTrim } from "@/lib/utils";
import HomeContact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Services from "@/components/sections/Services";
import Talent from "@/components/sections/Talent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", id: "/id", "x-default": "/id" },
    },
  };
}

type Props = { params: Promise<{ locale: string }> };

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);
  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <Hero />
      <Why />
      <Services />
      <Talent />
      <HomeOurClients />
      <HomeContact />
    </div>
  );
}
