"use client";

import { sendEmail } from "@/actions/contact";
import { contactSchema, localizedContactSchema } from "@/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { Send } from "lucide-react";

type inferContactSchema = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations("validate");
  const l = useTranslations("labels");
  const c = useTranslations("home.contact");

  const name = l("name");
  const yourName = l("your_name");
  const message = l("message");
  const yourMessage = l("your_message");
  const labelBtn = c("label_btn");

  const router = useRouter();

  const form = useForm<inferContactSchema>({
    resolver: zodResolver(localizedContactSchema(t)),
    defaultValues: { name: "", email: "", message: "" },
  });

  const pending = form.formState.isSubmitting;

  const onSubmit = async (data: inferContactSchema) => {
    const { name, email, message } = data;
    const res = await sendEmail({ name, email, message });

    if (!res.ok) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    form.reset();
    router.refresh();
  };

  return (
    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
      {/* <FieldGroup className="p-8 bg-white rounded-lg border border-primary/10"> */}
      <FieldGroup>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">{name}</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder={yourName}
                  autoComplete="off"
                  className="bg-white py-6"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
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
                  className="bg-white py-6"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">{message}</FieldLabel>
              <Textarea
                {...field}
                id="message"
                aria-invalid={fieldState.invalid}
                placeholder={yourMessage}
                autoComplete="off"
                className="min-h-32 bg-white"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" disabled={pending} size={"lg"} className="py-6">
          {pending && <Spinner />}
          {labelBtn}
          <Send />
        </Button>
      </FieldGroup>
    </form>
  );
}
