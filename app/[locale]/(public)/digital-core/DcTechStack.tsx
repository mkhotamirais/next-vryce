import React from "react";

import { SiReact, SiShadcnui, SiPrisma, SiVercel } from "react-icons/si";
import { RiNextjsLine, RiWordpressLine, RiTailwindCssLine } from "react-icons/ri";

export default function DcTechStack() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="h2 text-center">Tech Stack</h2>
        <div className="mt-8 text-4xl flex items-center justify-evenly gap-8 flex-wrap max-w-lg mx-auto">
          <RiNextjsLine />
          <SiReact />
          <RiWordpressLine />
          <SiShadcnui />
          <RiTailwindCssLine />
          <SiPrisma />
          <SiVercel />
        </div>
      </div>
    </section>
  );
}
