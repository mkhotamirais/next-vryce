import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://vryce.id";

  return {
    rules: {
      userAgent: "*", // Berlaku untuk semua bot (Google, Bing, dll)
      allow: "/", // Izinkan akses ke seluruh halaman publik
      disallow: [
        "/api/", // Jangan indeks route API
        "/_next/", // Jangan indeks file internal Next.js
        "/admin/", // Jika ada dashboard admin, sebaiknya dilarang
      ],
    },
    // Menghubungkan bot langsung ke file sitemap yang kita buat tadi
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
