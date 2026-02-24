// components/AnimationProvider.tsx
"use client";
import { LazyMotion } from "motion/react";

const loadFeatures = () => import("@/lib/motion-features").then((res) => res.default);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
