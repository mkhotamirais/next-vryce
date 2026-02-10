import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      id: "/tentang",
    },
    "/services": {
      en: "/services",
      id: "/layanan",
    },
    "/contact": {
      en: "/contact",
      id: "/kontak",
    },
  },
});
