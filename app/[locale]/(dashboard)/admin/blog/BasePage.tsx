import { Button } from "@/components/ui/button";
import Link from "next/link";
import List from "./List";
import { getBlogs } from "@/actions/getData";

interface Props {
  page: number;
  limit: number;
  keyword?: string;
}

export default async function BasePage({ page, limit, keyword }: Props) {
  const { blogs, totalBlogsCount, totalPages } = await getBlogs({ page, limit, keyword });

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <Button asChild>
          <Link href="/admin/blog/create-blog">Create Blog</Link>
        </Button>
      </div>
      <List
        blogs={blogs}
        page={page}
        totalPages={totalPages}
        totalBlogsCount={totalBlogsCount}
        limit={limit}
        keyword={keyword}
      />
    </>
  );
}
