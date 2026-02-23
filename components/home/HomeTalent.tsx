import { talentPeoples } from "@/lib/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TalentCard from "../cards/TalentCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeTalent() {
  const t = useTranslations("talent");
  const b = useTranslations("buttons");

  const title = t("sub_title_1");
  const p2 = t("paragraph_2");
  const p2_list = t("p2_list").replaceAll(" | ", "; ");
  const description = p2 + " " + p2_list;
  const moreTalent = b("view_more_talent");

  return (
    <section className="py-12 lg:py-16 bg-primary/3">
      <div className="container">
        <div className="flex gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/talent/talent-1-iqbal.jpeg"
              alt="vryce talent"
              width={500}
              height={500}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 leading-relaxed space-y-8">
            <div>
              <h2 className="h2 max-w-100">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div>
              <h3 className="border-l-2 pl-4 border-primary leading-relaxed font-semibold text-lg mb-4">
                Vryce Talents
              </h3>
              <div className="flex gap-4 items-center">
                {talentPeoples.slice(0, 3).map((talent, index) => (
                  <TalentCard key={index} talent={talent} />
                ))}
                <Button size={"icon-lg"} variant={"outline"} className="rounded-full text-primary ml-4">
                  <Link href="/talent#talentPeoples">
                    <span className="sr-only">More Talets People</span>
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button size={"lg"} asChild className="mx-auto">
            <Link href="/talent">
              {moreTalent}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
