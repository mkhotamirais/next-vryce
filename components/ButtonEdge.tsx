"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaChevronUp, FaWhatsapp } from "react-icons/fa6";
import { links as l } from "@/lib/common";

const wa = l.wa;

export default function ButtonEdge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol muncul jika scroll lebih dari 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 sm:bottom-10 right-8 sm:right-16 flex items-center gap-2">
      {isVisible && (
        <Button variant={"outline"} asChild className="size-12 animate-in rounded-full text-primary">
          <a href="#top" aria-label="scroll to top">
            <FaChevronUp className="size-5" />
          </a>
        </Button>
      )}
      <Button size="lg" asChild className="py-6 px-auto sm:px-8! text-white rounded-full bg-primary/70">
        <a href={wa.url} aria-label="Contact WhatsApp Vryce">
          <FaWhatsapp className="size-6" />
          <span className="hidden sm:inline-block">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}
