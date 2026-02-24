import HomeHero from "@/components/home/HomeHero";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import HomeContactUs from "@/components/home/HomeContactUs";
import HomeOurClients from "@/components/home/HomeOurClients";
import HomeServices from "@/components/home/HomeServices";
import HomeTalent from "@/components/home/HomeTalent";
import HomeWhyVrice from "@/components/home/HomeWhyVrice";

// import dynamic from "next/dynamic";
// const HomeOurClients = dynamic(() => import("@/components/home/HomeOurClients"));
// const HomeWhyVrice = dynamic(() => import("@/components/home/HomeWhyVrice"));
// const HomeServices = dynamic(() => import("@/components/home/HomeServices"));
// const HomeTalent = dynamic(() => import("@/components/home/HomeTalent"));
// const HomeContactUs = dynamic(() => import("@/components/home/HomeContactUs"));

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);
  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HomeHero />
      <HomeWhyVrice />
      <HomeServices />
      <HomeTalent />
      <HomeOurClients />
      <HomeContactUs />
    </div>
  );
}
