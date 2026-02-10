import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import SwitchLangButton from "../SwitchLangButton";
import useMenu from "@/hooks/useMenu";
import { Tag } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NavDesktop() {
  const { mainMenu } = useMenu();
  const t = useTranslations("buttons");

  const pricing = t("pricing");

  return (
    <div className="hidden lg:flex justify-between items-center">
      <nav>
        <ul className="flex">
          {mainMenu.map((item) => (
            <li key={item.label}>
              <Button variant={"ghost"} asChild className="">
                <Link href={item.url}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="" size={"lg"}>
          <Link href="/services" className="flex items-center gap-2">
            <Tag />
            {pricing}
          </Link>
        </Button>
        <SwitchLangButton />
      </div>
    </div>
  );
}
