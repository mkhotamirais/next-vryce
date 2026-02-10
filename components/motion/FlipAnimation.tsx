"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const defaultTeks = ["satu", "dua", "tiga"];

export default function FlipAnimation({ texts = defaultTeks }: { texts: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="py-2 overflow-hidden h-[1.2em] flex items-center justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block text-2xl origin-center text-primary font-semibold"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
