import React from "react";
import Logo from "../Logo";
// import FooterMenu from "./FooterMenu";
import { useTranslations } from "next-intl";
// import useMenu from "@/hooks/useMenu";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { links as l } from "@/lib/common";

export default function Footer2() {
  const f = useTranslations("footer");

  const tagline = f("tagline");

  // const title1 = f("menu_1.title");
  // const title2 = f("menu_2.title");
  const title3 = f("menu_3.title");
  const title4 = f("menu_4.title");
  // const { footerMenu2 } = useMenu();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div>
              <Logo />
            </div>
            <p className="text-gray-400">{tagline}</p>
            {/* <div>
              <address className="text-gray-400 not-italic">
                Alamat: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, harum?
              </address>
            </div> */}
            {/* <PricingButton /> */}
          </div>
          {/* <FooterMenu title={title1} list={footerMenu1} /> */}
          {/* <FooterMenu title={title2} list={footerMenu2} /> */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Address</h4>
            <address className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut illum!
            </address>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4">{title3}</h4>
            <div>
              <a href={l.email.url} className="py-2 inline-flex text-gray-400 hover:underline items-center gap-2">
                <Mail className="size-5" />
                {l.email.label}
              </a>
              <a href={l.wa.url} className="py-2 inline-flex text-gray-400 hover:underline items-center gap-2">
                <Phone className="size-5" />
                {l.wa.label}
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4">{title4}</h4>
            <div className="text-xl text-gray-400">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-900 text-sm text-center">
        <div className="container text-sm">Copyright © 2024 Vryce. All rights reserved.</div>
      </div>
    </footer>
  );
}
