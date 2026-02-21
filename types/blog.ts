import { Prisma } from "@/lib/generated/prisma";

export type BlogProps = Prisma.BlogGetPayload<{
  include: { BlogCategory: { select: { name: true; slug: true } }; User: { select: { name: true } } };
}>;
