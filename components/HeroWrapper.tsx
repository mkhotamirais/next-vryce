import React from "react";

export default function HeroWrapper({ title = "Judul", headline = "headline" }: { title: string; headline?: string }) {
  return (
    <section className="py-16 scroll-mt-16 bg-white bg-[radial-gradient(circle_at_top_right,rgba(41,98,255,0.15)_0%,transparent_40%),radial-gradient(circle_at_left_bottom,rgba(41,98,255,0.15)_0%,transparent_40%)]">
      <div className="container text-left md:text-center relative max-w-4xl! mx-auto">
        <h1 className="text-5xl font-bold relative z-10 text-gray-900 mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground mx-auto sr-only">{headline}</p>
      </div>
    </section>
  );
}
