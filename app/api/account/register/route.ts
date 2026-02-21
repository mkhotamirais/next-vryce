// import { sendEmailVerification } from "@/actions/account";
import prisma from "@/lib/prisma";
import { registerSchema } from "@/lib/schemas/auth";
import { hashSync } from "bcrypt-ts";
import z from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedFields = registerSchema.safeParse(body);

    if (!validatedFields.success) {
      return Response.json(
        {
          success: false,
          message: "Validation failed",
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, password } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return Response.json(
        {
          success: false,
          code: "EMAIL_ALREADY_EXISTS", // Machine readable code
          message: `Email '${email}' is already registered.`,
        },
        { status: 409 },
      );
    }

    const hashedPassword = hashSync(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return Response.json(
      {
        success: true,
        message: "Registration successful.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
