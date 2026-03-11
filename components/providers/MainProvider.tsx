"use client";

import { useMobileMenu } from "@/hooks/zustand-hooks/useMobileMenu";
import React from "react";

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useMobileMenu();

  const handleClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <main onClick={handleClick} className="min-h-screen">
      {children}
    </main>
  );
}
