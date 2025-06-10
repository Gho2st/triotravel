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
      ar: "/rihlat",
      hu: "/kirándulások",
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
    "/wycieczki/splyw-dunajcem-dluzszy": {
      pl: "/wycieczki/splyw-dunajcem-dluzszy",
      en: "/trips/dunajec-rafting-extended",
      ar: "/rihlat/tajdeef-dunajec-mutawwal",
      hu: "/kirándulások/dunajec-rafting-hosszabb",
    },
    "/wycieczki/chocholowskie-termy": {
      pl: "/wycieczki/chocholowskie-termy",
      en: "/trips/chocholowska-thermal-pools",
      ar: "/rihlat/hammamat-chocholowska-harrariya",
      hu: "/kirándulások/chocholowska-termálfürdők",
    },
    "/wycieczki/spacer-w-koronach-drzew": {
      pl: "/wycieczki/spacer-w-koronach-drzew",
      en: "/trips/tree-top-walk-bachledka",
      ar: "/rihlat/mashi-fawq-al-ashjar-bachledka",
      hu: "/kirándulások/fakorona-séta-bachledka",
    },
    "/wycieczki/jaskinia-bielanska": {
      pl: "/wycieczki/jaskinia-bielanska",
      en: "/trips/belianska-cave-trip",
      ar: "/rihlat/rihlat-kahf-belianska",
      hu: "/kirándulások/belianska-barlangtúra",
    },
    "/wycieczki/tajemnice-wieliczki": {
      pl: "/wycieczki/tajemnice-wieliczki",
      en: "/trips/wieliczka-salt-mine-tour",
      ar: "/rihlat/asrar-manjam-wieliczka",
      hu: "/kirándulások/wieliczka-sóbánya-túra",
    },
    "/wycieczki/biesiada-goralska": {
      pl: "/wycieczki/biesiada-goralska",
      en: "/trips/goral-feast",
      ar: "/rihlat/madbat-al-jibal-goral",
      hu: "/kirándulások/hegyvidéki-lakoma",
    },
    "/wycieczki/slowacki-raj": {
      pl: "/wycieczki/slowacki-raj",
      en: "/trips/slovak-raj",
      ar: "/rihlat/jannat-slovak",
      hu: "/kirándulások/szlovák-paradicsom",
    },
    "/wycieczki/wieden": {
      pl: "/wycieczki/wieden",
      en: "/trips/vienna",
      ar: "/rihlat/vienna",
      hu: "/kirándulások/bécs",
    },
    "/wycieczki/budapeszt": {
      pl: "/wycieczki/budapeszt",
      en: "/trips/budapest",
      ar: "/rihlat/budapest",
      hu: "/kirándulások/budapest",
    },
    "/wycieczki/krajobrazy-slowacji": {
      pl: "/wycieczki/krajobrazy-slowacji",
      en: "/trips/slovak-landscapes",
      ar: "/rihlat-manazir-sulufakiya",
      hu: "/kirandulasok-szlovak-tajak",
    },
    "/wycieczki/dookola-tatr": {
      pl: "/wycieczki/dookola-tatr",
      en: "/trips/around-tatras",
      ar: "/rihlat/hawl-tatra",
      hu: "/kirándulások/tátra-körül",
    },
    "/wycieczki/rafting-po-dunajcu": {
      pl: "/wycieczki/rafting-po-dunajcu",
      en: "/trips/dunajec-river-rafting",
      ar: "/rihlat/tajdeef-nahr-dunajec",
      hu: "/kirándulások/dunajec-folyó-rafting",
    },
    "/wycieczki/swiatynia-lodowa-hrebieniok": {
      pl: "/wycieczki/swiatynia-lodowa-hrebieniok",
      en: "/trips/ice-temple-hrebienok",
      ar: "/rihlat/mabad-thalj-hrebienok",
      hu: "/kirándulások/jégtemplom-hrebienok",
    },
    "/wycieczki/splyw-dunajcem-krotszy": {
      pl: "/wycieczki/splyw-dunajcem-krotszy",
      en: "/trips/shorter-dunajec-river-rafting",
      ar: "/rihlat/rihlat-nahr-dunajec-qasira",
      hu: "/kirándulások/rövidebb-dunajec-folyó-rafting",
    },
    "/wycieczki/tatry-i-zakopane": {
      pl: "/wycieczki/tatry-i-zakopane",
      en: "/trips/tatras-and-zakopane",
      ar: "/rihlat/tatra-wa-zakopane",
      hu: "/kirándulások/tátra-és-zakopane",
    },
    "/wycieczki/szlak-papieski": {
      pl: "/wycieczki/szlak-papieski",
      en: "/trips/papal-trail",
      ar: "/rihlat/darb-al-baba",
      hu: "/kirandulasok/papai-osveny",
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
    "/wycieczki/quady": {
      pl: "/wycieczki-quady",
      en: "/quad-bike-trips",
      ar: "/rihlat-quads",
      hu: "/quad-turak",
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
