import React from "react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { links as l } from "@/lib/common";

const wa = l.wa;

export default function ContactButton() {
  const t = useTranslations("buttons");

  const contact = t("contact");

  return (
    <Button variant={"outline"} className="border">
      <a href={wa.url} className="flex items-center gap-2">
        <Phone />
        {contact}
      </a>
    </Button>
  );
}
