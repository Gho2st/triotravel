import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client"; // dopasuj do output

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL_UNPOOLED, // ← unpooled do seedu
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const site = await prisma.site.upsert({
    where: { domain: "triotravel.pl" },
    update: {},
    create: {
      domain: "triotravel.pl",
      name: "Trio Travel",
      isMultilingual: true,
      defaultLocale: "pl",
    },
  });
  console.log("Utworzono/znaleziono site:", site);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
