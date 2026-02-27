"use client";

import ServiceCard from "@/components/cards/ServiceCard";
import useServices from "@/hooks/useServices";
import { useEffect, useRef } from "react";

export default function DcServices() {
  const { digitalServices } = useServices();
  const digitalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen TIDAK sedang terlihat di layar (keluar dari viewport)
        // dan hash di URL saat ini adalah #digital-services
        if (!entry.isIntersecting && window.location.hash === "#digital-services") {
          // Menghapus hash tanpa memicu refresh halaman atau looping router
          window.history.replaceState(null, "", window.location.pathname);
        }
      },
      {
        threshold: 0, // Memicu aksi segera setelah elemen mulai menghilang
        rootMargin: "-10% 0px -10% 0px", // Memberi sedikit toleransi area
      },
    );

    if (digitalRef.current) {
      observer.observe(digitalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={digitalRef} id="digital-services" className="scroll-mt-12 py-12 lg:py-16 bg-primary/4">
      <div className="container">
        <h2 className="h2 text-center">Digital Services</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {digitalServices.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
