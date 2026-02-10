import { useTranslations } from "next-intl";
import Image from "next/image";

const clientListUrl = [
  { alt: "Panorama Alam", src: "/images/clients/logo-panoramaalam.svg" },
  { alt: "Kamirelawan", src: "/images/clients/logo-kamirelawan.png" },
];
export default function HomeHeroClients() {
  const t = useTranslations("home");
  const label = t("our_clients_label");
  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="font-semibold">{label}</p>
      <div className="flex items-center gap-12 mb-4">
        {clientListUrl.map((item, i) => (
          <Image key={i} src={item.src} alt={item.alt} width={100} height={100} className="w-28" />
        ))}
      </div>
    </div>
  );
}
