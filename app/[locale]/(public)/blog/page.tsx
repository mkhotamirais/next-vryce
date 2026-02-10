import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import React from "react";

export default function Blog() {
  const t = useTranslations("blog");
  const title = t("title");
  return (
    <div>
      <HeroWrapper title={title} />
      <section className="py-12">
        <div className="container">Content blog</div>
      </section>
    </div>
  );
}
