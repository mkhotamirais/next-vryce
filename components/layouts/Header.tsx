import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
// import NavMobile2 from "./NavMobile2";

export default function Header() {
  return (
    <header className="h-16 sticky top-0 bg-white/70 z-30 backdrop-blur-xl">
      <div className="container flex gap-8 items-center justify-between">
        <Logo />
        <div className="flex-1">
          <NavDesktop />
          <NavMobile />
          {/* <NavMobile2 /> */}
        </div>
      </div>
    </header>
  );
}
