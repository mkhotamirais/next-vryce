import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "../cards/ServiceCard";
import { Link } from "@/i18n/navigation";
import { serviceFourKeys, serviceThreeKeys } from "@/lib/common";

export default function Services() {
  const t = useTranslations("home");
  const b = useTranslations("buttons");
  const s = useTranslations("services");

  const title = t("services.title");
  const tagline = t("services.tagline");
  const description = t("services.description");
  const viewMoreServices = b("view_more_services");

  return (
    <SectionWrapper id="services" tagline={tagline} title={title} description={description} className="">
      <div className="grid-services lg:hidden 2xl:grid">
        {serviceThreeKeys.map((key) => {
          const serviceData = {
            title: s(`${key}.title`),
            purpose: s(`${key}.purpose`),
            benefits: s(`${key}.benefits`),
            price: s(`${key}.price`),
            priceFor: s(`${key}.priceFor`),
            priceNote: s(`${key}.priceNote`),
          };

          return <ServiceCard key={key} service={serviceData} />;
        })}
      </div>

      <div className="grid-services hidden lg:grid 2xl:hidden">
        {serviceFourKeys.map((key) => {
          const serviceData = {
            title: s(`${key}.title`),
            purpose: s(`${key}.purpose`),
            benefits: s(`${key}.benefits`),
            price: s(`${key}.price`),
            priceFor: s(`${key}.priceFor`),
            priceNote: s(`${key}.priceNote`),
          };

          return <ServiceCard key={key} service={serviceData} />;
        })}
      </div>
      <div className="mt-8 text-center">
        <Button size={"lg"} asChild className="mx-auto">
          <Link href="/services">
            {viewMoreServices}
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
