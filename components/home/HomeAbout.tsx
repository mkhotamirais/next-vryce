import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeAbout() {
  const t = useTranslations("home.about");
  const b = useTranslations("buttons");

  const title = t("title");
  const paragraph1 = t("paragraph_1");
  const paragraph2 = t("paragraph_2");
  const aboutUs = b("about_us");

  const description = [paragraph1, paragraph2];

  return (
    <section className="py-12 md:py-16">
      {/* <section className="py-12 md:py-16 bg-slate-100/80"> */}
      <div className="container flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 order-2 md:order-1 flex items-center justify-center">
          <Camera className="size-50" />
        </div>
        <article className="w-full md:w-2/3 order-1 md:order-2">
          <h2 className="h2">{title}</h2>
          <div className="mb-8 leading-7 space-y-2 text-muted-foreground">
            {description.slice(0, 2).map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
          <Button size="lg" asChild>
            <Link href="/tentang">{aboutUs}</Link>
          </Button>
        </article>
      </div>
    </section>
  );
}
