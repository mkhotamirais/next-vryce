import List from "./List";
import { getTranslations } from "next-intl/server";
import HeroWrapper from "@/components/HeroWrapper";
import { getBlogs } from "@/actions/blog";

interface Props {
  page: number;
  limit: number;
  keyword?: string;
}

export default async function BasePage({ page, limit, keyword }: Props) {
  const { blogs, totalBlogsCount, totalPages } = await getBlogs({ page, limit, keyword });

  const t = await getTranslations("blog");
  const title = t("title");
  const headline = t("headline");

  return (
    <div className="scroll-mt-16">
      <HeroWrapper title={title} headline={headline} />;{" "}
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
