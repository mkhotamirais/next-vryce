"use client";

import List from "./List";
import HeroWrapper from "@/components/HeroWrapper";
import { useTranslations } from "next-intl";
import { useBlog } from "@/hooks/tanstack-hooks/useBlog";

interface Props {
  page: number;
  limit: number;
  keyword?: string;
}

export default function BasePage({ page, limit, keyword }: Props) {
  const { blogs, totalBlogsCount, totalPages, isPending } = useBlog({ page, limit, keyword });

  const t = useTranslations("blog");
  const title = t("title");
  const headline = t("headline");

  if (isPending) return null;

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
