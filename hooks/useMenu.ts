import { useTranslations } from "next-intl";

export default function useMenu() {
  const t = useTranslations("main_menu");

  const mainMenu = [
    { label: t("home.label"), url: t("home.url") },
    { label: t("about.label"), url: t("about.url") },
    { label: t("services.label"), url: t("services.url") },
    { label: t("contact.label"), url: t("contact.url") },
  ];

  return { mainMenu };
}
