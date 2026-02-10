"use client";

import { Button } from "./ui/button";
import Link from "next/dist/client/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { IService } from "@/hooks/useServices";
import { usePathname } from "next/navigation";

export default function ServiceCard({ item }: { item: IService }) {
  const b = useTranslations("buttons");
  const l = useTranslations("labels");

  const pathname = usePathname();
  const isServicesPage = pathname.includes("/services") || pathname.includes("/layanan");

  const viewDetails = b("view_details");
  const purposeLabel = l("purpose");
  const benefitsLabel = l("benefits");

  return (
    <div
      className={`bg-white flex flex-col space-y-4 shadow hover:shadow-md p-6 rounded-lg transition-all ${isServicesPage ? "" : "text-center items-center"} `}
    >
      <h3 className="text-xl font-bold max-w-64">{item.title}</h3>
      <div>
        <p className="text-2xl font-semibold mb-1 space-x-1 leading-none">
          <span className="text-primary">{item.price.replace("juta", "jt").replace("Million", "M")}</span>
          <span className="text-sm">/</span>
          <span className="text-sm first-letter:text-red-500">{item.priceFor.replace("month", "mo")}</span>
        </p>
        <p className="text-sm">{item.priceNote}</p>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        <span className="font-semibold">{purposeLabel}: </span>
        {item.purpose}
      </p>
      {isServicesPage ? (
        <div className="self-start">
          <h4 className="font-semibold mb-2 text-left">{benefitsLabel}:</h4>
          <ul className="text-sm text-left leading-relaxed space-y-2 mb-4">
            {item.benefits.map((feature, i) => (
              <li key={i} className="before:content-[$] before:text-primary before:mr-2">
                <CheckCircle className="inline-block mr-2 text-primary" size={14} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Button variant={"link"} asChild>
          <Link href="/services">
            {viewDetails}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
