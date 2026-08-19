import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
// import { motion } from "motion/react";
// import * as motion from "motion/react-client";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";

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
        <div className="-z-50 text-[400px] blur-2xl text-primary/30 font-medium absolute top-0 leading-none">V</div>
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-6xl mx-auto space-y-6">
          <m.h1 variants={fades} initial="hide" animate="show" className="text-5xl md:text-6xl font-bold leading-tight">
            {title}
          </m.h1>
          <m.div
            variants={fades}
            custom={{ delay: 0.1, direction: "in" }}
            initial={"hide"}
            animate={"show"}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl font-medium text-primary">{tagline}</p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">{description}</p>
          </m.div>
          <m.div variants={fades} custom={{ delay: 0.2 }} initial="hide" animate="show" className="flex gap-2">
            <Button size={"lg"} className="w-46 py-7 px-12 text-lg rounded-xl" asChild>
              <Link href="/services">{ourServices}</Link>
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
}
