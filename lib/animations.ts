"use client";

import { Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "in";

export const fades: Variants = {
  hide: (custom?: { direction?: Direction }) => {
    const direction = custom?.direction || "up";
    const offset = 20;
    return {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    };
  },
  show: (custom?: { delay?: number }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5, delay: custom?.delay || 0 },
  }),
};
// Parent: Mengatur alur kemunculan anak-anaknya
export const varContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Child: Detail animasi per baris
export const varItemSlideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.4 } },
};
