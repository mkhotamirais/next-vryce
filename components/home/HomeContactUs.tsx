import { useTranslations } from "next-intl";
// import { Button } from "../ui/button";
// import { FaWhatsapp } from "react-icons/fa6";
// import { links } from "@/lib/common";
import HomeContactForm from "./HomeContactForm";

// const wa = links.wa;

export default function HomeContactUs() {
  const t = useTranslations("home.contact");
  // const c = useTranslations("contact");
  // const b = useTranslations("buttons");

  const title = t("title");
  const description = t("description");
  // const contactUs = b("contact");
  // const cWa = c("c_wa");
  // const cEmail = c("c_email");

  return (
    <section id="contact" className="scroll-mt-12 py-12 bg-primary/3">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="h2">{title}</h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              {description}
              {/* {cWa}{" "}
              <a href={wa.url} className="text-primary font-semibold">
                WhatsApp {wa.label}
              </a>{" "}
              {cEmail} */}
            </p>
          </div>
          {/* <Button
            className="py-8 px-16! rounded-full w-fit text-primary text-lg hover:ring-2 transition-all"
            variant={"outline"}
            asChild
          >
            <a href={wa.url} aria-label="Contact WhatsApp Vryce">
              <FaWhatsapp className="size-6" />
              {contactUs}
            </a>
          </Button> */}
          <div>
            <HomeContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
