"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IService } from "@/types/services";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ModalService({ service }: { service: IService }) {
  const b = useTranslations("buttons");

  const viewDetails = b("view_details");

  return (
    <Dialog>
      <DialogTrigger className="text-primary font-semibold text-base hover:underline">{viewDetails}</DialogTrigger>

      <DialogContent className="max-h-[90vh] lg:min-w-150 flex flex-col justify-start gap-0">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl font-bold">{service.title}</DialogTitle>
          <DialogDescription className="text-gray-500 text-sm md:text-base leading-relaxed">
            {service.purpose}
          </DialogDescription>
        </DialogHeader>

        {/* Kontainer berisikan scrollbar internal jika konten tinggi */}
        <div className="overflow-y-auto pr-2 mt-2">
          <article>
            <h4 className="font-semibold mb-2 text-left">Benefits:</h4>
            <ul className="text-muted-foreground text-sm md:text-base text-left leading-relaxed space-y-2 mb-4">
              {service.benefits.split("|").map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={16} />
                  <span>{feature.trim()}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </DialogContent>
    </Dialog>
  );
}
