import { div } from "motion/react-m";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="text-2xl font-bold">
        {/* <span>VRYCE</span> */}
        {/* <span className="tracking-[6px]">VRYCE</span> */}
        {/* <span className="text-[9px]">Digital Marketing Agency</span> */}
        <Image src="/images/logos/BONUS_LOGO.png" alt="Vryce Logo" width={100} height={100} className="w-24" />
        {/* <Image
          src="/images/logos/WATERMARK_TRANSPARANT.png"
          alt="logo mkhotami"
          width={100}
          height={20}
          className="dark:invert"
        /> */}
      </Link>
    </div>
  );
}
