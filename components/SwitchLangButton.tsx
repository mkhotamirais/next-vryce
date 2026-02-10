"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export default function SwitchLangButton() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "id" ? "en" : "id";

    // Cukup gunakan pathname secara langsung
    router.replace(pathname, { locale: nextLocale, scroll: false });
  };

  return (
    <Button variant={"ghost"} onClick={toggleLanguage}>
      <Globe />
      {locale === "id" ? "EN" : "ID"}
    </Button>
  );
}
