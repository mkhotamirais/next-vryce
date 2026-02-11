import { useTranslations } from "next-intl";
import Image from "next/image";

const clientListUrl = [
  { alt: "Panorama Alam", src: "/images/clients/logo-panoramaalam.svg" },
  { alt: "Kamirelawan", src: "/images/clients/logo-kamirelawan.png" },
];

export default function HomeOurClients() {
  const t = useTranslations("home.our_clients");
  const title = t("title");
  const description = t("description");

  return (
    <div className="pt-16 pb-8 flex flex-col items-center bg-radial from-white from-70% to-primary/6 to-100%">
      <h2 className="h2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex items-center gap-12 mb-4">
        {clientListUrl.map((item, i) => (
          <Image key={i} src={item.src} alt={item.alt} width={100} height={100} className="w-28" />
        ))}
      </div>
    </div>
  );
}
