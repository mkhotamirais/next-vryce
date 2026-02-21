import React from "react";
import Image from "next/image";
import { BlogProps } from "@/types/blog";
import { diffForHumans, smartTrim } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Calendar, ImageIcon } from "lucide-react";
import { Badge } from "../ui/badge";

type Props = {
  blog: BlogProps;
};

export default function BlogCard({ blog }: Props) {
  return (
    <div className="flex flex-col w-full rounded-lg overflow-hidden shadow bg-white">
      <Link href={`/blog/detail/${blog.slug}`} className="h-64">
        {blog?.imageUrl ? (
          <Image
            src={blog?.imageUrl}
            width={100}
            height={100}
            alt="blog image"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <ImageIcon className="size-40" />
          </div>
        )}
      </Link>
      <div className="p-6 space-y-4">
        <div>
          <Badge>{blog.BlogCategory.name}</Badge>
        </div>
        <Link href={`/blog/detail/${blog.slug}`} className="inline-block">
          <h3 className="font-semibold first-letter:uppercase text-xl hover:underline hover:text-primary transition-all">
            {smartTrim(blog.title, 60)}
          </h3>
        </Link>
        <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: smartTrim(blog.content, 120) }}></div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="size-4" />
          <span>{diffForHumans(blog.createdAt)}</span>
        </div>
        <Link
          href={`/blog/detail/${blog.slug}`}
          className="w-fit text-primary flex items-center gap-1 text-sm hover:underline"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
