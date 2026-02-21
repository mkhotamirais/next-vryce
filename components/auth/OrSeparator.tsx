import { Separator } from "@/components/ui/separator";
import React from "react";

export default function OrSeparator() {
  return (
    <div className="relative py-8">
      <div className="absolute left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 px-4 font-medium">or</div>
      <Separator />
    </div>
  );
}
