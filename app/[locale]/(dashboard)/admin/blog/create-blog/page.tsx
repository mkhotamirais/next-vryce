import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CreateBlogForm from "./CreateBlogForm";

export default function CreateBlog() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-2xl">Create Blog</h1>
        <Button>
          <Link href="/admin/blog">Go to Blog List</Link>
        </Button>
      </div>
      <CreateBlogForm />
    </div>
  );
}
