"use client";

import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/ui/custom/Pagination";
import { BlogProps } from "@/types/blog";

interface Props {
  blogs: BlogProps[];
  page: number;
  limit: number;
  totalPages: number;
  totalBlogsCount: number;
  keyword?: string;
}

export default function List({ blogs, totalBlogsCount, totalPages, page, limit }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((item: BlogProps) => (
          <BlogCard key={item.id} blog={item} />
        ))}
      </div>
      {totalBlogsCount > limit ? (
        <div className="mt-8 mb-4 flex justify-center">
          <Pagination totalPages={totalPages} currentPage={page} path="/blog/page" />
        </div>
      ) : null}
    </>
  );
}
