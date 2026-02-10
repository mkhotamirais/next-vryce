import { cn } from "@/lib/utils";
import React from "react";

export function HomeHeroWrapper1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        "py-8 md:py-26 bg-[url('/images/hero_image_2.png')] bg-blend-soft-light bg-center bg-cover bg-no-repeat",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function HomeHeroWrapper2({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-8 md:py-28 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.2)_0%,transparent_50%)] bg-white">
      {children}
    </section>
  );
}

export function HomeHeroWrapper3({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-28 bg-[url('/images/box-minimalistic-svgrepo-com.svg')] bg-size-[80px_80px] bg-zinc-900 bg-blend-soft-light">
      {children}
    </section>
  );
}
