import React from "react";

export default function HeroWrapper({ title = "Judul" }: { title: string }) {
  return (
    <section className="py-16 scroll-mt-16 bg-white bg-[radial-gradient(circle_at_top_right,rgba(41,98,255,0.15)_0%,transparent_40%),radial-gradient(circle_at_left_bottom,rgba(41,98,255,0.15)_0%,transparent_40%)]">
      <div className="container text-center relative">
        {/* Huruf V besar di background */}
        {/* <div className="text-[200px] blur-xl border text-primary/30 font-medium absolute top-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none">
          V
        </div> */}

        <h1 className="text-4xl lg:text-6xl font-bold relative z-10 text-gray-900">{title}</h1>
      </div>
    </section>
  );
}
