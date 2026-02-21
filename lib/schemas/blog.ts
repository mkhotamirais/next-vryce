import z from "zod";

export const blogCategorySchema = z.object({
  name: z
    .string()
    .min(1, { message: "Blog category name is required" })
    .transform((val) => val.trim()),
});

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255, "Title is too long"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  image: z
    .any()
    .refine((file): file is File | null => file === null || file instanceof File, "Invalid file")
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, "Max file size is 2MB")
    .refine(
      (file) => !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "Only JPG/JPEG/PNG allowed",
    )
    .nullable()
    .optional(),
  categoryId: z.string(),
});

// export const blogSchema = z.object({
//   title: z.string().min(3, "Title must be at least 3 characters").max(255, "Title is too long"),
//   content: z.string().min(10, "Content must be at least 10 characters"),
//   image: z
//     .any()
//     .refine((file) => file === "" || file === null || file instanceof File, "Invalid file")
//     .refine((file) => !file || file.size <= 2 * 1024 * 1024, "Max file size is 2MB")
//     .refine(
//       (file) => !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
//       "Only JPG/JPEG/PNG allowed",
//     )
//     .optional()
//     .nullable(),
//   categoryId: z.any().pipe(z.cuid("Invalid category ID")).optional().nullable(),
// });
