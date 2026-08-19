"use client";

// import { Button } from "../ui/button";
import Link from "next/dist/client/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
// import { motion } from "motion/react";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";
import { IService } from "@/types/services";

export default function ServiceCard({ service: item }: { service: IService }) {
  const b = useTranslations("buttons");
  const l = useTranslations("labels");

  const pathname = usePathname();
  const isServicesPage = pathname.includes("/services") || pathname.includes("/layanan");

  const viewDetails = b("view_details");
  const purposeLabel = l("purpose");
  const benefitsLabel = l("benefits");

  return (
    <m.div
      variants={fades}
      custom={{ delay: 0.1 }}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`bg-white flex flex-col space-y-4 shadow p-6 rounded-lg`}
    >
      <h3 className="text-2xl font-bold h-auto lg:h-16">{item.title}</h3>
      {/* <div className="h-auto md:h-12">
        <p className="text-2xl font-semibold mb-1 space-x-1 leading-none">
          <span className="text-primary">{item.price.replace("juta", "jt").replace("Million", "M")}</span>
          <span className="text-sm">/</span>
          <span className="text-sm first-letter:text-red-500">{item.priceFor.replace("month", "mo")}</span>
        </p>
        <p className="text-sm">{item.priceNote}</p>
      </div> */}
      <p className="h-auto lg:h-28 xl:h-40 2xl:h-30 text-gray-500 text-base leading-relaxed">
        <span className="font-semibold">{purposeLabel}: </span>
        {item.purpose}
      </p>
      {isServicesPage ? (
        <div className="self-start">
          <h4 className="font-semibold mb-2 text-left">{benefitsLabel}:</h4>
          <ul className="text-base text-left leading-relaxed space-y-2 mb-4">
            {item.benefits.split("|").map((feature, i) => (
              <li key={i} className="before:content-[$] before:text-primary before:mr-2">
                <CheckCircle className="inline-block mr-2 text-primary" size={14} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link
          href="/services"
          className="flex items-center gap-2 text-primary font-medium text-sm py-2 hover:underline"
        >
          {viewDetails}
          <ArrowRight className="size-4" />
        </Link>
      )}
    </m.div>
  );
}
