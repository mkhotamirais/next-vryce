import TalentCard from "@/components/cards/TalentCard";
import { useTranslations } from "next-intl";
import { talentPeoples } from "@/lib/common";
import { fades } from "@/lib/animations";
import * as m from "motion/react-m";

export default function TalentList({ className, title }: { className?: string; title?: string }) {
  const t = useTranslations("talent");

  const sub_title_3 = t("sub_title_3");
  return (
    <section id="talentPeoples" className={`scroll-mt-16 py-12 lg:px-16 leading-loose ${className}`}>
      <div className="container">
        <m.h2
          variants={fades}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="h2 text-center mb-12! capitalize"
        >
          {title ?? sub_title_3}
        </m.h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-8"> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-4xl mx-auto gap-8">
          {talentPeoples.map((item, i) => (
            <TalentCard key={i} talent={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
