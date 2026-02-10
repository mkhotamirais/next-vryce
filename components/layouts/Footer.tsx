import React from "react";
import Logo from "../Logo";
import FooterMenu from "./FooterMenu";
import { useTranslations } from "next-intl";
import useMenu from "@/hooks/useMenu";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const f = useTranslations("footer");

  const tagline = f("tagline");

  const title1 = f("menu_1.title");
  const title2 = f("menu_2.title");
  const { footerMenu1, footerMenu2 } = useMenu();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container pt-12 pb-8">
        <div className="grid grid-cols-4 gap-8">
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
          <FooterMenu title={title1} list={footerMenu1} />
          <FooterMenu title={title2} list={footerMenu2} />
          <div>
            <div className="mb-8">
              <h4 className="font-semibold text-xl mb-4">Contact Vryce</h4>
              <div>
                <a
                  href="https://google.com"
                  className="py-2 inline-flex text-gray-400 hover:underline items-center gap-2"
                >
                  <Mail />
                  email@email.com
                </a>
                <a
                  href="https://google.com"
                  className="py-2 inline-flex text-gray-400 hover:underline items-center gap-2"
                >
                  <Phone />
                  081234567890
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Socials</h4>
              <div className="text-2xl text-gray-400">
                <FaInstagram />
              </div>
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
