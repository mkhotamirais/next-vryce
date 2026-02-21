"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function AuthBtn() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex justify-end ">
      {session?.user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="">Dashboard</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/admin">Admin Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
              className="font-bold"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {/* <Button variant={"default"} asChild>
          <Link href="/login">
            Login
            <LogIn />
          </Link>
        </Button> */}
    </div>
  );
}
