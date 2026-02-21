import List from "./List";
import Hero from "./Hero";
import { getBlogs } from "@/actions/getData";

interface Props {
  page: number;
  limit: number;
  keyword?: string;
}

export default async function BasePage({ page, limit, keyword }: Props) {
  const { blogs, totalBlogsCount, totalPages } = await getBlogs({ page, limit, keyword });

  return (
    <div className="scroll-mt-16">
      <Hero />
      <section className="py-12 bg-primary/2">
        <div className="container">
          <List
            blogs={blogs}
            page={page}
            totalPages={totalPages}
            totalBlogsCount={totalBlogsCount}
            limit={limit}
            keyword={keyword}
          />
        </div>
      </section>
    </div>
  );
}
