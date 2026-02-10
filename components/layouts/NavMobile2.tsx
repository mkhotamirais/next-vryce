import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function NavMobile2() {
  return (
    <div className="flex lg:hidden justify-end">
      <Button size={"icon-lg"} variant={"outline"}>
        <Menu className="size-6" />
      </Button>
      <div className="absolute border w-full top-16">
        <div>halo</div>
        <div>halo</div>
        <div>halo</div>
      </div>
    </div>
  );
}
