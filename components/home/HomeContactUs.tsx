import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { links } from "@/lib/common";

const wa = links.wa;

export default function HomeContactUs() {
  const t = useTranslations("home.contact");
  const b = useTranslations("buttons");

  const title = t("title");
  const description = t("description");
  const contactUs = b("contact");

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container flex flex-col items-center max-w-2xl text-center">
        <h2 className="h2">{title}</h2>
        <p className="mb-8">{description}</p>
        <Button
          className="py-8 px-16! rounded-full w-fit text-primary text-lg hover:ring-2 transition-all"
          variant={"outline"}
          asChild
        >
          <a href={wa.url} aria-label="Contact WhatsApp Vryce">
            <FaWhatsapp className="size-6" />
            {contactUs}
          </a>
        </Button>
      </div>
    </section>
  );
}
