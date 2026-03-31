import { getBlogs } from "@/actions/blog";
import BasePage from "../../BasePage";
import { blogLimit } from "@/lib/common";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const { totalPages } = await getBlogs({ limit: blogLimit });
  const locales = routing.locales;

  const paths = [];

  for (const locale of locales) {
    // Loop sesuai jumlah halaman yang ada di database
    for (let i = 1; i <= totalPages; i++) {
      paths.push({
        locale: locale,
        page: i.toString(),
      });
    }
  }

  return paths;
}

interface Props {
  params: Promise<{ page?: string }>;
  // searchParams: Promise<{ keyword?: string }>;
}

export default async function BlogPage({ params }: Props) {
  const page = Number((await params).page || 1);
  // const keyword = (await searchParams).keyword || undefined;

  return <BasePage page={page} limit={blogLimit} />;
}
