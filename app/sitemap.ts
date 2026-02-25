import { BlogProps } from "@/types/blog";
import { MetadataRoute } from "next";

// 1. Fungsi Fetch Data Blog (Dijalankan di Server)
async function getBlogs() {
  try {
    // Ganti dengan URL API backend atau CMS kamu
    const res = await fetch("https://vryce.id/api/blog", {
      next: { revalidate: 3600 }, // Cache data selama 1 jam
    });

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Sitemap Blog Fetch Error:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vryce.id";

  // 2. Daftar Halaman Statis (Source of Truth untuk Mapping Bahasa)
  const routes = [
    { id: "", en: "" }, // Home
    { id: "/layanan", en: "/services" }, // Services
    { id: "/solusi-digital", en: "/digital-core" }, // Digital Core
    { id: "/talent", en: "/talent" }, // Talent
    { id: "/blog", en: "/blog" }, // Blog
    { id: "/tentang", en: "/about" }, // About
    { id: "/kontak", en: "/contact" }, // Contact
  ];

  // 3. Generate Entri Statis secara Otomatis (ID & EN)
  const staticEntries = routes.flatMap((route) => [
    // Versi Bahasa Indonesia
    {
      url: `${baseUrl}/id${route.id}`,
      lastModified: new Date(),
      priority: route.id === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id${route.id}`,
          en: `${baseUrl}/en${route.en}`,
        },
      },
    },
    // Versi Bahasa Inggris
    {
      url: `${baseUrl}/en${route.en}`,
      lastModified: new Date(),
      priority: route.en === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id${route.id}`,
          en: `${baseUrl}/en${route.en}`,
        },
      },
    },
  ]);

  // 4. Generate Entri Blog (Hanya Bahasa Indonesia)
  const blogs = await getBlogs();

  const blogEntries = blogs.map((blog: BlogProps) => ({
    url: `${baseUrl}/id/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    priority: 0.6,
    alternates: {
      languages: {
        id: `${baseUrl}/id/blog/${blog.slug}`,
        // Jika tidak ada versi EN, tidak perlu didaftarkan di sini
      },
    },
  }));

  // Gabungkan semua entri
  return [...staticEntries, ...blogEntries];
}
