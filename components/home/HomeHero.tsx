import React from "react";
import { Button } from "../ui/button";
// import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations("home.hero");
  const b = useTranslations("buttons");

  const title = t("title");
  const tagline = t("tagline");
  const description = t("description");
  const ourServices = b("our_services");

  return (
    <section className="py-12 md:py-28">
      <div className="container relative">
        <div className="text-[400px] blur-2xl text-primary/30 font-medium absolute top-0 leading-none">V</div>
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
          <div className="flex flex-col items-center">
            <p className="text-xl lg:text-2xl font-medium text-primary">{tagline}</p>
            {/* <Separator className="max-w-32 bg-primary mt-2 min-h-1 rounded" /> */}
          </div>
          <p className="text-base lg:text-lg text-muted-foreground">{description}</p>
          <div className="flex gap-2">
            <Button size={"lg"} className="w-48 py-8 px-12 text-lg rounded-full" asChild>
              {/* <Link href="#services">{ourServices}</Link> */}
              <a href="#services">{ourServices}</a>
            </Button>
            {/* <Button variant={"outline"} size={"lg"} asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button> */}
          </div>
          <div className="w-full md:w-1/3 h-full"></div>
        </div>
      </div>
    </section>
  );
}
