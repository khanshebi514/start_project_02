import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import fs from "fs";
import path from "path";

const connectionString = process.env.DATABASE_URL;

const caPath = path.join(process.cwd(), "certs", "ca.pem");

const ca = fs.readFileSync(caPath, "utf8");

const adapter = new PrismaPg({
  connectionString,
  ssl: {
    ca,
    rejectUnauthorized: true,
  },
});

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
