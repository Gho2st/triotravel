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
    },
    "/wycieczki": {
      pl: "/wycieczki",
      en: "/trips",
      ar: "/rihlat",
    },
    //kuligi

    "/kuligi": {
      pl: "/kuligi",
      en: "/sleigh-rides",
      ar: "/zalajat",
    },
    "/kuligi/goralski-koscielisko": {
      pl: "/kuligi/goralski-koscielisko",
      en: "/sleigh-rides/highlander-koscielisko",
      ar: "/رحلات-المزلقة/هايلاندر-كوسيلسكو",
    },
    "/kuligi/dolina-chocholowska": {
      pl: "/kuligi/dolina-chocholowska",
      en: "/sleigh-rides/chocholowska-valley",
      ar: "/رحلات-المزلقة/وادي-خوخووفسكا",
    },
    "/kuligi/wieczor-sylwestrowy": {
      pl: "/kuligi/wieczor-sylwestrowy",
      en: "/sleigh-rides/new-years-eve",
      ar: "/رحلات-المزلقة/ليلة-رأس-السنة",
    },
    "/bilety-na-kasprowy-wierch": {
      pl: "/bilety-na-kasprowy-wierch",
      en: "/kasprowy-wierch-tickets",
      ar: "/tathakir-kasprowy",
    },
    "/transport": {
      pl: "/transport",
      en: "/transport",
      ar: "/naql",
    },
    "/mapa-przystankow": {
      pl: "/mapa-przystankow",
      en: "/map-of-stops",
      ar: "/khariitat-mawaqif",
    },
    "/partnerzy": {
      pl: "/partnerzy",
      en: "/partners",
      ar: "/shuraka",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
      ar: "/itisal",
    },
    "/rezerwacje": {
      pl: "/rezerwacje",
      en: "/reservations",
      ar: "/hajuzat",
    },
    // Wycieczki - wszystkie mają prefix w odpowiednim języku
    "/wycieczki/splyw-dunajcem-dluzszy": {
      pl: "/wycieczki/splyw-dunajcem-dluzszy",
      en: "/trips/dunajec-rafting-extended",
      ar: "/rihlat/alnhar-dunajec-almtwsl",
    },
    "/wycieczki/chocholowskie-termy": {
      pl: "/wycieczki/chocholowskie-termy",
      en: "/trips/chocholowska-thermal-pools",
      ar: "/rihlat/alhmayat-almya-chocholowskie",
    },
    "/wycieczki/spacer-w-koronach-drzew": {
      pl: "/wycieczki/spacer-w-koronach-drzew",
      en: "/trips/tree-top-walk-bachledka",
      ar: "/rihlat/mashyat-fawq-ashjar-bachledka",
    },
    "/wycieczki/jaskinia-bielanska": {
      pl: "/wycieczki/jaskinia-bielanska",
      en: "/trips/belianska-cave-trip",
      ar: "/rihlat/rahla-kahf-belianska",
    },
    "/wycieczki/tajemnice-wieliczki": {
      pl: "/wycieczki/tajemnice-wieliczki",
      en: "/trips/wieliczka-salt-mine-tour",
      ar: "/rihlat/asrar-manhaf-wieliczka",
    },
    "/wycieczki/biesiada-goralska": {
      pl: "/wycieczki/biesiada-goralska",
      en: "/trips/goral-feast",
      ar: "/rihlat/maidat-aljbal-al-ghoral",
    },
    "/wycieczki/slowacki-raj": {
      pl: "/wycieczki/slowacki-raj",
      en: "/trips/slovak-raj",
      ar: "/rihlat/al-ra-al-slowaki",
    },
    "/wycieczki/wieden": {
      pl: "/wycieczki/wieden",
      en: "/trips/vienna",
      ar: "/rihlat/fiyina",
    },
    "/wycieczki/budapeszt": {
      pl: "/wycieczki/budapeszt",
      en: "/trips/budapest",
      ar: "/rihlat/budabist",
    },
    "/wycieczki/zamek-orawski": {
      pl: "/wycieczki/zamek-orawski",
      en: "/trips/orava-castle",
      ar: "/rihlat/qalat-orawski",
    },
    "/wycieczki/dookola-tatr": {
      pl: "/wycieczki/dookola-tatr",
      en: "/trips/around-tatras",
      ar: "/rihlat/hawal-al-tatr",
    },
    "/wycieczki/rafting-po-dunajcu": {
      pl: "/wycieczki/rafting-po-dunajcu",
      en: "/trips/dunajec-river-rafting",
      ar: "/rihlat/rafting-nahr-dunajec",
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
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
