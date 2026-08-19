"use client";

import ServiceCard from "@/components/cards/ServiceCard";
import { serviceDigitalKeys } from "@/lib/common";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function DcServices() {
  const digitalRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("services");

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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {serviceDigitalKeys.map((key) => {
            const serviceData = {
              title: t(`${key}.title`),
              purpose: t(`${key}.purpose`),
              benefits: t(`${key}.benefits`),
              price: t(`${key}.price`),
              priceFor: t(`${key}.priceFor`),
              priceNote: t(`${key}.priceNote`),
            };

            return <ServiceCard key={key} service={serviceData} />;
          })}
        </div>
      </div>
    </section>
  );
}
