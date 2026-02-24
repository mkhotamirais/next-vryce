// components/layouts/AuthDropdown.tsx
"use client";

import { signOut } from "next-auth/react"; // Atau gunakan logout action
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function AuthDropdown({ userName }: { userName: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Dashboard ({userName})</Button>
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
