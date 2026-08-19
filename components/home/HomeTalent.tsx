import { talentPeoples } from "@/lib/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TalentCard from "../cards/TalentCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import * as motion from "motion/react-client";
// import * as m from "motion/react-m";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";

export default function HomeTalent() {
  // const t = useTranslations("talent");
  const b = useTranslations("buttons");
  const ht = useTranslations("home.talent");

  const title = ht("title");
  // const p2 = t("paragraph_2");
  // const p2_list = t("p2_list").replaceAll(" | ", "; ");
  const desc = ht("description");
  // const description = p2 + " " + p2_list;
  // const moreTalentDetails = b("view_talent_details");
  const moreTalents = b("more_talents");

  return (
    <section className="py-16 bg-primary/2">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <m.div
            variants={fades}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full h-126 lg:w-1/3 order-2 lg:order-1 rounded-xl overflow-hidden border border-primary/5"
          >
            <Image
              src="/images/vryce-team.png"
              alt="vryce talent"
              width={500}
              height={500}
              className="w-full h-full object-contain object-center bg-white"
            />
          </m.div>
          <div className="w-full lg:w-2/3 leading-relaxed space-y-8 order-1 lg:order-2">
            <div className="mb-12">
              <m.h2
                variants={fades}
                custom={{ direction: "right" }}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                className="h2 text-left"
              >
                {title.split("&")[0]} &
                <br /> {title.split("&")[1]}
              </m.h2>
              <m.p
                variants={fades}
                custom={{ direction: "in", delay: 0.1 }}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                className="text-gray-600 text-left text-lg"
              >
                {/* {description.split(/optimized for:|yang dioptimalkan/i)[0]}
                <span className="hidden md:inline">
                  optimized for: {description.split(/optimized for:|yang dioptimalkan/i)[1]}
                </span> */}
                {desc}
              </m.p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <m.h3
                  variants={fades}
                  custom={{ direction: "right" }}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="border-l-2 pl-4 border-primary leading-relaxed font-semibold text-xl"
                >
                  Vryce Talents
                </m.h3>
                <Button variant={"link"} asChild>
                  <Link href="/talent" className="text-lg">
                    <span className="">{moreTalents}</span>
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {talentPeoples.slice(0, 4).map((talent, index) => (
                  <TalentCard key={index} talent={talent} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 text-center">
          <Button size={"lg"} asChild className="mx-auto">
            <Link href="/talent">
              {moreTalentDetails}
              <ArrowRight />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
