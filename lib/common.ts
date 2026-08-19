const isProd = process.env.NODE_ENV === "production";
export const baseUrl = isProd ? "https://vryce.id" : "http://localhost:3000";
export const address = "Jakarta, Indonesia";
export const blogLimit = 12;

export const links = {
  email: { label: "contact@vryce.id", url: "mailto:contact@vryce.id?subject=Tanya%20Layanan%20Vryce" },
  wa: {
    label: "+62 812-3452-2367",
    url: "https://wa.me/6281234522367?text=Halo%20Vryce%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
  },
  ig: { label: "vryce.id", url: "https://www.instagram.com/vryce.id?igsh=aHZlZGNkNzZraW1w" },
};

export const adminMenu = [
  { label: "Home Admin", url: "/admin" },
  { label: "Blog", url: "/admin/blog" },
  { label: "Blog Category", url: "/admin/blog-category" },
];

export const talentPeoples = [
  // { name: "Iqbal", role: "Model & Creator", image: "/images/talent/talent-1-iqbal.jpeg" },
  // { name: "Faiqordhowi", role: "Model & Creator", image: "/images/talent/talent-2-faiqordhowi.jpeg" },
  // { name: "Wahyusntsoo", role: "Creator", image: "/images/talent/talent-3-wahyusntsoo.jpeg" },
  // { name: "Unokimuno", role: "Creator", image: "/images/talent/talent-4-unokimuno.jpeg" },
  { name: "Aldi", role: "Head of | Business Operations", image: "" },
  { name: "Wahyu", role: "Legal, Partnership | & Talent Lead", image: "/images/talent/talent-3-wahyusntsoo.jpeg" },
  { name: "Rivan", role: "Creative | Director", image: "" },
  { name: "Ota", role: "Web Developer | & Tech Lead", image: "/images/talent/talent-5-ota.jpg" },
];

export const serviceKeys = [
  "service_1",
  "service_2",
  "service_3",
  "service_4",
  "service_5",
  "service_6",
  "service_7",
  "service_8",
  "service_9",
];
export const serviceThreeKeys = ["service_1", "service_2", "service_3"];
export const serviceDigitalKeys = ["service_5", "service_6"];
