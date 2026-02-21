"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCategory } from "@/lib/generated/prisma";
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheck, FaSpinner, FaXmark } from "react-icons/fa6";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { blogCategorySchema } from "@/lib/schemas/blog";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateBlogCategory } from "@/actions/blogCategory";

type inferSchema = z.infer<typeof blogCategorySchema>;

interface EditProps {
  category: BlogCategory;
  setIsEdit: Dispatch<SetStateAction<string | null>>;
}

export default function Edit({ category, setIsEdit }: EditProps) {
  const [name, setName] = useState(category.name);

  const form = useForm<inferSchema>({
    resolver: zodResolver(blogCategorySchema),
    defaultValues: { name },
  });
  const pending = form.formState.isSubmitting;

  const onSubmit = async (data: inferSchema) => {
    const res = await updateBlogCategory({ id: category.id, name: data.name });
    if (!res?.ok) {
      toast.error(res?.message || "error");
      return;
    }
    toast.success(res?.message || "success");
    setIsEdit(null);
  };

  const cancelEdit = () => {
    setIsEdit(null);
    setName(category.name);
  };

  return (
    <form id="blog-category-form" className="flex items-center gap-2" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name" className="sr-only">
                Name
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="Blog category name"
                autoComplete="off"
                autoFocus
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="flex gap-2">
        <Button size="icon" type="submit" disabled={pending} aria-label="Save" onMouseDown={(e) => e.preventDefault()}>
          {pending ? <FaSpinner className="animate-spin" /> : <FaCheck />}
        </Button>
        <Button
          size="icon"
          variant={"destructive"}
          type="button"
          onClick={cancelEdit}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="Cancel"
        >
          <FaXmark />
        </Button>
      </div>
    </form>
  );
}
