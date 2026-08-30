import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
// import { Button } from "../ui/button";
// import { FaWhatsapp } from "react-icons/fa6";
// import { links } from "@/lib/common";

// const wa = links.wa;

export default function Contact() {
  const t = useTranslations("home.contact");
  // const c = useTranslations("contact");
  // const b = useTranslations("buttons");

  const title = t("title");
  // const titleSplit = title.split(";");

  const description = t("description");
  // const contactUs = b("contact");
  // const cWa = c("c_wa");
  // const cEmail = c("c_email");

  return (
    <section
      id="contact"
      // className="scroll-mt-12 py-12 bg-[radial-gradient(circle_at_top,rgba(41,98,255,0.15)_10%,transparent_30%)]"
      // className="scroll-mt-12 py-12 bg-linear-to-b from-primary/10 from-10% to-white to-30%"
      className="scroll-mt-16 py-16 bg-primary/2"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 max-w-4xl mx-auto text-left sm:text-center">
            {/* <h2 className="text-2xl font-bold mb-4">{title}</h2> */}
            <h2 className="h2">
              {/* {titleSplit[0]} <br />
              {titleSplit[1]}{" "}
              <span className="md:hidden">
                <br />
              </span>
              {titleSplit[2]} <br /> */}
              {/* <span className="inline md:hidden">{title}</span> */}
              <span className="">
                {title.split(",")[0]},
                <br />
                {title.split(",")[1]}
              </span>
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600 text-left sm:text-center max-w-3xl mx-0 md:mx-auto text-sm md:text-base">
              <span className="hidden md:block">{description.split("?")[0]}?</span>
              <span className="">{description.split("?")[1]}</span>
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
