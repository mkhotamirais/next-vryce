import { useTranslations } from "next-intl";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
// import { motion } from "motion/react";
// import * as motion from "motion/react-client";
import * as m from "motion/react-m";
import { varContainer, varItemSlideLeft } from "@/lib/animations";

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
            <m.ul
              variants={varContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="leading-relaxed space-y-4 text-muted-foreground"
            >
              {points.map((item, i) => (
                <m.li key={i} variants={varItemSlideLeft} className="flex items-center gap-2 font-medium">
                  <CheckCircle className="text-primary min-w-5 w-5" />
                  {item}
                </m.li>
              ))}
            </m.ul>
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
