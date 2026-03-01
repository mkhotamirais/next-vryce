"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";
import useMenu from "@/hooks/useMenu";
import { Link, usePathname } from "@/i18n/navigation";
import AuthBtn from "./AuthBtn";

export default function NavMobile() {
  const { mainMenu } = useMenu();
  const pathname = usePathname();

  return (
    <div className="flex lg:hidden justify-end">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon-lg"} aria-label="mobile menu" variant={"outline"}>
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <SheetClose>
                <Logo />
              </SheetClose>

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
                    <Button
                      asChild
                      className={`${pathname === item.url ? "font-semibold" : ""} block mb-1 border-b`}
                      variant={"ghost"}
                    >
                      <Link href={item.url}>{item.label}</Link>
                    </Button>
                  </SheetClose>
                </li>
              ))}
              {/* <li>
                <Button asChild className="block mb-1 text-center">
                  <Link href="/login">Login</Link>
                </Button>
              </li> */}
            </ul>
          </nav>
          <SheetFooter>
            <AuthBtn />

            {/* <Button asChild className="text-center" size={"lg"}>
              <Link href="/login">
                Login
                <LogIn />
              </Link>
            </Button> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
