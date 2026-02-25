import { BlogProps } from "@/types/blog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// 1. Hook Utama untuk List & CRUD
export const useBlog = ({
  page = 1,
  limit = 8,
  keyword = "",
}: { page?: number; limit?: number; keyword?: string } = {}) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["blogs", page, limit, keyword],
    queryFn: async () => {
      const res = await fetch(`/api/blog?page=${page}&limit=${limit}&keyword=${keyword || ""}`);
      const result = await res.json();
      return result;
    },
    placeholderData: (previousData) => previousData, // UX halus saat ganti halaman
  });

  // CREATE BLOG (Menggunakan FormData)
  const createMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  // UPDATE BLOG (Menggunakan Slug/ID & FormData)
  const updateMutation = useMutation({
    mutationFn: async ({ slug, formData }: { slug: string; formData: FormData }) => {
      const res = await fetch(`/api/blog/${slug}`, {
        method: "PUT",
        body: formData,
      });
      const result = await res.json();
      if (result.error || result.errors) throw result;
      return result;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      // Juga refresh cache detail blog yang spesifik ini
      queryClient.invalidateQueries({ queryKey: ["blog", variables.slug] });
    },
  });

  // DELETE BLOG (Menggunakan Slug)
  const deleteMutation = useMutation({
    mutationFn: async (slug: string) => {
      const res = await fetch(`/api/blog/${slug}`, { method: "DELETE" });
      const result = await res.json();
      if (result.error) throw result;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  return {
    ...query,
    blogs: query.data?.blogs as BlogProps[],
    totalBlogsCount: query.data?.totalBlogsCount as number,
    totalPages: query.data?.totalPages as number,
    createBlog: createMutation.mutateAsync, // Pakai Async agar bisa di-await di form
    isCreating: createMutation.isPending,
    updateBlog: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
    deleteBlog: deleteMutation.mutateAsync,
    isDeleting: deleteMutation.isPending,
  };
};

export const useBlogDetail = (slug: string) => {
  return useQuery({
    queryKey: ["blog-detail", slug],
    queryFn: async () => {
      if (!slug) return null;
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) throw new Error("Blog not found");
      return res.json();
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
