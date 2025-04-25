import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Lista wszystkich obsługiwanych języków
  locales: ["pl", "en", "ar"],

  // Domyślny język, gdy żaden nie pasuje
  defaultLocale: "pl",
  localePrefix: "as-needed", // lub 'always', w zależności od potrzeb

  // Tłumaczenie ścieżek dla każdego języka
  pathnames: {
    "/": {
      pl: "/",
      en: "/",
      ar: "/",
    },
    "/wycieczki": {
      pl: "/wycieczki",
      en: "/trips",
      ar: "/رحلات",
    },
    "/kuligi": {
      pl: "/kuligi",
      en: "/sleigh-rides",
      ar: "/زلاقات",
    },
    "/kuligi/goralski-koscielisko": {
      pl: "/kuligi/goralski-koscielisko",
      en: "/sleigh-rides/highlander-koscielisko",
      ar: "/زلاقات/هايلاندر-كوسيلسكو",
    },
    "/kuligi/dolina-chocholowska": {
      pl: "/kuligi/dolina-chocholowska",
      en: "/sleigh-rides/chocholowska-valley",
      ar: "/زلاقات/وادي-خوخووفسكا",
    },
    "/kuligi/wieczor-sylwestrowy": {
      pl: "/kuligi/wieczor-sylwestrowy",
      en: "/sleigh-rides/new-years-eve",
      ar: "/زلاقات/ليلة-رأس-السنة",
    },
    "/bilety-na-kasprowy-wierch": {
      pl: "/bilety-na-kasprowy-wierch",
      en: "/kasprowy-wierch-tickets",
      ar: "/تذاكر-كاسپروي",
    },
    "/transport": {
      pl: "/transport",
      en: "/transport",
      ar: "/نقل",
    },
    "/mapa-przystankow": {
      pl: "/mapa-przystankow",
      en: "/map-of-stops",
      ar: "/خريطة-المواقف",
    },
    "/partnerzy": {
      pl: "/partnerzy",
      en: "/partners",
      ar: "/شركاء",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
      ar: "/اتصال",
    },
    "/rezerwacje": {
      pl: "/rezerwacje",
      en: "/reservations",
      ar: "/حجوزات",
    },
    "/wycieczki/splyw-dunajcem-dluzszy": {
      pl: "/wycieczki/splyw-dunajcem-dluzszy",
      en: "/trips/dunajec-rafting-extended",
      ar: "/رحلات/التجديف-نهر-دوناجتس-المطول",
    },
    "/wycieczki/chocholowskie-termy": {
      pl: "/wycieczki/chocholowskie-termy",
      en: "/trips/chocholowska-thermal-pools",
      ar: "/رحلات/حمامات-خوخووفسكا-الحرارية",
    },
    "/wycieczki/spacer-w-koronach-drzew": {
      pl: "/wycieczki/spacer-w-koronach-drzew",
      en: "/trips/tree-top-walk-bachledka",
      ar: "/رحلات/مشي-فوق-الأشجار-باخليدكا",
    },
    "/wycieczki/jaskinia-bielanska": {
      pl: "/wycieczki/jaskinia-bielanska",
      en: "/trips/belianska-cave-trip",
      ar: "/رحلات/رحلة-كهف-بيليانسكا",
    },
    "/wycieczki/tajemnice-wieliczki": {
      pl: "/wycieczki/tajemnice-wieliczki",
      en: "/trips/wieliczka-salt-mine-tour",
      ar: "/رحلات/أسرار-منجم-فيليتشكا",
    },
    "/wycieczki/biesiada-goralska": {
      pl: "/wycieczki/biesiada-goralska",
      en: "/trips/goral-feast",
      ar: "/رحلات/مأدبة-الجبال-الغورال",
    },
    "/wycieczki/slowacki-raj": {
      pl: "/wycieczki/slowacki-raj",
      en: "/trips/slovak-raj",
      ar: "/رحلات/الجنة-السلوفاكية",
    },
    "/wycieczki/wieden": {
      pl: "/wycieczki/wieden",
      en: "/trips/vienna",
      ar: "/رحلات/فيينا",
    },
    "/wycieczki/budapeszt": {
      pl: "/wycieczki/budapeszt",
      en: "/trips/budapest",
      ar: "/رحلات/بودابست",
    },
    "/wycieczki/zamek-orawski": {
      pl: "/wycieczki/zamek-orawski",
      en: "/trips/orava-castle",
      ar: "/رحلات/قلعة-أوراوا",
    },
    "/wycieczki/dookola-tatr": {
      pl: "/wycieczki/dookola-tatr",
      en: "/trips/around-tatras",
      ar: "/رحلات/حول-تاترا",
    },
    "/wycieczki/rafting-po-dunajcu": {
      pl: "/wycieczki/rafting-po-dunajcu",
      en: "/trips/dunajec-river-rafting",
      ar: "/رحلات/التجديف-نهر-دوناجتس",
    },
    "/wycieczki/swiatynia-lodowa-hrebieniok": {
      pl: "/wycieczki/swiatynia-lodowa-hrebieniok",
      en: "/trips/ice-temple-hrebienok",
      ar: "/رحلات/معبد-الثلج-هريبيانوك",
    },
    "/wycieczki/splyw-dunajcem-krotszy": {
      pl: "/wycieczki/splyw-dunajcem-krotszy",
      en: "/trips/shorter-dunajec-river-rafting",
      ar: "/رحلات/رحلة-نهر-دوناجتس-القصيرة",
    },
  }, // Added missing closing curly brace
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
