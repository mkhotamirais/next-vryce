"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { localizedLoginSchema, loginSchema } from "@/lib/schemas/auth";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Controller, useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import z from "zod";

type inferLoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isPassword, setIsPassword] = React.useState(true);
  const t = useTranslations("validate");
  const router = useRouter();

  const form = useForm<inferLoginSchema>({
    resolver: zodResolver(localizedLoginSchema(t)),
    defaultValues: { email: "", password: "" },
  });
  const pending = form.formState.isSubmitting;

  const onSubmit = async (data: inferLoginSchema) => {
    const { email, password } = data;
    const res = await signIn("credentials", { email, password, redirect: false });

    if (res?.error) {
      if (res.code === "credentials") {
        toast.error("Invalid email or password.");
      } else {
        toast.error(res.code);
      }
    }
    form.reset();
    router.refresh();
  };

  return (
    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="example@email.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="max-w-sm">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  id="password"
                  type={isPassword ? "password" : "text"}
                  placeholder="Enter password"
                />
                <InputGroupAddon align="inline-end">
                  <Button
                    tabIndex={-1}
                    type="button"
                    variant={"ghost"}
                    size="icon"
                    onClick={() => setIsPassword(!isPassword)}
                  >
                    {isPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" className="mt-6 w-full" disabled={pending}>
        {pending && <Spinner />}
        Login
      </Button>
    </form>
  );
}
