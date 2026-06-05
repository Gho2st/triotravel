import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const getCurrentSite = cache(async () => {
  const site = await prisma.site.findUnique({
    where: { domain: process.env.SITE_DOMAIN },
  });
  if (!site) {
    throw new Error(
      `Brak Site dla domeny "${process.env.SITE_DOMAIN}". Sprawdź SITE_DOMAIN w .env i czy rekord istnieje w bazie.`,
    );
  }
  return site;
});
