"use client";

import { mainMenu } from "@/lib/content";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

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
            <SheetTitle>Title</SheetTitle>
            <SheetDescription className="sr-only">Mobile Menu</SheetDescription>
          </SheetHeader>
          <nav>
            <ul>
              {mainMenu.map((item, i) => (
                <li key={i}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
