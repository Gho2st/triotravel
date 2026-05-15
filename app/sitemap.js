import prisma from "@/lib/prisma";

const baseUrl = "https://triotravel.pl";

const LOCALE_PATHS = {
  en: "en",
  de: "de",
  ar: "ar",
  hu: "hu",
  es: "es",
};

export default async function sitemap() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    include: { translations: true },
    orderBy: { publishedAt: "desc" },
  });

  const blogPostEntries = posts.flatMap((post) => {
    // każde tłumaczenie = osobny wpis w sitemapie (bo każde ma swój URL)
    const plTranslation = post.translations.find((t) => t.locale === "pl");
    if (!plTranslation) return [];

    const languages = {
      "x-default": `${baseUrl}/blog/${plTranslation.slug}`,
      pl: `${baseUrl}/blog/${plTranslation.slug}`,
    };

    post.translations.forEach((t) => {
      if (t.locale === "pl") return;
      if (LOCALE_PATHS[t.locale]) {
        languages[t.locale] =
          `${baseUrl}/${LOCALE_PATHS[t.locale]}/blog/${t.slug}`;
      }
    });

    return [
      {
        url: `${baseUrl}/blog/${plTranslation.slug}`,
        lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
        alternates: { languages },
      },
    ];
  });

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}`,
          pl: `${baseUrl}`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
          ar: `${baseUrl}/ar`,
          hu: `${baseUrl}/hu`,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe`,
          pl: `${baseUrl}/wycieczki-jednodniowe`,
          en: `${baseUrl}/en/day-trips`,
          de: `${baseUrl}/de/tagesausfluege`,
          ar: `${baseUrl}/ar/rihlat-yawmiya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok`,
          es: `${baseUrl}/es/excursiones`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kuligi`,
          pl: `${baseUrl}/kuligi`,
          en: `${baseUrl}/en/sleigh-rides`,
          de: `${baseUrl}/de/schlittenfahrten`,
          ar: `${baseUrl}/ar/zalajat`,
          hu: `${baseUrl}/hu/szánkózás`,
          es: `${baseUrl}/es/paseos-en-trineo`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/goralski-koscielisko`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kuligi/goralski-koscielisko`,
          pl: `${baseUrl}/kuligi/goralski-koscielisko`,
          en: `${baseUrl}/en/sleigh-rides/highlander-koscielisko`,
          de: `${baseUrl}/de/schlittenfahrten/goralen-koscielisko`,
          ar: `${baseUrl}/ar/zalajat/highlander-koscielisko`,
          hu: `${baseUrl}/hu/szánkózás/hegyvidéki-koscielisko`,
          es: `${baseUrl}/es/paseos-en-trineo/montanes-koscielisko`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/walentynkowy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kuligi/walentynkowy`,
          pl: `${baseUrl}/kuligi/walentynkowy`,
          en: `${baseUrl}/en/sleigh-rides/valentine`,
          de: `${baseUrl}/de/schlittenfahrten/valentinstag`,
          ar: `${baseUrl}/ar/zalajat/valentine`,
          hu: `${baseUrl}/hu/szankozas/valentin-napi`,
          es: `${baseUrl}/es/paseos-en-trineo/san-valentin`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/dolina-chocholowska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kuligi/dolina-chocholowska`,
          pl: `${baseUrl}/kuligi/dolina-chocholowska`,
          en: `${baseUrl}/en/sleigh-rides/chocholowska-valley`,
          de: `${baseUrl}/de/schlittenfahrten/chocholowska-tal`,
          ar: `${baseUrl}/ar/zalajat/wadi-chocholowska`,
          hu: `${baseUrl}/hu/szánkózás/chocholowska-völgy`,
          es: `${baseUrl}/es/paseos-en-trineo/valle-chocholowska`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/wieczor-sylwestrowy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kuligi/wieczor-sylwestrowy`,
          pl: `${baseUrl}/kuligi/wieczor-sylwestrowy`,
          en: `${baseUrl}/en/sleigh-rides/new-years-eve`,
          de: `${baseUrl}/de/schlittenfahrten/silvesterabend`,
          ar: `${baseUrl}/ar/zalajat/laylat-ras-al-sana`,
          hu: `${baseUrl}/hu/szánkózás/szilveszteri-est`,
          es: `${baseUrl}/es/paseos-en-trineo/nochevieja`,
        },
      },
    },
    {
      url: `${baseUrl}/bilety-na-kasprowy-wierch`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/bilety-na-kasprowy-wierch`,
          pl: `${baseUrl}/bilety-na-kasprowy-wierch`,
          en: `${baseUrl}/en/kasprowy-wierch-tickets`,
          de: `${baseUrl}/de/kasprowy-wierch-tickets`,
          ar: `${baseUrl}/ar/tazakir-kasprowy`,
          hu: `${baseUrl}/hu/kasprowy-wierch-jegyek`,
          es: `${baseUrl}/es/entradas-kasprowy-wierch`,
        },
      },
    },
    {
      url: `${baseUrl}/transport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/transport`,
          pl: `${baseUrl}/transport`,
          en: `${baseUrl}/en/transport`,
          de: `${baseUrl}/de/transport`,
          ar: `${baseUrl}/ar/naql`,
          hu: `${baseUrl}/hu/közlekedés`,
          es: `${baseUrl}/es/transporte`,
        },
      },
    },
    {
      url: `${baseUrl}/transport/mapa-przystankow`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/transport/mapa-przystankow`,
          pl: `${baseUrl}/transport/mapa-przystankow`,
          en: `${baseUrl}/en/transport/map-of-stops`,
          de: `${baseUrl}/de/transport/haltestellenkarte`,
          ar: `${baseUrl}/ar/naql/kharitat-al-mawaqif`,
          hu: `${baseUrl}/hu/közlekedés/megállók-térképe`,
          es: `${baseUrl}/es/transporte/mapa-de-paradas`,
        },
      },
    },
    {
      url: `${baseUrl}/partnerzy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/partnerzy`,
          pl: `${baseUrl}/partnerzy`,
          en: `${baseUrl}/en/partners`,
          de: `${baseUrl}/de/partner`,
          ar: `${baseUrl}/ar/shuraka`,
          hu: `${baseUrl}/hu/partnerek`,
          es: `${baseUrl}/es/socios`,
        },
      },
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/kontakt`,
          pl: `${baseUrl}/kontakt`,
          en: `${baseUrl}/en/contact`,
          de: `${baseUrl}/de/kontakt`,
          ar: `${baseUrl}/ar/ittasil`,
          hu: `${baseUrl}/hu/kapcsolat`,
          es: `${baseUrl}/es/contacto`,
        },
      },
    },
    {
      url: `${baseUrl}/rezerwacje`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/rezerwacje`,
          pl: `${baseUrl}/rezerwacje`,
          en: `${baseUrl}/en/reservations`,
          de: `${baseUrl}/de/reservierungen`,
          ar: `${baseUrl}/ar/hajuzat`,
          hu: `${baseUrl}/hu/foglalások`,
          es: `${baseUrl}/es/reservas`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-zakopane`,
          pl: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-zakopane`,
          en: `${baseUrl}/en/day-trips/dunajec-rafting-zakopane`,
          de: `${baseUrl}/de/tagesausfluege/dunajec-flossfahrt-zakopane`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-dunajec-zakopane`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-rafting-zakopane`,
          es: `${baseUrl}/es/excursiones/descenso-dunajec-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/chocholowskie-termy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/chocholowskie-termy`,
          pl: `${baseUrl}/wycieczki-jednodniowe/chocholowskie-termy`,
          en: `${baseUrl}/en/day-trips/chocholowska-thermal-pools`,
          de: `${baseUrl}/de/tagesausfluege/chocholowska-therme`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/hammamat-chocholowska-harrariya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/chocholowska-termálfürdők`,
          es: `${baseUrl}/es/excursiones/termas-chocholowska`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/spacer-w-koronach-drzew`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/spacer-w-koronach-drzew`,
          pl: `${baseUrl}/wycieczki-jednodniowe/spacer-w-koronach-drzew`,
          en: `${baseUrl}/en/day-trips/tree-top-walk-bachledka`,
          de: `${baseUrl}/de/tagesausfluege/bachledka-baumwipfelpfad`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/mashi-fawq-al-ashjar-bachledka`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/fakorona-séta-bachledka`,
          es: `${baseUrl}/es/excursiones/paseo-copas-arboles-bachledka`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/jaskinia-bielanska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/jaskinia-bielanska`,
          pl: `${baseUrl}/wycieczki-jednodniowe/jaskinia-bielanska`,
          en: `${baseUrl}/en/day-trips/belianska-cave-trip`,
          de: `${baseUrl}/de/tagesausfluege/belianska-hoehle`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/rihlat-kahf-belianska`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/belianska-barlangtúra`,
          es: `${baseUrl}/es/excursiones/cueva-belianska`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/tajemnice-wieliczki`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/tajemnice-wieliczki`,
          pl: `${baseUrl}/wycieczki-jednodniowe/tajemnice-wieliczki`,
          en: `${baseUrl}/en/day-trips/wieliczka-salt-mine-tour`,
          de: `${baseUrl}/de/tagesausfluege/salzbergwerk-wieliczka`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/asrar-manjam-wieliczka`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/wieliczka-sóbánya-túra`,
          es: `${baseUrl}/es/excursiones/secretos-mina-sal-wieliczka`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/zabawa-goralska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/zabawa-goralska`,
          pl: `${baseUrl}/wycieczki-jednodniowe/zabawa-goralska`,
          en: `${baseUrl}/en/day-trips/highlander-party`,
          de: `${baseUrl}/de/tagesausfluege/goralen-party`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/haflat-jibaliya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/hegyvideki-mulatsag`,
          es: `${baseUrl}/es/excursiones/fiesta-montanesa`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/slowacki-raj`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/slowacki-raj`,
          pl: `${baseUrl}/wycieczki-jednodniowe/slowacki-raj`,
          en: `${baseUrl}/en/day-trips/slovak-raj`,
          de: `${baseUrl}/de/tagesausfluege/slowakisches-paradies`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/jannat-slovak`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/szlovák-paradicsom`,
          es: `${baseUrl}/es/excursiones/paraiso-eslovaco`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/wieden`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/wieden`,
          pl: `${baseUrl}/wycieczki-jednodniowe/wieden`,
          en: `${baseUrl}/en/day-trips/vienna`,
          de: `${baseUrl}/de/tagesausfluege/wien`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/vienna`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/bécs`,
          es: `${baseUrl}/es/excursiones/viena`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/budapeszt`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/budapeszt`,
          pl: `${baseUrl}/wycieczki-jednodniowe/budapeszt`,
          en: `${baseUrl}/en/day-trips/budapest`,
          de: `${baseUrl}/de/tagesausfluege/budapest`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/budapest`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/budapest`,
          es: `${baseUrl}/es/excursiones/budapest`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/krajobrazy-slowacji`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/krajobrazy-slowacji`,
          pl: `${baseUrl}/wycieczki-jednodniowe/krajobrazy-slowacji`,
          en: `${baseUrl}/en/day-trips/slovak-landscapes`,
          de: `${baseUrl}/de/tagesausfluege/landschaften-der-slowakei`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/manazir-sulufakiya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/szlovak-tajak`,
          es: `${baseUrl}/es/excursiones/paisajes-eslovaquia`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/dookola-tatr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/dookola-tatr`,
          pl: `${baseUrl}/wycieczki-jednodniowe/dookola-tatr`,
          en: `${baseUrl}/en/day-trips/around-tatras`,
          de: `${baseUrl}/de/tagesausfluege/um-die-tatra`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/hawl-tatra`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/tátra-körül`,
          es: `${baseUrl}/es/excursiones/alrededor-tatras`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/rafting-po-dunajcu`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/rafting-po-dunajcu`,
          pl: `${baseUrl}/wycieczki-jednodniowe/rafting-po-dunajcu`,
          en: `${baseUrl}/en/day-trips/dunajec-river-rafting`,
          de: `${baseUrl}/de/tagesausfluege/rafting-auf-dem-dunajec`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-nahr-dunajec`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-folyó-rafting`,
          es: `${baseUrl}/es/excursiones/rafting-rio-dunajec`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok`,
          pl: `${baseUrl}/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok`,
          en: `${baseUrl}/en/day-trips/ice-temple-hrebienok`,
          de: `${baseUrl}/de/tagesausfluege/eisdom-hrebienok`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/mabad-thalj-hrebienok`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/jégtemplom-hrebienok`,
          es: `${baseUrl}/es/excursiones/templo-hielo-hrebienok`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-slowacja`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-slowacja`,
          pl: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-slowacja`,
          en: `${baseUrl}/en/day-trips/dunajec-rafting-slovakia`,
          de: `${baseUrl}/de/tagesausfluege/dunajec-flossfahrt-slowakei`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-dunajec-slowakia`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-rafting-szlovakia`,
          es: `${baseUrl}/es/excursiones/descenso-dunajec-eslovaquia`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/tatry-i-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/tatry-i-zakopane`,
          pl: `${baseUrl}/wycieczki-jednodniowe/tatry-i-zakopane`,
          en: `${baseUrl}/en/day-trips/tatras-and-zakopane`,
          de: `${baseUrl}/de/tagesausfluege/tatra-und-zakopane`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tatra-wa-zakopane`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/tátra-és-zakopane`,
          es: `${baseUrl}/es/excursiones/tatras-y-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/szlak-papieski`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/szlak-papieski`,
          pl: `${baseUrl}/wycieczki-jednodniowe/szlak-papieski`,
          en: `${baseUrl}/en/day-trips/papal-trail`,
          de: `${baseUrl}/de/tagesausfluege/papst-route`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/darb-al-baba`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/papai-osveny`,
          es: `${baseUrl}/es/excursiones/ruta-papal`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/quady`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/quady`,
          pl: `${baseUrl}/wycieczki-jednodniowe/quady`,
          en: `${baseUrl}/en/day-trips/quad-bike-trips`,
          de: `${baseUrl}/de/tagesausfluege/quads`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/quads`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/quad-turak`,
          es: `${baseUrl}/es/excursiones/quads`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/rowery-elektryczne`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/wycieczki-jednodniowe/rowery-elektryczne`,
          pl: `${baseUrl}/wycieczki-jednodniowe/rowery-elektryczne`,
          en: `${baseUrl}/en/day-trips/electric-bikes`,
          de: `${baseUrl}/de/tagesausfluege/e-bikes`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/ad-darajat-al-kahrabaiyya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/elektromos-kerékpárok`,
          es: `${baseUrl}/es/excursiones/bicicletas-electricas`,
        },
      },
    },
    {
      url: `${baseUrl}/transport/nad-morskie-oko`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/transport/nad-morskie-oko`,
          pl: `${baseUrl}/transport/nad-morskie-oko`,
          en: `${baseUrl}/en/transport/to-morskie-oko`,
          de: `${baseUrl}/de/transport/zum-morskie-oko`,
          ar: `${baseUrl}/ar/naql/ila-morskie-oko`,
          hu: `${baseUrl}/hu/közlekedés/morskie-okohoz`,
          es: `${baseUrl}/es/transporte/hacia-morskie-oko`,
        },
      },
    },
    {
      url: `${baseUrl}/ciekawostki-o-splywie-dunajcem`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/ciekawostki-o-splywie-dunajcem`,
          pl: `${baseUrl}/ciekawostki-o-splywie-dunajcem`,
          en: `${baseUrl}/en/fun-facts-about-dunajec-rafting`,
          de: `${baseUrl}/de/wissenswertes-ueber-dunajec-flossfahrt`,
          ar: `${baseUrl}/ar/haqaeq-mumti3a-3an-rihlat-dunajec`,
          hu: `${baseUrl}/hu/erdekessegek-a-dunajeci-turarol`,
          es: `${baseUrl}/es/curiosidades-descenso-dunajec`,
        },
      },
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/oferta`,
          pl: `${baseUrl}/oferta`,
          en: `${baseUrl}/en/offer`,
          de: `${baseUrl}/de/angebot`,
          ar: `${baseUrl}/ar/alttaref`,
          hu: `${baseUrl}/hu/ajanlat`,
          es: `${baseUrl}/es/oferta`,
        },
      },
    },
    {
      url: `${baseUrl}/polityka-cookies`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/polityka-cookies`,
          pl: `${baseUrl}/polityka-cookies`,
          en: `${baseUrl}/en/cookie-policy`,
          de: `${baseUrl}/de/cookie-richtlinie`,
          ar: `${baseUrl}/ar/siyasat-cookies`,
          hu: `${baseUrl}/hu/suti-szabalyzat`,
          es: `${baseUrl}/es/politica-de-cookies`,
        },
      },
    },
    {
      url: `${baseUrl}/atrakcje-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/atrakcje-zakopane`,
          pl: `${baseUrl}/atrakcje-zakopane`,
          en: `${baseUrl}/en/zakopane-attractions`,
          de: `${baseUrl}/de/attraktionen-zakopane`,
          ar: `${baseUrl}/ar/amaken-siyahiya-zakopane`,
          hu: `${baseUrl}/hu/zakopane-latnivalok`,
          es: `${baseUrl}/es/atracciones-zakopane`,
        },
      },
    },

    // BLOG
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "x-default": `${baseUrl}/blog`,
          pl: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          de: `${baseUrl}/de/blog`,
          ar: `${baseUrl}/ar/blog`,
          hu: `${baseUrl}/hu/blog`,
          es: `${baseUrl}/es/blog`,
        },
      },
    },
    ...blogPostEntries,
  ];
}
