"use client";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import useMenu from "@/hooks/useMenu";
import SwitchLangButton from "../SwitchLangButton";

export default function NavMobile() {
  const { mainMenu } = useMenu();

  return (
    <div className="flex lg:hidden justify-end">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon-lg"} variant={"outline"}>
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <SheetClose>
                <Logo />
              </SheetClose>
              <div>
                <SwitchLangButton />
              </div>
              <SheetClose asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <X className="size-5" />
                </Button>
              </SheetClose>
            </SheetTitle>
            <SheetDescription className="sr-only">Mobile Menu</SheetDescription>
          </SheetHeader>
          <nav className="px-2">
            <ul>
              {mainMenu.map((item, i) => (
                <li key={i}>
                  <SheetClose asChild>
                    <Button asChild className="block mb-1" variant={"ghost"}>
                      <Link href={item.url}>{item.label}</Link>
                    </Button>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
