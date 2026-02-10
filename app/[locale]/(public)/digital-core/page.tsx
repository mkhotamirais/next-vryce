import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import React from "react";

export default function DigitalCore() {
  const t = useTranslations("digital_core");
  const title = t("title");
  return (
    <div>
      <HeroWrapper title={title} />
      <section className="py-12">
        <div className="container">Content layanan web, landing page, sama ai </div>
      </section>
    </div>
  );
}
