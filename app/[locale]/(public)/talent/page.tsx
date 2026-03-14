import TalentCard from "@/components/cards/TalentCard";
import HeroWrapper from "@/components/HeroWrapper";
import { Separator } from "@/components/ui/separator";
import { talentPeoples } from "@/lib/common";
import { Heart, Palette, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";
import { smartTrim } from "@/lib/utils";
import HomeContactUs2 from "@/components/home/HomeContactUs2";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  const title = smartTrim(t("title"), 50);
  const description = smartTrim(t("description"), 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/talent`,
      languages: { en: "/en/talent", id: "/id/talent", "x-default": "/id/talent" },
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Talent({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("talent");

  const title = t("title");
  const headline = t("headline");
  const sub_title_1 = t("sub_title_1");
  const talent_paragraph_1 = t("paragraph_1");
  const talent_paragraph_2 = t("paragraph_2");
  const p2_list = t("p2_list").split(" | ");
  const sub_title_2 = t("sub_title_2");
  const p3_list = t("p3_list").split(" | ");
  const sub_title_3 = t("sub_title_3");

  const p2list = [
    { label: p2_list[0], icon: "🛍️" },
    { label: p2_list[1], icon: "📈" },
    { label: p2_list[2], icon: "🤳" },
    { label: p2_list[3], icon: "🛡️" },
  ];

  const p3list = [
    { label: p3_list[0], icon: <Palette size={50} /> },
    { label: p3_list[1], icon: <Heart size={50} /> },
    { label: p3_list[2], icon: <TrendingUp size={50} /> },
  ];
  const talent_paragraph_4 = t("paragraph_4");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section className="py-12 lg:px-16 leading-loose">
        <div className="container flex gap-8 flex-col md:flex-row">
          <m.div
            variants={fades}
            custom={{ delay: 0.1 }}
            initial="hide"
            animate="show"
            className="w-full md:w-1/3 order-2 md:order-1 h-110"
          >
            <Image
              src="/images/talent/catalog-1-iqbal.jpeg"
              alt="vryce talent"
              width={500}
              height={500}
              className="w-full h-full object-cover object-bottom rounded-xl"
            />
          </m.div>
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <m.h2
              variants={fades}
              custom={{ direction: "right", delay: 0.2 }}
              initial="hide"
              animate="show"
              className="h2 max-w-100"
            >
              {sub_title_1}
            </m.h2>
            <Separator className="max-w-24 min-h-0.5 rounded bg-primary mb-6" />
            <m.article
              variants={fades}
              custom={{ delay: 0.2 }}
              initial="hide"
              animate="show"
              className="text-muted-foreground space-y-4"
            >
              <p>{talent_paragraph_1}</p>
              <p>{talent_paragraph_2}</p>
              <ul className=" space-y-2">
                {p2list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium text-gray-600">
                    {item.icon} {item.label}
                  </li>
                ))}
              </ul>
            </m.article>
          </div>
        </div>
      </section>
      <section className="py-12 lg:px-16 bg-primary/3 leading-loose">
        <div className="container">
          <div className="max-w-auto md:max-w-5xl mx-auto">
            <m.h2
              variants={fades}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              className="h2 text-center"
            >
              {sub_title_2}
            </m.h2>
            <Separator className="max-w-24 min-h-0.5 rounded bg-primary mb-12 mx-auto" />

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {p3list.map((item, i) => (
                <li key={i}>
                  <m.div
                    variants={fades}
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl bg-white shadow-sm py-8 px-12 text-center font-medium flex flex-col items-center gap-4"
                  >
                    {item.icon}
                    <div className="text-gray-600">{item.label}</div>
                  </m.div>
                </li>
              ))}
            </ul>

            <m.p
              variants={fades}
              custom={{ direction: "in" }}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-16 mb-8 text-center"
            >
              {talent_paragraph_4}
            </m.p>
          </div>
        </div>
      </section>
      <section id="talentPeoples" className="scroll-mt-16 py-12 lg:px-16 leading-loose">
        <div className="container">
          <m.h2
            variants={fades}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            className="h2 text-center mb-12!"
          >
            {sub_title_3}
          </m.h2>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-8"> */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-xl mx-auto gap-8">
            {talentPeoples.map((item, i) => (
              <TalentCard key={i} talent={item} />
            ))}
          </div>
        </div>
      </section>
      <HomeContactUs2 />
    </div>
  );
}
