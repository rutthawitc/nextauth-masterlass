import { PrismaClient } from "@prisma/client";

declare global {
    var prismaa: PrismaClient | undefined
}

export const db = globalThis.prismaa || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prismaa = db