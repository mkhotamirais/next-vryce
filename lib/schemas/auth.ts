import z from "zod";
import { TValidate } from "@/types";

export const loginSchema = z.object({
  email: z.string().trim().pipe(z.email()),
  password: z.string().min(8),
});

export const registerSchema = z
  .object({
    name: z.string().min(1).max(50),
    email: z.string().trim().pipe(z.email()),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

export const localizedLoginSchema = (t: TValidate) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, t("common.required", { field: "Email" }))
      .pipe(z.email(t("email.invalid"))),
    password: z.string().min(8, t("common.min", { field: "Password", min: 8 })),
  });

export const localizedRegisterSchema = (t: TValidate) =>
  z
    .object({
      name: z
        .string()
        .min(1, t("common.required", { field: "Name" }))
        .max(50, t("common.max", { field: "Name", max: 50 })),
      email: z
        .string()
        .trim()
        .min(1, t("common.required", { field: "Email" }))
        .pipe(z.email(t("email.invalid"))),
      password: z.string().min(8, t("common.min", { field: "Password", min: 8 })),
      confirmPassword: z.string().min(1, t("common.required", { field: "Confirm Password" })),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("common.mismatch"),
      path: ["confirmPassword"],
    });
