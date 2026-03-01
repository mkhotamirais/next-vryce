import z from "zod";
import { TValidate } from "@/types";

export const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().pipe(z.email()),
  message: z.string().trim().min(1),
});

export const localizedContactSchema = (t: TValidate) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, t("common.required", { field: "Name" })),
    email: z
      .string()
      .trim()
      .min(1, t("common.required", { field: "Email" }))
      .pipe(z.email(t("email.invalid"))),
    message: z
      .string()
      .trim()
      .min(1, t("common.required", { field: "Message" })),
  });
