import prisma from "@/lib/prisma";
import { Prisma } from "../lib/generated/prisma";
import { hashSync } from "bcrypt-ts";

const userData: Prisma.UserCreateInput[] = [
  {
    name: "vryce",
    email: "contact@vryce.id",
    // Kita akan mengisi password hasil hash di bawah
    password: "",
    role: "ADMIN",
    emailVerified: new Date(),
  },
];

export async function main() {
  console.log(`Start seeding ...`);

  const hashedPassword = await hashSync("Vryce2026.", 10);

  for (const u of userData) {
    u.password = hashedPassword;

    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {
        password: hashedPassword,
      },
      create: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
