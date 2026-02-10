import React from "react";
import { Separator } from "../ui/separator";

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
        <div className="mb-8 max-w-4xl mx-auto text-center">
          <div className="text-primary font-semibold mb-1">{tagline}</div>
          <h2 className="h2 text-center">{title}</h2>
          <Separator className="max-w-32 min-h-0.5 rounded bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-center">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
