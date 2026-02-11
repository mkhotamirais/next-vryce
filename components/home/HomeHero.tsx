import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations("home.hero");
  const b = useTranslations("buttons");

  const title = t("title");
  const tagline = t("tagline");
  const description = t("description");
  const ourServices = b("our_services");

  return (
    <section className="py-12 md:pt-28 md:pb-16">
      <div className="container relative">
        <div className="-z-50 text-[400px] blur-2xl text-primary/30 font-medium absolute top-0 leading-none">V</div>
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium text-primary">{tagline}</p>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground">{description}</p>
          <div className="flex gap-2">
            <Button size={"lg"} className="w-48 py-8 px-12 text-lg rounded-full" asChild>
              <a href="#services">{ourServices}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
