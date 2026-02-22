"use client";

import { adminMenu } from "@/lib/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RefreshData from "../RefreshData";
import { usePathname } from "next/navigation";

export default function AdminMenu() {
  const pathname = usePathname();
  return (
    <div className="sticky top-16 flex items-center overflow-y-scroll gap-1 [&::-webkit-scrollbar]:hidden z-20 mb-3 bg-white">
      <div className="sticky left-0 bg-white">
        <RefreshData />
      </div>
      {adminMenu.map((item, i) => {
        const isActive = pathname === `/en${item.url}` || pathname === `/id${item.url}`;
        return (
          <Button key={i} variant={"ghost"} asChild className={`${isActive ? "font-bold" : ""}`}>
            <Link href={item.url}>{item.label}</Link>
          </Button>
        );
      })}
    </div>
  );
}
