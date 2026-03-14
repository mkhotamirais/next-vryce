import { useTranslations } from "next-intl";

export default function DcNaration() {
  const t = useTranslations("digital_core");
  // const b = useTranslations("buttons");

  const subTitle1 = t("sub_title_1");
  const subTitle2 = t("sub_title_2");
  const p1 = t("p_1");
  const p2 = t("p_2");
  // const ourServices = b("our_services");

  return (
    <section className="py-12">
      <div className="container flex flex-col md:flex-row gap-12 leading-relaxed">
        <div className="w-full md:w-3/5">
          {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-linear-to-br from-gray-700 md:from-primary from-50% to-gray-700 to-50% bg-clip-text text-transparent">
              {subTitle1}
            </h2> */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800 mb-4">{subTitle1}</h2>
          {/* <Link
              href="#digital-services"
              className="flex items-center gap-2 text-primary hover:underline mt-8 font-semibold"
            >
              {ourServices}
              <ArrowDown className="" />
            </Link> */}
          <p className="text-muted-foreground">{p1}</p>
        </div>
        <div className="w-full md:w-2/5">
          {/* <h2 className="lext-left text-3xl md:text-4xl font-bold tracking-tighter bg-linear-to-br from-gray-700 md:from-primary from-50% to-gray-700 to-50% bg-clip-text text-transparent">
            {subTitle2}
          </h2> */}
          <h2 className="lext-left text-3xl md:text-3xl font-bold tracking-tighter text-gray-800 mb-4">{subTitle2}</h2>
          <p className="text-muted-foreground">{p2}</p>
        </div>
      </div>
    </section>
  );
}
