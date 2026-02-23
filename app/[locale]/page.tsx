// import HomeAbout from "@/components/home/HomeAbout";
import HomeContactUs from "@/components/home/HomeContactUs";
import HomeHero from "@/components/home/HomeHero";
import HomeOurClients from "@/components/home/HomeOurClients";
import HomeOurService from "@/components/home/HomeServices";
import HomeTalent from "@/components/home/HomeTalent";
import HomeWhyVrice from "@/components/home/HomeWhyVrice";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

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
      <HomeOurService />
      <HomeTalent />
      <HomeOurClients />
      <HomeContactUs />
    </div>
  );
}
