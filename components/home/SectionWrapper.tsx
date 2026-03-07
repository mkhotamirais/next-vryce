import React from "react";
import { Separator } from "../ui/separator";
// import { motion } from "motion/react";
// import * as motion from "motion/react-client";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";

interface ISectionWrapper {
  id?: string;
  tagline: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, tagline, title, description, children, className }: ISectionWrapper) {
  return (
    <section id={id} className={`${className} py-12 md:py-16 scroll-mt-12 md:scroll-mt-16`}>
      <div className="container">
        <div className="mb-8 max-w-4xl mx-auto text-left md:text-center">
          <m.div
            variants={fades}
            custom={{ direction: "down" }}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-1"
          >
            {tagline}
          </m.div>
          <m.h2
            variants={fades}
            initial={"hide"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="h2 text-left md:text-center"
          >
            {title}
          </m.h2>
          <Separator className="max-w-24 min-h-0.5 rounded bg-primary mx-0 md:mx-auto mb-4" />
          <m.p
            variants={fades}
            custom={{ direction: "in", delay: 0.1 }}
            initial={"hide"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-muted-foreground text-left md:text-center"
          >
            {description}
          </m.p>
        </div>
        {children}
      </div>
    </section>
  );
}
