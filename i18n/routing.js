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
    "/wycieczki-jednodniowe": {
      pl: "/wycieczki-jednodniowe",
      en: "/day-trips",
      ar: "/rihlat-yawmiya",
      hu: "/egynapos-kirandulasok",
    },
    "/kuligi": {
      pl: "/kuligi",
      en: "/sleigh-rides",
      ar: "/zalajat",
      hu: "/szánkózás",
    },
    "/kuligi/goralski-koscielisko": {
      pl: "/kuligi/goralski-koscielisko",
      en: "/sleigh-rides/highlander-koscielisko",
      ar: "/zalajat/highlander-koscielisko",
      hu: "/szánkózás/hegyvidéki-koscielisko",
    },
    "/kuligi/dolina-chocholowska": {
      pl: "/kuligi/dolina-chocholowska",
      en: "/sleigh-rides/chocholowska-valley",
      ar: "/zalajat/wadi-chocholowska",
      hu: "/szánkózás/chocholowska-völgy",
    },
    "/kuligi/wieczor-sylwestrowy": {
      pl: "/kuligi/wieczor-sylwestrowy",
      en: "/sleigh-rides/new-years-eve",
      ar: "/zalajat/laylat-ras-al-sana",
      hu: "/szánkózás/szilveszteri-est",
    },
    "/bilety-na-kasprowy-wierch": {
      pl: "/bilety-na-kasprowy-wierch",
      en: "/kasprowy-wierch-tickets",
      ar: "/tazakir-kasprowy",
      hu: "/kasprowy-wierch-jegyek",
    },
    "/transport": {
      pl: "/transport",
      en: "/transport",
      ar: "/naql",
      hu: "/közlekedés",
    },
    "/mapa-przystankow": {
      pl: "/mapa-przystankow",
      en: "/map-of-stops",
      ar: "/kharitat-al-mawaqif",
      hu: "/megállók-térképe",
    },
    "/partnerzy": {
      pl: "/partnerzy",
      en: "/partners",
      ar: "/shuraka",
      hu: "/partnerek",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
      ar: "/ittasil",
      hu: "/kapcsolat",
    },
    "/rezerwacje": {
      pl: "/rezerwacje",
      en: "/reservations",
      ar: "/hajuzat",
      hu: "/foglalások",
    },
    "/wycieczki-jednodniowe/splyw-dunajcem-zakopane": {
      pl: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
      en: "/day-trips/dunajec-rafting-zakopane",
      ar: "/rihlat-yawmiya/tajdeef-dunajec-zakopane",
      hu: "/egynapos-kirandulasok/dunajec-rafting-zakopane",
    },

    "/wycieczki-jednodniowe/chocholowskie-termy": {
      pl: "/wycieczki-jednodniowe/chocholowskie-termy",
      en: "/day-trips/chocholowska-thermal-pools",
      ar: "/rihlat-yawmiya/hammamat-chocholowska-harrariya",
      hu: "/egynapos-kirandulasok/chocholowska-termálfürdők",
    },
    "/wycieczki-jednodniowe/spacer-w-koronach-drzew": {
      pl: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
      en: "/day-trips/tree-top-walk-bachledka",
      ar: "/rihlat-yawmiya/mashi-fawq-al-ashjar-bachledka",
      hu: "/egynapos-kirandulasok/fakorona-séta-bachledka",
    },
    "/wycieczki-jednodniowe/jaskinia-bielanska": {
      pl: "/wycieczki-jednodniowe/jaskinia-bielanska",
      en: "/day-trips/belianska-cave-trip",
      ar: "/rihlat-yawmiya/rihlat-kahf-belianska",
      hu: "/egynapos-kirandulasok/belianska-barlangtúra",
    },
    "/wycieczki-jednodniowe/tajemnice-wieliczki": {
      pl: "/wycieczki-jednodniowe/tajemnice-wieliczki",
      en: "/day-trips/wieliczka-salt-mine-tour",
      ar: "/rihlat-yawmiya/asrar-manjam-wieliczka",
      hu: "/egynapos-kirandulasok/wieliczka-sóbánya-túra",
    },
    "/wycieczki-jednodniowe/zabawa-goralska": {
      pl: "/wycieczki-jednodniowe/zabawa-goralska",
      en: "/day-trips/highlander-party",
      ar: "/rihlat-yawmiya/haflat-jibaliya",
      hu: "/egynapos-kirandulasok/hegyvideki-mulatsag",
    },
    "/wycieczki-jednodniowe/slowacki-raj": {
      pl: "/wycieczki-jednodniowe/slowacki-raj",
      en: "/day-trips/slovak-raj",
      ar: "/rihlat-yawmiya/jannat-slovak",
      hu: "/egynapos-kirandulasok/szlovák-paradicsom",
    },
    "/wycieczki-jednodniowe/wieden": {
      pl: "/wycieczki-jednodniowe/wieden",
      en: "/day-trips/vienna",
      ar: "/rihlat-yawmiya/vienna",
      hu: "/egynapos-kirandulasok/bécs",
    },
    "/wycieczki-jednodniowe/budapeszt": {
      pl: "/wycieczki-jednodniowe/budapeszt",
      en: "/day-trips/budapest",
      ar: "/rihlat-yawmiya/budapest",
      hu: "/egynapos-kirandulasok/budapest",
    },

    "/wycieczki-jednodniowe/krajobrazy-slowacji": {
      pl: "/wycieczki-jednodniowe/krajobrazy-slowacji",
      en: "/day-trips/slovak-landscapes",
      ar: "/rihlat-yawmiya/manazir-sulufakiya",
      hu: "/egynapos-kirandulasok/szlovak-tajak",
    },
    "/wycieczki-jednodniowe/dookola-tatr": {
      pl: "/wycieczki-jednodniowe/dookola-tatr",
      en: "/day-trips/around-tatras",
      ar: "/rihlat-yawmiya/hawl-tatra",
      hu: "/egynapos-kirandulasok/tátra-körül",
    },
    "/wycieczki-jednodniowe/rafting-po-dunajcu": {
      pl: "/wycieczki-jednodniowe/rafting-po-dunajcu",
      en: "/day-trips/dunajec-river-rafting",
      ar: "/rihlat-yawmiya/tajdeef-nahr-dunajec",
      hu: "/egynapos-kirandulasok/dunajec-folyó-rafting",
    },
    "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok": {
      pl: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
      en: "/day-trips/ice-temple-hrebienok",
      ar: "/rihlat-yawmiya/mabad-thalj-hrebienok",
      hu: "/egynapos-kirandulasok/jégtemplom-hrebienok",
    },
    "/wycieczki-jednodniowe/splyw-dunajcem-slowacja": {
      pl: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
      en: "/day-trips/dunajec-rafting-slovakia",
      ar: "/rihlat-yawmiya/tajdeef-dunajec-slowakia",
      hu: "/egynapos-kirandulasok/dunajec-rafting-szlovakia",
    },

    "/wycieczki-jednodniowe/tatry-i-zakopane": {
      pl: "/wycieczki-jednodniowe/tatry-i-zakopane",
      en: "/day-trips/tatras-and-zakopane",
      ar: "/rihlat-yawmiya/tatra-wa-zakopane",
      hu: "/egynapos-kirandulasok/tátra-és-zakopane",
    },
    "/wycieczki-jednodniowe/szlak-papieski": {
      pl: "/wycieczki-jednodniowe/szlak-papieski",
      en: "/day-trips/papal-trail",
      ar: "/rihlat-yawmiya/darb-al-baba",
      hu: "/egynapos-kirandulasok/papai-osveny",
    },
    "/wycieczki-jednodniowe/quady": {
      pl: "/wycieczki-jednodniowe/quady",
      en: "/day-trips/quad-bike-trips",
      ar: "/rihlat-yawmiya/quads",
      hu: "/egynapos-kirandulasok/quad-turak",
    },
    "/transport-nad-morskie-oko": {
      pl: "/transport-nad-morskie-oko",
      en: "/transport-to-morskie-oko",
      ar: "/naql-ila-morskie-oko",
      hu: "/szallitas-morskie-okohoz",
    },
    "/ciekawostki-o-splywie-dunajcem": {
      pl: "/ciekawostki-o-splywie-dunajcem",
      en: "/fun-facts-about-dunajec-rafting",
      ar: "/haqaeq-mumti3a-3an-rihlat-dunajec",
      hu: "/erdekessegek-a-dunajeci-turarol",
    },

    "/oferta": {
      pl: "/oferta",
      en: "/offer",
      ar: "/alttaref",
      hu: "/ajanlat",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
