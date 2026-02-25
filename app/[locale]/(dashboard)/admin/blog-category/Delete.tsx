"use client";

import { BlogCategory } from "@/lib/generated/prisma";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaTrash } from "react-icons/fa6";
import { useBlogCategory } from "@/hooks/tanstack-hooks/useBlogCategory";
// import { deleteBlogCategory } from "@/actions/blogCategory";

interface DeleteProps {
  category: BlogCategory;
}

export default function Delete({ category }: DeleteProps) {
  const [open, setOpen] = useState(false);
  // const [pending, setPending] = useState(false);
  const { deleteCategory, isDeleting: pending } = useBlogCategory();

  const handleDelete = async () => {
    // setPending(true);
    // const result = await deleteBlogCategory(category.id);
    const result = await deleteCategory(category.id);
    if (!result?.ok) {
      toast.error(result?.message);
      return;
    }
    toast.success(result.message);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="ghost" disabled={category.isDefault} className="w-full justify-start text-red-500">
          <FaTrash /> <span>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Category {category.name}</DialogTitle>
          <DialogDescription>
            Delete <b>{category.name}</b>, this action cannot be undone, are you sure?
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mt-4">
          <Button variant="destructive" type="button" disabled={pending} onClick={handleDelete} className="w-28">
            {pending && <Spinner />}
            Delete
          </Button>
          <DialogClose asChild>
            <Button type="button" className="w-28">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
