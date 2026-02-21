"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useTransition } from "react";
import { FaGoogle } from "react-icons/fa6";

export default function OauthLogin() {
  const [pending, startTransition] = useTransition();

  const handleSignInGoogle = async () => {
    startTransition(async () => {
      await signIn("google");
    });
  };

  return (
    <div>
      <Button className="w-full" disabled={pending} onClick={handleSignInGoogle}>
        <FaGoogle size={20} /> <span>Login With Google</span>
      </Button>
    </div>
  );
}
