"use client";

import Pagination from "@/components/ui/custom/Pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import { smartTrim } from "@/lib/utils";
import Delete from "./Delete";
import { BlogProps } from "@/types/blog";

interface BlogListProps {
  blogs: BlogProps[];
  page: number;
  limit: number;
  keyword?: string;
  totalBlogsCount: number;
  totalPages: number;
}

export default function List({ blogs, page, limit, totalPages, totalBlogsCount }: BlogListProps) {
  return (
    <>
      <div>
        {blogs?.length ? (
          <div>
            {blogs?.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between mb-2 p-1 rounded-lg shadow">
                <div className="flex gap-2 items-center">
                  <Image
                    src={blog?.imageUrl || "/images/hero_image.jpg"}
                    width={50}
                    height={50}
                    alt="blog image"
                    className="size-12 object-cover object-center"
                  />
                  <Link href={`/blog/detail/${blog.slug}`}>
                    <h3 className="text-sm md:text-base font-semibold first-letter:uppercase hover:underline">
                      {smartTrim(blog.title, 56)}
                    </h3>
                  </Link>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size={"icon"}>
                        <MoreVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/blog/detail/${blog.slug}`}>Detail</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/blog/edit-blog/${blog.slug}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Delete blog={blog} setOpen={() => {}} />
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>No Blog Found</h2>
        )}
      </div>
      {totalBlogsCount > limit ? (
        <Pagination totalPages={totalPages} currentPage={page} path="/admin/blog/page" />
      ) : null}
    </>
  );
}
