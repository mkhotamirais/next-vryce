import { talentPeoples } from "@/lib/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TalentCard from "../cards/TalentCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import * as motion from "motion/react-client";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";

export default function HomeTalent() {
  const t = useTranslations("talent");
  const b = useTranslations("buttons");

  const title = t("sub_title_1");
  const p2 = t("paragraph_2");
  const p2_list = t("p2_list").replaceAll(" | ", "; ");
  const description = p2 + " " + p2_list;
  // const moreTalentDetails = b("view_talent_details");
  const moreTalents = b("more_talents");

  return (
    <section className="py-12 lg:py-16 bg-primary/3">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <m.div
            variants={fades}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/3 order-2 md:order-1"
          >
            <Image
              src="/images/talent/talent-1-iqbal.jpeg"
              alt="vryce talent"
              width={500}
              height={500}
              className="w-full h-full object-contain rounded-xl"
            />
          </m.div>
          <div className="w-full md:w-2/3 leading-relaxed space-y-8 order-1 md:order-2">
            <div>
              <m.h2
                variants={fades}
                custom={{ direction: "right" }}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                className="h2 max-w-100"
              >
                {title}
              </m.h2>
              <m.p
                variants={fades}
                custom={{ direction: "in", delay: 0.1 }}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                className="text-muted-foreground"
              >
                {description}
              </m.p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <m.h3
                  variants={fades}
                  custom={{ direction: "right" }}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="border-l-2 pl-4 border-primary leading-relaxed font-semibold text-lg"
                >
                  Vryce Talents
                </m.h3>
                <Button variant={"link"} asChild>
                  <Link href="/talent#talentPeoples">
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
