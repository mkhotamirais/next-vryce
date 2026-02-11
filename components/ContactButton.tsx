import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactButton() {
  const t = useTranslations("buttons");

  const contact = t("contact");

  return (
    <Button variant={"outline"} className="border" size={"lg"}>
      <Link href="/services" className="flex items-center gap-2">
        <Phone />
        {contact}
      </Link>
    </Button>
  );
}
