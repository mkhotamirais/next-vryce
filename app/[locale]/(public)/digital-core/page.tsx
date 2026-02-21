import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";

// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "metadata.digital_core" });

//   return {
//     title: t("title"),
//     description: t("description"),
//     // 2. Tambahkan Alternates untuk SEO Internasional (Sangat Penting!)
//     alternates: {
//       canonical: `/${locale}`,
//       languages: {
//         en: "/en",
//         id: "/id",
//       },
//     },
//   };
// }

export default function DigitalCore() {
  const t = useTranslations("DigitalCore");
  const title = t("Title");
  return (
    <div className="scroll-mt-20">
      <p>digital core {title}</p>
      {/* <HeroWrapper title={title} /> */}
      {/* <section className="py-12">
        <div className="container">Content layanan web, landing page, sama ai </div>
      </section> */}
    </div>
  );
}
