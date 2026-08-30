"use client";

import useMenu from "@/hooks/useMenu";
import { useMobileMenu } from "@/hooks/zustand-hooks/useMobileMenu";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ContactButton from "../buttons/ContactButton";

export default function NavMobilePushContent() {
  const { open, setOpen } = useMobileMenu();
  const { mainMenu } = useMenu();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`z-50 grid transition-all duation-300 ease-in-out lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-100"}`}
    >
      <div className="overflow-hidden border-b">
        <div className="px-2 py-3">
          <div>
            {mainMenu.map((item) => (
              <div key={item.label} className="mb-2">
                <Button asChild variant={"ghost"} className="block">
                  <Link href={item.url} onClick={() => setOpen(false)} className="block py-2 px-4 hover:bg-gray-200">
                    {item.label}
                  </Link>
                </Button>
              </div>
            ))}
            <ContactButton className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
