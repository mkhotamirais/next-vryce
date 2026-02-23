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

  const title = t("title");
  const headline = t("headline");
  const paragraph_1 = t("paragraph_1");
  const paragraph_2 = t("paragraph_2");
  const paragraph_3 = t("paragraph_3");

  return (
    <div className="scroll-mt-12 md:scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />
      <section className="py-12 lg:py-16">
        <div className="container flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <Camera className="size-70" />
          </div>
          <div className="w-full md:w-2/3 leading-relaxed order-1 md:order-2">
            <h2 className="h2">Vryce Digital Marketing Agency</h2>
            <article className="text-muted-foreground space-y-4">
              <p>{paragraph_1}</p>
              <p>{paragraph_2}</p>
              <p>{paragraph_3}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
