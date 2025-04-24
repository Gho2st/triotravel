import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Lista wszystkich obsługiwanych języków
  locales: ["pl", "en", "ar"],

  // Domyślny język, gdy żaden nie pasuje
  defaultLocale: "pl",
  localePrefix: "as-needed", // lub 'as-needed', w zależności od potrzeb
  // Tłumaczenie ścieżek dla każdego języka
  pathnames: {
    "/": {
      pl: "/",
      en: "/",
      ar: "/",
    }, // Dodano przecinek i klamrę zamykającą
    "/bilety-na-kasprowy-wierch": {
      pl: "/bilety-na-kasprowy-wierch",
      en: "",
      ar: "",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
