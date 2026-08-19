// import HeroWrapper from "@/components/HeroWrapper";
import HomeOurClients from "@/components/home/HomeOurClients";
import { smartTrim } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import Image from "next/image";
import TalentList from "../talent/TalentList";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "id" ? "/id/tentang" : "/en/about",
      languages: { en: "/en/about", id: "/id/tentang", "x-default": "/id/tentang" },
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default function About({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);
  const t = useTranslations("about");

  const title = t("title");
  // const headline = t("headline");
  const paragraph_1 = t("paragraph_1");
  const paragraph_2 = t("paragraph_2");
  const paragraph_3 = t("paragraph_3");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      {/* <HeroWrapper title={title} headline={headline} /> */}
      <section className="h-100 py-20 bg-[url('/images/talent/talent-1-iqbal.jpeg')] bg-blend-saturation bg-black/60 grayscale bg-cover bg-center w-full">
        {/* <div className="container flex items-center justify-center h-full"> */}
        <div className="container flex items-end justify-start h-full">
          <h1 className="text-5xl md:text-7xl font-bold text-left sm:text-center leading-tight text-white">{title}</h1>
        </div>
      </section>
      {/* <section className="py-12 lg:py-20 bg-[radial-gradient(circle_at_top_right,rgba(41,98,255,0.10)_0%,transparent_40%),radial-gradient(circle_at_left_bottom,rgba(41,98,255,0.10)_0%,transparent_40%)]"> */}
      <section className="py-12 lg:py-20 bg-[radial-gradient(circle_at_top_right,rgba(41,98,255,0.10)_0%,transparent_30%)]">
        <div className="container flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full h-120 lg:w-1/2 order-2 lg:order-1">
            <Image
              src="/images/talent/talent-1-iqbal.jpeg"
              alt="About Us"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 leading-loose order-1 lg:order-2">
            <h2 className="h2 mb-8!">Vryce Digital Marketing Agency</h2>
            <article className="text-muted-foreground space-y-4">
              <p>{paragraph_1}</p>
              <p>{paragraph_2}</p>
              <p>{paragraph_3}</p>
            </article>
          </div>
        </div>
      </section>

      <HomeOurClients withTitle={false} />
      <TalentList className="bg-primary/2" />
    </div>
  );
}
