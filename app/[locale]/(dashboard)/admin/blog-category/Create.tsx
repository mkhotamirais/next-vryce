"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { blogCategorySchema } from "@/lib/schemas/blog";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { createBlogCategory } from "@/actions/blogCategory";

type inferSchema = z.infer<typeof blogCategorySchema>;

export default function Create() {
  const form = useForm<inferSchema>({
    resolver: zodResolver(blogCategorySchema),
    defaultValues: { name: "" },
  });
  const pending = form.formState.isSubmitting;

  // const { createCategory, isCreating: pending } = useBlogCategory();

  const onSubmit = async (data: inferSchema) => {
    // const res = await createCategory(data.name);
    const res = await createBlogCategory({ name: data.name });
    if (!res?.ok) {
      toast.error(res?.message || "error");
      return;
    }
    toast.success(res?.message || "success");
    setTimeout(() => {
      form.reset();
    }, 0);
  };

  return (
    <form id="blog-category-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="Blog category name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" className="mt-4" disabled={pending}>
        {pending && <Spinner />}
        Create
      </Button>
    </form>
  );
}
