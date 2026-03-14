import HomeHero from "@/components/home/HomeHero";
import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
// import HomeContactUs from "@/components/home/HomeContactUs";
import HomeOurClients from "@/components/home/HomeOurClients";
import HomeServices from "@/components/home/HomeServices";
import HomeTalent from "@/components/home/HomeTalent";
import HomeWhyVrice from "@/components/home/HomeWhyVrice";
import { smartTrim } from "@/lib/utils";
import HomeContactUs2 from "@/components/home/HomeContactUs2";

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
      <HomeHero />
      <HomeWhyVrice />
      <HomeServices />
      {/* <HomeTalent /> */}
      <HomeOurClients />
      {/* <HomeContactUs /> */}
      <HomeContactUs2 />
    </div>
  );
}
