import HeroWrapper from "@/components/HeroWrapper";
import { Camera } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

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

export default function About() {
  const t = useTranslations("about");
  const talent = useTranslations("about.talent");

  const title = t("title");
  const sub_headline = t("sub_headline");
  const paragraph_1 = t("paragraph_1");
  const paragraph_2 = t("paragraph_2");
  const paragraph_3 = t("paragraph_3");

  const talent_title = talent("title");
  const talent_paragraph_1 = talent("paragraph_1");
  const talent_paragraph_2 = talent("paragraph_2");
  const p2_list = talent("p2_list").split(" | ");
  const talent_paragraph_3 = talent("paragraph_3");
  const p3_list = talent("p3_list").split(" | ");
  const talent_paragraph_4 = talent("paragraph_4");

  return (
    <>
      <HeroWrapper title={title} />
      <section className="py-12 lg:py-16">
        <div className="container flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <Camera className="size-70" />
          </div>
          <div className="w-full md:w-2/3 leading-relaxed order-1 md:order-2">
            <h2 className="h2">{sub_headline}</h2>
            <article className="text-muted-foreground space-y-4">
              <p>{paragraph_1}</p>
              <p>{paragraph_2}</p>
              <p>{paragraph_3}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 bg-primary/4">
        <div className="container flex gap-8 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="h2">{talent_title}</h2>
            <article className="text-muted-foreground space-y-4">
              <p>{talent_paragraph_1}</p>
              <p>{talent_paragraph_2}</p>
              <ul className="list-disc list-inside space-y-2">
                {p2_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{talent_paragraph_3}</p>
              <ul className="list-disc list-inside space-y-2">
                {p3_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{talent_paragraph_4}</p>
            </article>
          </div>
          <div className="w-full md:w-1/3">
            <Camera className="size-70" />
          </div>
        </div>
      </section>
    </>
  );
}
