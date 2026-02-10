"use client";

import { mainMenu } from "@/lib/content";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

export default function NavMobile() {
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
            <SheetTitle>
              <SheetClose>
                <Logo />
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
