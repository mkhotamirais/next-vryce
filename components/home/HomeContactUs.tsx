import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";

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
        <p className="text-gray-200 mb-8">{description}</p>
        <Button
          className="py-8 px-16! rounded-full w-fit text-primary text-lg hover:ring-2 transition-all"
          variant={"outline"}
        >
          <FaWhatsapp className="size-6" />
          {contactUs}
        </Button>
      </div>
    </section>
  );
}
