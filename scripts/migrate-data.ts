import "dotenv/config";
import { Client } from "pg";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client"; // dopasuj do output

const SITE = {
  domain: "triotravel.pl",
  name: "Trio Travel",
  isMultilingual: true,
  defaultLocale: "pl",
};

async function main() {
  // źródło: stara baza (tylko odczyt)
  const old = new Client({
    connectionString: process.env.OLD_DATABASE_URL_UNPOOLED,
  });
  await old.connect();

  // cel: nowa baza przez Prisma
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL_UNPOOLED,
  });
  const prisma = new PrismaClient({ adapter });

  // 1. Upewnij się, że Site istnieje, i weź jego id
  const site = await prisma.site.upsert({
    where: { domain: SITE.domain },
    update: {},
    create: SITE,
  });
  console.log("Site id:", site.id);

  // 2. Posty — zachowujemy oryginalne id, dorzucamy siteId
  const { rows: posts } = await old.query(`SELECT * FROM "Post" ORDER BY id`);
  if (posts.length) {
    await prisma.post.createMany({
      data: posts.map((p) => ({
        id: p.id,
        siteId: site.id,
        coverImage: p.coverImage,
        status: p.status,
        publishedAt: p.publishedAt,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        ctaPrimaryUrl: p.ctaPrimaryUrl,
        ctaSecondaryUrl: p.ctaSecondaryUrl,
      })),
      skipDuplicates: true,
    });
  }
  console.log("Posty:", posts.length);

  // 3. Tłumaczenia — id, postId zostają, dorzucamy siteId
  const { rows: trans } = await old.query(
    `SELECT * FROM post_translations ORDER BY id`,
  );
  if (trans.length) {
    await prisma.postTranslation.createMany({
      data: trans.map((t) => ({
        id: t.id,
        siteId: site.id,
        postId: t.postId,
        locale: t.locale,
        slug: t.slug,
        title: t.title,
        excerpt: t.excerpt,
        content: t.content,
        ctaTitle: t.ctaTitle,
        ctaDescription: t.ctaDescription,
        ctaPrimaryLabel: t.ctaPrimaryLabel,
        ctaSecondaryLabel: t.ctaSecondaryLabel,
        sourceHashTitle: t.sourceHashTitle,
        sourceHashExcerpt: t.sourceHashExcerpt,
        sourceHashContent: t.sourceHashContent,
        sourceHashCta: t.sourceHashCta,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      })),
      skipDuplicates: true,
    });
  }
  console.log("Tłumaczenia:", trans.length);

  // 4. Reset sekwencji — bo wstawialiśmy jawne id (inaczej kolejny INSERT da duplicate key)
  await prisma.$queryRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('"Post"','id'), COALESCE((SELECT MAX(id) FROM "Post"), 1))`,
  );
  await prisma.$queryRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('post_translations','id'), COALESCE((SELECT MAX(id) FROM post_translations), 1))`,
  );

  await old.end();
  await prisma.$disconnect();
  console.log("Gotowe.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
