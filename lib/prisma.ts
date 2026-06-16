import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function withPrisma<T>(
  fn: (prisma: PrismaClient) => Promise<T>,
): Promise<T> {
  try {
    return await fn(prisma);
  } finally {
    if (process.env.NODE_ENV === "production") {
      await prisma.$disconnect();
    }
  }
}
