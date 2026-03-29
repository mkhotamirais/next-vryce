import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ variant = "default" }: { variant?: "default" | "dark" }) {
  return (
    <div>
      <Link href="/" className="text-2xl font-bold">
        {variant === "dark" ? (
          <Image src="/images/logos/LOGO.png" alt="Vryce Logo" width={100} height={120} className="w-30" />
        ) : (
          <Image src="/images/logos/BONUS_LOGO.png" alt="Vryce Logo" width={100} height={100} className="w-24" />
        )}
      </Link>
    </div>
  );
}
