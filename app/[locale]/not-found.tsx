import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("not_found");

  const title = t("title");
  const subHeadline = t("sub_headline");
  const description = t("description");
  const button = t("button");

  return (
    <section className="pt-24">
      <div className="container flex flex-col gap-4 items-center">
        <h1 className="text-9xl font-semibold">{title}</h1>
        <h2 className="text-xl font-medium">{subHeadline}</h2>
        <p className="text-muted-foreground mb-8">{description}</p>
        <Button asChild size={"lg"}>
          <Link href="/">
            <Home />
            {button}
          </Link>
        </Button>
      </div>
    </section>
  );
}
