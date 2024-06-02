import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user: any = await getUserByEmail(email);
          if (!user || !user.password) return;
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (isPasswordValid) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
