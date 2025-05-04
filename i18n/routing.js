import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Lista wszystkich obsługiwanych języków
  locales: ["pl", "en", "ar", "hu"],

  // Domyślny język, gdy żaden nie pasuje
  defaultLocale: "pl",
  localePrefix: "as-needed", // lub 'always', w zależności od potrzeb

  // Tłumaczenie ścieżek dla każdego języka
  pathnames: {
    "/": {
      pl: "/",
      en: "/",
      ar: "/",
      hu: "/",
    },
    "/wycieczki": {
      pl: "/wycieczki",
      en: "/trips",
      ar: "/رحلات",
      hu: "/kirándulások",
    },
    "/kuligi": {
      pl: "/kuligi",
      en: "/sleigh-rides",
      ar: "/زلاقات",
      hu: "/szánkózás",
    },
    "/kuligi/goralski-koscielisko": {
      pl: "/kuligi/goralski-koscielisko",
      en: "/sleigh-rides/highlander-koscielisko",
      ar: "/زلاقات/هايلاندر-كوسيلسكو",
      hu: "/szánkózás/hegyvidéki-koscielisko",
    },
    "/kuligi/dolina-chocholowska": {
      pl: "/kuligi/dolina-chocholowska",
      en: "/sleigh-rides/chocholowska-valley",
      ar: "/زلاقات/وادي-خوخووفسكا",
      hu: "/szánkózás/chocholowska-völgy",
    },
    "/kuligi/wieczor-sylwestrowy": {
      pl: "/kuligi/wieczor-sylwestrowy",
      en: "/sleigh-rides/new-years-eve",
      ar: "/زلاقات/ليلة-رأس-السنة",
      hu: "/szánkózás/szilveszteri-est",
    },
    "/bilety-na-kasprowy-wierch": {
      pl: "/bilety-na-kasprowy-wierch",
      en: "/kasprowy-wierch-tickets",
      ar: "/تذاكر-كاسپروي",
      hu: "/kasprowy-wierch-jegyek",
    },
    "/transport": {
      pl: "/transport",
      en: "/transport",
      ar: "/نقل",
      hu: "/közlekedés",
    },
    "/mapa-przystankow": {
      pl: "/mapa-przystankow",
      en: "/map-of-stops",
      ar: "/خريطة-المواقف",
      hu: "/megállók-térképe",
    },
    "/partnerzy": {
      pl: "/partnerzy",
      en: "/partners",
      ar: "/شركاء",
      hu: "/partnerek",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
      ar: "/اتصال",
      hu: "/kapcsolat",
    },
    "/rezerwacje": {
      pl: "/rezerwacje",
      en: "/reservations",
      ar: "/حجوزات",
      hu: "/foglalások",
    },
    "/wycieczki/splyw-dunajcem-dluzszy": {
      pl: "/wycieczki/splyw-dunajcem-dluzszy",
      en: "/trips/dunajec-rafting-extended",
      ar: "/رحلات/التجديف-نهر-دوناجتس-المطول",
      hu: "/kirándulások/dunajec-rafting-hosszabb",
    },
    "/wycieczki/chocholowskie-termy": {
      pl: "/wycieczki/chocholowskie-termy",
      en: "/trips/chocholowska-thermal-pools",
      ar: "/رحلات/حمامات-خوخووفسكا-الحرارية",
      hu: "/kirándulások/chocholowska-termálfürdők",
    },
    "/wycieczki/spacer-w-koronach-drzew": {
      pl: "/wycieczki/spacer-w-koronach-drzew",
      en: "/trips/tree-top-walk-bachledka",
      ar: "/رحلات/مشي-فوق-الأشجار-باخليدكا",
      hu: "/kirándulások/fakorona-séta-bachledka",
    },
    "/wycieczki/jaskinia-bielanska": {
      pl: "/wycieczki/jaskinia-bielanska",
      en: "/trips/belianska-cave-trip",
      ar: "/رحلات/رحلة-كهف-بيليانسكا",
      hu: "/kirándulások/belianska-barlangtúra",
    },
    "/wycieczki/tajemnice-wieliczki": {
      pl: "/wycieczki/tajemnice-wieliczki",
      en: "/trips/wieliczka-salt-mine-tour",
      ar: "/رحلات/أسرار-منجم-فيليتشكا",
      hu: "/kirándulások/wieliczka-sóbánya-túra",
    },
    "/wycieczki/biesiada-goralska": {
      pl: "/wycieczki/biesiada-goralska",
      en: "/trips/goral-feast",
      ar: "/رحلات/مأدبة-الجبال-الغورال",
      hu: "/kirándulások/hegyvidéki-lakoma",
    },
    "/wycieczki/slowacki-raj": {
      pl: "/wycieczki/slowacki-raj",
      en: "/trips/slovak-raj",
      ar: "/رحلات/الجنة-السلوفاكية",
      hu: "/kirándulások/szlovák-paradicsom",
    },
    "/wycieczki/wieden": {
      pl: "/wycieczki/wieden",
      en: "/trips/vienna",
      ar: "/رحلات/فيينا",
      hu: "/kirándulások/bécs",
    },
    "/wycieczki/budapeszt": {
      pl: "/wycieczki/budapeszt",
      en: "/trips/budapest",
      ar: "/رحلات/بودابست",
      hu: "/kirándulások/budapest",
    },
    "/wycieczki/zamek-orawski": {
      pl: "/wycieczki/zamek-orawski",
      en: "/trips/orava-castle",
      ar: "/رحلات/قلعة-أوراوا",
      hu: "/kirándulások/árva-vár",
    },
    "/wycieczki/dookola-tatr": {
      pl: "/wycieczki/dookola-tatr",
      en: "/trips/around-tatras",
      ar: "/رحلات/حول-تاترا",
      hu: "/kirándulások/tátra-körül",
    },
    "/wycieczki/rafting-po-dunajcu": {
      pl: "/wycieczki/rafting-po-dunajcu",
      en: "/trips/dunajec-river-rafting",
      ar: "/رحلات/التجديف-نهر-دوناجتس",
      hu: "/kirándulások/dunajec-folyó-rafting",
    },
    "/wycieczki/swiatynia-lodowa-hrebieniok": {
      pl: "/wycieczki/swiatynia-lodowa-hrebieniok",
      en: "/trips/ice-temple-hrebienok",
      ar: "/رحلات/معبد-الثلج-هريبيانوك",
      hu: "/kirándulások/jégtemplom-hrebienok",
    },
    "/wycieczki/splyw-dunajcem-krotszy": {
      pl: "/wycieczki/splyw-dunajcem-krotszy",
      en: "/trips/shorter-dunajec-river-rafting",
      ar: "/رحلات/رحلة-نهر-دوناجتس-القصيرة",
      hu: "/kirándulások/rövidebb-dunajec-folyó-rafting",
    },
    "/wycieczki/tatry-i-zakopane": {
      pl: "/wycieczki/tatry-i-zakopane",
      en: "/trips/tatras-and-zakopane",
      ar: "/رحلات/تاترا-وزاكوباني",
      hu: "/kirándulások/tátra-és-zakopane",
    },
  }, // Added missing closing curly brace
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
