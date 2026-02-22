export const links = {
  email: { label: "contact@vryce.id", url: "https://mailto:contact@vryce.id" },
  wa: { label: "+62 896-1158-0649", url: "https://wa.me/6287766606133" },
};

export const adminMenu = [
  { label: "Home Admin", url: "/admin" },
  { label: "Blog", url: "/admin/blog" },
  { label: "Blog Category", url: "/admin/blog-category" },
];

export const address = "Denpasar, Bali, Indonesia";

export const blogLimit = 12;

const isProd = process.env.NODE_ENV === "production";
export const baseUrl = isProd ? "https://vryce.id" : "http://localhost:3000";
