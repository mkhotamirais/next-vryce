const isProd = process.env.NODE_ENV === "production";
export const baseUrl = isProd ? "https://vryce.id" : "http://localhost:3000";
export const address = "Denpasar, Bali, Indonesia";
export const blogLimit = 12;

export const links = {
  email: { label: "contact@vryce.id", url: "mailto:contact@vryce.id?subject=Tanya%20Layanan%20Vryce" },
  wa: {
    label: "+62 896-1158-0649",
    url: "https://wa.me/628123456789?text=Halo%20Vryce%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
  },
  ig: { label: "vryce.id", url: "https://www.instagram.com/vryce.id?igsh=aHZlZGNkNzZraW1w" },
};

export const adminMenu = [
  { label: "Home Admin", url: "/admin" },
  { label: "Blog", url: "/admin/blog" },
  { label: "Blog Category", url: "/admin/blog-category" },
];

export const talentPeoples = [
  { name: "Iqbal", role: " Model & Creator", image: "/images/talent/talent-1-iqbal.jpeg" },
  { name: "Faiqordhowi", role: " Model & Creator", image: "/images/talent/talent-2-faiqordhowi.jpeg" },
];
