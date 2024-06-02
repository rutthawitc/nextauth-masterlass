"use server";
import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  //console.log(hashedPassword);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const user = await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  //TODO: Send verification email

  return { success: "User created" };
};
