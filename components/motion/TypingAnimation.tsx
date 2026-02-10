"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Performance-Driven", "Data-Focused", "Result-Oriented"];

export default function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[textIndex].slice(0, latest));

  useEffect(() => {
    const controls = animate(count, texts[textIndex].length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        // Jeda sebelum menghapus atau ganti teks
        setTimeout(() => {
          animate(count, 0, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            onComplete: () => {
              setTextIndex((prev) => (prev + 1) % texts.length);
            },
          });
        }, 1000); // Durasi teks berhenti sebelum dihapus
      },
    });
    return controls.stop;
  }, [textIndex, count]);

  return (
    <div className="">
      <motion.span className="text-2xl h-10">{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block w-0.5 h-7 bg-primary"
      />
    </div>
  );
}
