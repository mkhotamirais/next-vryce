import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  pathnames: {
    "/": "/",
    "/services": {
      en: "/services",
      id: "/layanan",
    },
    "/digital-core": {
      en: "/digital-core",
      id: "/solusi-digital",
    },
    "/talent": {
      en: "/talent",
      id: "/talenta",
    },
    "/blog": {
      en: "/blog",
      id: "/blog",
    },
  },
});
