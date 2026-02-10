import useServices from "@/hooks/useServices";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "../ServiceCard";

export default function HomeServices() {
  const t = useTranslations("home");
  const b = useTranslations("buttons");

  const title = t("services.title");
  const tagline = t("services.tagline");
  const description = t("services.description");
  const viewMoreServices = b("view_more_services");

  const { services } = useServices();

  return (
    <SectionWrapper
      id="services"
      tagline={tagline}
      title={title}
      description={description}
      className="bg-linear-to-b from-primary/10 to-primary/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.slice(0, 3).map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
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
