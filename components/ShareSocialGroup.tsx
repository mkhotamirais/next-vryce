"use client";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";
import { Button } from "./ui/button";
import { Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function ShareSocialGroup({ url = "vryce.id", title = "vryce" }: { url: string; title: string }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="rounded-full border-primary text-primary" size={"lg"}>
          <Share2 className={`${open ? "rotate-90" : ""} transition-all`} />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        <div className="flex py-2 px-3 gap-3">
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label="copy link"
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full"
                  onClick={() => navigator.clipboard.writeText(url)}
                >
                  <Copy />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy Link</p>
              </TooltipContent>
            </Tooltip>
          </div>
          {/* WhatsApp */}
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          {/* Facebook */}
          <FacebookShareButton url={url} quote={title} hashtag={"#nextjs"}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          {/* Twitter / X */}
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          {/* Line */}
          <LineShareButton url={url} title={title}>
            <LineIcon size={32} round />
          </LineShareButton>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
