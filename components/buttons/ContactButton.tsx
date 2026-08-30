import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { links as l } from "@/lib/common";

const wa = l.wa;

export default function ContactButton({ className }: { className?: string }) {
  const t = useTranslations("buttons");

  const contact = t("contact");

  return (
    <Button
      variant={"ghost"}
      className={`${className} bg-primary text-white hover:text-primary hover:scale-110 rounded-lg`}
    >
      <a href={wa.url} className="flex items-center gap-2">
        <Phone />
        {contact}
      </a>
    </Button>
  );
}
