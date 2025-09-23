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
    "/transport/mapa-przystankow": {
      pl: "/transport/mapa-przystankow",
      en: "/transport/map-of-stops",
      ar: "/naql/kharitat-al-mawaqif",
      hu: "/közlekedés/megállók-térképe",
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

    "/wycieczki-jednodniowe/rowery-elektryczne": {
      pl: "/wycieczki-jednodniowe/rowery-elektryczne",
      en: "/day-trips/electric-bikes",
      ar: "/rihlat-yawmiya/ad-darajat-al-kahrabaiyya",
      hu: "/egynapos-kirandulasok/elektromos-kerékpárok",
    },
    "/transport/nad-morskie-oko": {
      pl: "/transport/nad-morskie-oko",
      en: "/transport/to-morskie-oko",
      ar: "/naql/ila-morskie-oko",
      hu: "/közlekedés/morskie-okohoz",
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
    "/polityka-cookies": {
      pl: "/polityka-cookies",
      en: "/cookie-policy",
      ar: "/siyasat-cookies",
      hu: "/suti-szabalyzat",
    },

    // BLOG POSTY
    "/blog": {
      pl: "/blog",
      en: "/blog",
      ar: "/blog",
      hu: "/blog",
    },
    "/blog/miasto-u-stop-tatr": {
      pl: "/blog/miasto-u-stop-tatr",
      en: "/blog/mountain-town-adventure",
      ar: "/blog/madinat-tatra",
      hu: "/blog/hegyi-varos-kaland",
    },
    "/blog/rodzinne-wakacje-w-gorach": {
      pl: "/blog/rodzinne-wakacje-w-gorach",
      en: "/blog/family-vacations-mountains",
      ar: "/blog/utla-ailiya-jabal",
      hu: "/blog/csaladi-vakaciok-hegyekben",
    },
    "/blog/gorska-adrenalina": {
      pl: "/blog/gorska-adrenalina",
      en: "/blog/mountain-adrenaline",
      ar: "/blog/ithara-jabaliya",
      hu: "/blog/hegyi-adrenalin",
    },
    "/blog/gorska-kultura": {
      pl: "/blog/gorska-kultura",
      en: "/blog/highland-culture",
      ar: "/blog/thaqafa-jabaliya",
      hu: "/blog/hegyi-kultura",
    },
    "/blog/relaks-w-tatrach": {
      pl: "/blog/relaks-w-tatrach",
      en: "/blog/relaxation-tatras",
      ar: "/blog/istiraha-tatra",
      hu: "/blog/pihenes-tatraban",
    },
    "/blog/najlepsze-trasy-z-zakopanego": {
      pl: "/blog/najlepsze-trasy-z-zakopanego",
      en: "/blog/best-trails-from-zakopane",
      ar: "/blog/afdal-almasarat-min-zakubani",
      hu: "/blog/legjobb-osvenyek-zakopanebol",
    },
    "/blog/najpiekniejsze-widoki-tatry": {
      pl: "/blog/najpiekniejsze-widoki-tatry",
      en: "/blog/most-beautiful-tatra-views",
      ar: "/blog/afdal-almanazir-tatra",
      hu: "/blog/legszerubb-tatra-kilatasok",
    },
    "/blog/weekend-w-zakopanem": {
      pl: "/blog/weekend-w-zakopanem",
      en: "/blog/weekend-in-zakopane",
      ar: "/blog/nahiyat-alnihaya-fi-zakubani",
      hu: "/blog/hetvege-zakopaneben",
    },
    "/blog/przyroda-tatr": {
      pl: "/blog/przyroda-tatr",
      en: "/blog/tatra-nature",
      ar: "/blog/tabi3at-tatra",
      hu: "/blog/tatra-termeszet",
    },
    "/blog/adrenalina-tatry": {
      pl: "/blog/adrenalina-tatry",
      en: "/blog/adrenaline-tatras",
      ar: "/blog/adrenaline-tatra",
      hu: "/blog/adrenalin-tatraban",
    },
    "/blog/romantyczny-zakopane": {
      pl: "/blog/romantyczny-zakopane",
      en: "/blog/romantic-zakopane",
      ar: "/blog/zakubani-alromansiya",
      hu: "/blog/romantikus-zakopane",
    },
    "/blog/fotografia-tatry": {
      pl: "/blog/fotografia-tatry",
      en: "/blog/photography-tatras",
      ar: "/blog/taswir-tatra",
      hu: "/blog/fotografalas-tatraban",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
