import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import fs from "fs";
import path from "path";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined.");
}

// Use DATABASE_CA on Vercel/production.
// Fall back to the local ca.pem during development.
let ca;

if (process.env.DATABASE_CA) {
  ca = process.env.DATABASE_CA;
} else {
  const caPath = path.join(process.cwd(), "certs", "ca.pem");

  if (!fs.existsSync(caPath)) {
    throw new Error(
      "Database CA certificate not found. Set DATABASE_CA or provide certs/ca.pem.",
    );
  }

  ca = fs.readFileSync(caPath, "utf8");
}

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
