"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import SwitchLangButton from "../SwitchLangButton";
import useMenu from "@/hooks/useMenu";
import { usePathname } from "next/navigation";
import ContactButton from "../ContactButton";

export default function NavDesktop() {
  const { mainMenu } = useMenu();
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex justify-between items-center">
      <nav>
        <ul className="flex gap-1">
          {mainMenu.map((item) => {
            const isActive =
              pathname === `/en${item.url}` ||
              pathname === `/id${item.url}` ||
              (item.url === "/" && (pathname === "/en" || pathname === "/id"));
            return (
              <li key={item.label}>
                <Button variant={isActive ? "secondary" : "ghost"} asChild className="">
                  <Link href={item.url}>{item.label}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ContactButton />
        <SwitchLangButton />
      </div>
    </div>
  );
}
