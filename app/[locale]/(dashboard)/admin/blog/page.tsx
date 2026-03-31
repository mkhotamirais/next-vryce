import BasePage from "./BasePage";
import { blogLimit } from "@/lib/common";

interface Props {
  params: Promise<{ page?: string }>;
  // searchParams: Promise<{ keyword?: string }>;
}

export default async function BlogAdmin({ params }: Props) {
  const page = Number((await params).page) || 1;
  // const keyword = (await searchParams).keyword || undefined;

  // return <BasePage page={page} limit={blogLimit} keyword={keyword} />;
  return <BasePage page={page} limit={blogLimit} />;
}
