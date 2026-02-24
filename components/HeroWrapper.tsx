"use client";

import { fades } from "@/lib/animations";
import { motion } from "motion/react";

export default function HeroWrapper({ title = "Judul", headline = "headline" }: { title: string; headline?: string }) {
  return (
    <section className="py-12 lg:py-16 bg-white bg-[radial-gradient(circle_at_top_right,rgba(41,98,255,0.15)_0%,transparent_40%),radial-gradient(circle_at_left_bottom,rgba(41,98,255,0.15)_0%,transparent_40%)]">
      <div className="container text-center relative max-w-4xl! mx-auto">
        <motion.h1
          variants={fades}
          initial={"hide"}
          animate={"show"}
          className="text-4xl md:text-5xl font-bold relative z-10 text-gray-900 mb-6 leading-relaxed"
        >
          {title}
        </motion.h1>
        <p className="text-xl text-muted-foreground mx-auto sr-only">{headline}</p>
      </div>
    </section>
  );
}
