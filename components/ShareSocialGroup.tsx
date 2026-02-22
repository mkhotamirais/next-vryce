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
import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
  url: string;
  title: string;
};

export default function ShareSocialGroup({ url = "https://vryce.id", title = "vryce" }: Props) {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isOpenCopy, setIsOpenCopy] = useState(false);

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
            <Tooltip open={isOpenCopy || isCopied} onOpenChange={setIsOpenCopy}>
              <TooltipTrigger asChild>
                <Button
                  aria-label="copy link"
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full"
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 1500);
                  }}
                >
                  {isCopied ? <Check className="text-primary" /> : <Copy />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isCopied ? "Copied!" : "Copy Link"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          {/* WhatsApp */}
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          {/* <a href={url} title={title} target="_blank" rel="noopener noreferrer">
            <WhatsappIcon size={32} round />
          </a> */}

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
