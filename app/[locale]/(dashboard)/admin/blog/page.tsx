import { auth } from "@/auth";
import BasePage from "./BasePage";
import { redirect } from "next/navigation";
import { blogLimit } from "@/lib/common";

interface Props {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ keyword?: string }>;
}

export default async function BlogAdmin({ params, searchParams }: Props) {
  const session = await auth();
  if (!session || !session.user) redirect("/");

  const page = Number((await params).page) || 1;
  const keyword = (await searchParams).keyword || undefined;

  return <BasePage page={page} limit={blogLimit} keyword={keyword} />;
}
