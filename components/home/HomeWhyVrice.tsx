import { useTranslations } from "next-intl";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function HomeWhyVrice() {
  const t = useTranslations("home.why");

  const title = t("title");
  const tagline = t("tagline");
  const description = t("description");
  const points = t("points").split(" | ");

  return (
    <SectionWrapper tagline={tagline} title={title} description={description} className="bg-primary/3">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <ul className="leading-relaxed space-y-4 text-muted-foreground">
              {points.map((item, i) => (
                <li key={i} className="flex items-center gap-2 font-medium">
                  <CheckCircle className="text-primary min-w-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/why-vryce-image.svg"
              alt="Why Vryce"
              width={400}
              height={400}
              className="w-80 mx-auto"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
