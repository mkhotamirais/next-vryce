import { useTranslations } from "next-intl";

export default function useMenu() {
  const t = useTranslations("main_menu");
  const f = useTranslations("footer");

  const mainMenu = [
    { label: t("home.label"), url: t("home.url") },
    { label: t("services.label"), url: t("services.url") },
    { label: t("digital_core.label"), url: t("digital_core.url") },
    { label: t("talent.label"), url: t("talent.url") },
    { label: t("blog.label"), url: t("blog.url") },
  ];

  const footerMenu1 = [
    { label: f("menu_1.menu.layanan1.label"), url: f("menu_1.menu.layanan1.url") },
    { label: f("menu_1.menu.layanan2.label"), url: f("menu_1.menu.layanan2.url") },
    { label: f("menu_1.menu.layanan3.label"), url: f("menu_1.menu.layanan3.url") },
    { label: f("menu_1.menu.layanan4.label"), url: f("menu_1.menu.layanan4.url") },
    { label: f("menu_1.menu.layanan5.label"), url: f("menu_1.menu.layanan5.url") },
  ];

  const footerMenu2 = [
    { label: f("menu_2.menu.about.label"), url: f("menu_2.menu.about.url") },
    { label: f("menu_2.menu.talent.label"), url: f("menu_2.menu.talent.url") },
    { label: f("menu_2.menu.digital_core.label"), url: f("menu_2.menu.digital_core.url") },
    { label: f("menu_2.menu.blog.label"), url: f("menu_2.menu.blog.url") },
  ];

  return { mainMenu, footerMenu1, footerMenu2 };
}
