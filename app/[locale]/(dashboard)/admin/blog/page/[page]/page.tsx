import { auth } from "@/auth";
import { redirect } from "next/navigation";
import BasePage from "../../BasePage";
import { blogLimit } from "@/lib/common";

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ keyword?: string }>;
}) {
  const session = await auth();
  if (!session || !session.user) redirect("/");

  const page = Number((await params).page || 1);
  const keyword = (await searchParams).keyword || undefined;

  return <BasePage page={page} limit={blogLimit} keyword={keyword} />;
}
