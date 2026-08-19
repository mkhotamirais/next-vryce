"use client";

import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
// import { motion } from "motion/react";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";
import { IService } from "@/types/services";
import ModalService from "../ModalService";

export default function ServiceCard({ service: item }: { service: IService }) {
  const l = useTranslations("labels");

  const purposeLabel = l("purpose");
  const benefitsLabel = l("benefits");

  return (
    <m.div
      variants={fades}
      custom={{ delay: 0.1 }}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`bg-white flex flex-col space-y-4 shadow p-4 md:p-6 rounded-lg`}
    >
      <h3 className="text-xl font-semibold h-auto lg:h-16 hyphens-auto">{item.title}</h3>
      <p className="h-auto lg:h-24 xl:h-20 2xl:h-26 text-gray-500 text-sm md:text-base leading-relaxed">
        <span className="font-semibold">{purposeLabel}: </span>
        {item.purpose}
      </p>
      <div className="self-start">
        <h4 className="font-semibold mb-2 text-left">{benefitsLabel}:</h4>
        <ul className="text-muted-foreground text-sm md:text-base text-left leading-relaxed space-y-2 mb-4 h-auto lg:h-40 xl:h-40 2xl:h-42">
          {item.benefits
            .split("|")
            .slice(0, 3)
            .map((feature, i) => (
              <li key={i} className="before:content-[$] before:text-primary before:mr-2">
                <CheckCircle className="inline-block mr-2 text-primary" size={14} />
                {feature}
              </li>
            ))}
        </ul>
        <ModalService service={item} />
      </div>
    </m.div>
  );
}
