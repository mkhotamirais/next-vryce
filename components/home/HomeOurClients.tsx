import { useTranslations } from "next-intl";
import Image from "next/image";
// import * as motion from "motion/react-client";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";

const clientListUrl = [
  { alt: "Panorama Alam", src: "/images/clients/logo-panoramaalam.svg" },
  { alt: "Kamirelawan", src: "/images/clients/logo-kamirelawan.png" },
];

export default function HomeOurClients() {
  const t = useTranslations("home.our_clients");
  const title = t("title");
  const description = t("description");

  return (
    <section className="pt-16 pb-8 flex flex-col items-center">
      <div className="container">
        <m.h2 variants={fades} initial="hide" whileInView="show" viewport={{ once: true }} className="h2">
          {title}
        </m.h2>
        <m.p
          variants={fades}
          custom={{ direction: "in", delay: 0.1 }}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="text-muted-foreground text-center"
        >
          {description}
        </m.p>
        <div className="flex items-center gap-12 mb-4">
          {clientListUrl.map((item, i) => (
            <m.div key={i} variants={fades} initial="hide" whileInView="show" viewport={{ once: true }}>
              <Image src={item.src} alt={item.alt} width={100} height={100} className="w-28" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
