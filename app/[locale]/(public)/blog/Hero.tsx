import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import React from "react";

export default function Hero() {
  const t = useTranslations("blog");
  const title = t("title");
  return <HeroWrapper title={title} />;
}
