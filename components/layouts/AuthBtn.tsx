"use client";

import { Link } from "@/i18n/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function AuthBtn() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (!session?.user || status !== "authenticated") return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Dashboard</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/admin">Admin Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="font-bold text-red-600">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
