"use client";

import { localizedRegisterSchema } from "@/lib/schemas/auth";
import { useForm } from "@tanstack/react-form";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const t = useTranslations("validate");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const form = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    validators: { onSubmit: localizedRegisterSchema(t) },
    onSubmit: async ({ value }) => {
      console.log(value);
      toast.success("Form submitted successfully");
    },
  });
  return (
    <>
      <form
        id="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="name">
            {(field) => {
              const isValid = field.state.meta.isTouched && field.state.meta.errors.length > 0;
              return (
                <Field data-invalid={isValid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isValid}
                    placeholder="your name"
                    // autoComplete="off"
                  />
                  {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="email">
            {(field) => {
              const isValid = field.state.meta.isTouched && field.state.meta.errors.length > 0;
              return (
                <Field data-invalid={isValid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isValid}
                    placeholder="example@email.com"
                    // autoComplete="off"
                  />
                  {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="password">
            {(field) => {
              const isValid = field.state.meta.isTouched && field.state.meta.errors.length > 0;
              return (
                <Field data-invalid={isValid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isValid}
                      type={passwordType === "password" ? "password" : "text"}
                      placeholder="********"
                    />
                    <InputGroupAddon align="inline-end">
                      <Button
                        tabIndex={-1}
                        type="button"
                        variant={"ghost"}
                        size="icon"
                        onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
                      >
                        {passwordType === "password" ? <EyeIcon /> : <EyeOffIcon />}
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>

                  {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="confirmPassword">
            {(field) => {
              const isValid = field.state.meta.isTouched && field.state.meta.errors.length > 0;
              return (
                <Field data-invalid={isValid}>
                  <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isValid}
                      type={confirmPasswordType === "password" ? "password" : "text"}
                      placeholder="********"
                    />
                    <InputGroupAddon align="inline-end">
                      <Button
                        tabIndex={-1}
                        type="button"
                        variant={"ghost"}
                        size="icon"
                        onClick={() => setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password")}
                      >
                        {confirmPasswordType === "password" ? <EyeIcon /> : <EyeOffIcon />}
                      </Button>{" "}
                    </InputGroupAddon>
                  </InputGroup>

                  {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <Button type="submit">Register</Button>
        </FieldGroup>
      </form>
    </>
  );
}
