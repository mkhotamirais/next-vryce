"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { BlogCategory } from "@/lib/generated/prisma";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { blogSchema } from "@/lib/schemas/blog";
import { useBlogCategory } from "@/hooks/tanstack-hooks/useBlogCategory";
import TiptapEditor from "@/components/ui/custom/tiptap/TiptapEditor";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { createBlog } from "@/actions/blog";

type inferSchema = z.infer<typeof blogSchema>;

export default function CreateBlogForm() {
  const { data: blogCategories }: { data: BlogCategory[] | undefined } = useBlogCategory();
  const defaultCategory = blogCategories?.find((category) => category.isDefault);

  const form = useForm<inferSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues: { title: "", content: "", categoryId: "", image: undefined },
  });
  const pending = form.formState.isSubmitting;

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const blogCategoriesOptions = blogCategories
    ?.sort((a, b) => {
      if (a.isDefault && !b.isDefault) return -1;
      if (!a.isDefault && b.isDefault) return 1;
      return a.name.localeCompare(b.name);
    })
    .map((category) => ({
      label: category.name,
      value: category.id,
    }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (file: File | null) => void) => {
    const file = e.target.files?.[0] || null;

    onChange(file);

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleRemoveImage = (onChange: (file: null) => void) => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    onChange(null);
    setImagePreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: inferSchema) => {
    const { title, content, categoryId, image } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categoryId", categoryId || defaultCategory?.id || "");
    if (image) {
      formData.append("image", image as Blob);
    }

    const result = await createBlog(formData);

    if (!result?.ok) {
      toast.error(result.message);
      return;
    }

    setImagePreview(null);
    form.reset();

    toast.success(result?.message);
    router.refresh();
    router.back();
  };

  return (
    <>
      <form id="blog-category-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="image"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="image">Image</FieldLabel>
                <div className="space-y-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    ref={(e) => {
                      field.ref(e);
                      fileInputRef.current = e;
                    }}
                    onChange={(e) => handleFileChange(e, field.onChange)}
                  />

                  {imagePreview && (
                    <div className="relative mt-2">
                      <Image
                        src={imagePreview}
                        alt="preview"
                        width={500}
                        height={300}
                        className="w-full h-56 object-contain rounded border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveImage(field.onChange)}
                        className="absolute right-3 top-3"
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  )}
                </div>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input {...field} id="title" aria-invalid={fieldState.invalid} placeholder="Blog title" />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="content"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="content">Content</FieldLabel>
                <TiptapEditor value={field.value} onChange={field.onChange} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="categoryId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="categoryId">Category</FieldLabel>
                <Select value={field.value || defaultCategory?.id || ""} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih category" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogCategoriesOptions?.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>{" "}
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
    </>
  );
}
