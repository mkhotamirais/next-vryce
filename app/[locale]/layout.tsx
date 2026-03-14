import { Montserrat } from "next/font/google";
import "../globals.css";
// import Header from "@/components/layouts/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/dist/client/components/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
// import Footer2 from "@/components/layouts/Footer2";
import ButtonEdge from "@/components/ButtonEdge";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { Toaster } from "sonner";
import { baseUrl } from "@/lib/common";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import ClientProvider from "@/components/providers/ClientProvider";
import MainProvider from "@/components/providers/MainProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | Vryce`,
      default: t("title"),
    },
    description: t("description"),
    // alternates: {
    //   // canonical: `/${locale}`,
    //   languages: {
    //     en: "/en",
    //     id: "/id",
    //     "x-default": "/id",
    //   },
    // },
    // 3. Tambahkan OpenGraph agar link terlihat bagus di Google & Medsos
    // openGraph: {
    //   title: t("title"),
    //   description: t("description"),
    //   url: `/${locale}`,
    //   siteName: "Vryce",
    //   locale: locale === "id" ? "id_ID" : "en_US",
    //   type: "website",
    //   // images: [{ url: '/og-image.png' }] // Tambahkan jika ada gambar preview
    // },

    // 4. Verifikasi Search Console (Opsional, tapi membantu)
    // verification: {
    //   google: 'kode-verifikasi-dari-gsc',
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} font-montserrat`}>
        <NextAuthProvider>
          <NextIntlClientProvider>
            <ClientProvider>
              <AnimationProvider>
                <Toaster position="top-center" richColors swipeDirections={["left", "right", "top"]} />
                {/* <Header /> */}
                <MainProvider>{children}</MainProvider>
                {/* <Footer2 /> */}
                <ButtonEdge />
              </AnimationProvider>
            </ClientProvider>
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
