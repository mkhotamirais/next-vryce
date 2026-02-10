import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Tag } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PricingButton() {
  const t = useTranslations("buttons");

  const pricing = t("pricing");

  return (
    <Button className="" size={"lg"}>
      <Link href="/services" className="flex items-center gap-2">
        <Tag />
        {pricing}
      </Link>
    </Button>
  );
}
