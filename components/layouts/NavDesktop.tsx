"use client";

import { Button } from "../ui/button";
import SwitchLangButton from "../SwitchLangButton";
import useMenu from "@/hooks/useMenu";
import ContactButton from "../buttons/ContactButton";
import AuthBtn from "./AuthBtn";
import { Link, usePathname } from "@/i18n/navigation";

export default function NavDesktop() {
  const { mainMenu } = useMenu();
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex justify-between items-center">
      <nav>
        <ul className="flex gap-1">
          {mainMenu.map((item) => (
            <li key={item.label}>
              <Button variant={"ghost"} asChild className={`${pathname === item.url ? "font-semibold" : ""}`}>
                <Link href={item.url} className="">
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <ContactButton />
        <AuthBtn />
        <SwitchLangButton />
      </div>
    </div>
  );
}
