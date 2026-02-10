import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container pt-12 pb-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="">
            <Logo />
          </div>
          <div>menu1</div>
          <div>menu2</div>
          <div>kontak</div>
        </div>
      </div>
      <div className="py-4 bg-gray-800 text-sm text-center">
        <div className="container text-sm">Copyright © 2024 Vryce. All rights reserved.</div>
      </div>
    </footer>
  );
}
