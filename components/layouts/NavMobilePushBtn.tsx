"use client";

import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/zustand-hooks/useMobileMenu";

export default function NavMobilePushBtn() {
  const { open, setOpen } = useMobileMenu();

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => setOpen(!open)} className={`flex lg:hidden`}>
      <span className={`${open ? "rotate-90" : ""} transition-transform ease-in-out`}>
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </span>
    </Button>
  );
}
