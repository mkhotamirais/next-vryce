import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold">
      <span>VRYCE</span>
      {/* <span className="tracking-[6px]">VRYCE</span> */}
      {/* <span className="text-[9px]">Digital Marketing Agency</span> */}
    </Link>
  );
}
