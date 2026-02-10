import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <header className="h-16 sticky top-0 bg-white z-30">
      <div className="container flex gap-8 items-center justify-between">
        <Logo />
        <div className="flex-1">
          <NavDesktop />
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
