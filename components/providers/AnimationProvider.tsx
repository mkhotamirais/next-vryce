"use client";
import { LazyMotion } from "motion/react";
import { useState, useEffect, ReactNode } from "react";

// Import loadFeatures secara dinamis
const loadFeatures = () => import("@/lib/motion-features").then((res) => res.default);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Gunakan requestIdleCallback atau setTimeout agar tidak menghambat hydration
    const handle = window.requestIdleCallback(() => setMounted(true));
    return () => window.cancelIdleCallback(handle);
  }, []);

  /**
   * Jika belum 'mounted' (detik awal load), kita kembalikan children saja.
   * Ini trik paling ampuh: Motion tidak akan diproses sama sekali
   * sampai browser benar-benar idle.
   */
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
