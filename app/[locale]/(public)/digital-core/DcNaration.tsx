import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DcNaration() {
  const t = useTranslations("digital_core");
  const b = useTranslations("buttons");

  const subTitle1 = t("sub_title_1");
  const subTitle2 = t("sub_title_2");
  const p1 = t("p_1");
  const p2 = t("p_2");
  const ourServices = b("our_services");

  return (
    <section className="py-12">
      <div className="container space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-linear-to-br from-primary from-50% to-gray-700 to-50% bg-clip-text text-transparent">
              {subTitle1}
            </h2>
            <Link
              href="#digital-services"
              className="flex items-center gap-2 text-primary hover:underline mt-8 font-semibold"
            >
              {ourServices}
              <ArrowDown className="" />
            </Link>
          </div>
          <p className="text-muted-foreground">{p1}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed items-end">
          <p className="order-2 md:order-1 text-muted-foreground">{p2}</p>
          <h2 className="order-1 md:order-2 lext-left md:text-right text-4xl md:text-5xl font-bold tracking-tighter bg-linear-to-br from-primary from-50% to-gray-700 to-50% bg-clip-text text-transparent">
            {subTitle2}
          </h2>
        </div>
      </div>
    </section>
  );
}
