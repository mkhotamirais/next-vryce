import { Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/layouts/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/dist/client/components/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Footer2 from "@/components/layouts/Footer2";
import ButtonEdge from "@/components/ButtonEdge";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { baseUrl } from "@/lib/common";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      // canonical: `${baseUrl}/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
        "x-default": "/id",
      },
    },
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
          <TooltipProvider>
            <NextIntlClientProvider>
              <Toaster position="top-center" richColors />
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer2 />
              <ButtonEdge />
            </NextIntlClientProvider>
          </TooltipProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
