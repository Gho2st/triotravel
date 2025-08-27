export default function sitemap() {
  const baseUrl = "https://triotravel.pl";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          hu: `${baseUrl}/hu`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips`,
          ar: `${baseUrl}/ar/rihlat-yawmiya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/sleigh-rides`,
          ar: `${baseUrl}/ar/zalajat`,
          hu: `${baseUrl}/hu/szánkózás`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/goralski-koscielisko`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/sleigh-rides/highlander-koscielisko`,
          ar: `${baseUrl}/ar/zalajat/highlander-koscielisko`,
          hu: `${baseUrl}/hu/szánkózás/hegyvidéki-koscielisko`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/dolina-chocholowska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/sleigh-rides/chocholowska-valley`,
          ar: `${baseUrl}/ar/zalajat/wadi-chocholowska`,
          hu: `${baseUrl}/hu/szánkózás/chocholowska-völgy`,
        },
      },
    },
    {
      url: `${baseUrl}/kuligi/wieczor-sylwestrowy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/sleigh-rides/new-years-eve`,
          ar: `${baseUrl}/ar/zalajat/laylat-ras-al-sana`,
          hu: `${baseUrl}/hu/szánkózás/szilveszteri-est`,
        },
      },
    },
    {
      url: `${baseUrl}/bilety-na-kasprowy-wierch`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/kasprowy-wierch-tickets`,
          ar: `${baseUrl}/ar/tazakir-kasprowy`,
          hu: `${baseUrl}/hu/kasprowy-wierch-jegyek`,
        },
      },
    },
    {
      url: `${baseUrl}/transport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/transport`,
          ar: `${baseUrl}/ar/naql`,
          hu: `${baseUrl}/hu/közlekedés`,
        },
      },
    },
    {
      url: `${baseUrl}/transport/mapa-przystankow`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/transport/map-of-stops`,
          ar: `${baseUrl}/ar/naql/kharitat-al-mawaqif`,
          hu: `${baseUrl}/hu/közlekedés/megállók-térképe`,
        },
      },
    },
    {
      url: `${baseUrl}/partnerzy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/partners`,
          ar: `${baseUrl}/ar/shuraka`,
          hu: `${baseUrl}/hu/partnerek`,
        },
      },
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          ar: `${baseUrl}/ar/ittasil`,
          hu: `${baseUrl}/hu/kapcsolat`,
        },
      },
    },
    {
      url: `${baseUrl}/rezerwacje`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/reservations`,
          ar: `${baseUrl}/ar/hajuzat`,
          hu: `${baseUrl}/hu/foglalások`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/dunajec-rafting-zakopane`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-dunajec-zakopane`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-rafting-zakopane`,
        },
      },
    },

    {
      url: `${baseUrl}/wycieczki-jednodniowe/chocholowskie-termy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/chocholowska-thermal-pools`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/hammamat-chocholowska-harrariya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/chocholowska-termálfürdők`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/spacer-w-koronach-drzew`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/tree-top-walk-bachledka`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/mashi-fawq-al-ashjar-bachledka`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/fakorona-séta-bachledka`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/jaskinia-bielanska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/belianska-cave-trip`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/rihlat-kahf-belianska`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/belianska-barlangtúra`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/tajemnice-wieliczki`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/wieliczka-salt-mine-tour`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/asrar-manjam-wieliczka`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/wieliczka-sóbánya-túra`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/zabawa-goralska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/highlander-party`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/haflat-jibaliya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/hegyvideki-mulatsag`,
        },
      },
    },

    {
      url: `${baseUrl}/wycieczki-jednodniowe/slowacki-raj`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/slovak-raj`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/jannat-slovak`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/szlovák-paradicsom`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/wieden`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/vienna`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/vienna`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/bécs`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/budapeszt`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/budapest`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/budapest`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/budapest`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/krajobrazy-slowacji`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/slovak-landscapes`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/manazir-sulufakiya`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/szlovak-tajak`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/dookola-tatr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/around-tatras`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/hawl-tatra`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/tátra-körül`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/rafting-po-dunajcu`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/dunajec-river-rafting`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-nahr-dunajec`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-folyó-rafting`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/ice-temple-hrebienok`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/mabad-thalj-hrebienok`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/jégtemplom-hrebienok`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/splyw-dunajcem-slowacja`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/dunajec-rafting-slovakia`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tajdeef-dunajec-slowakia`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/dunajec-rafting-szlovakia`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/tatry-i-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/tatras-and-zakopane`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/tatra-wa-zakopane`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/tátra-és-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/szlak-papieski`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/papal-trail`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/darb-al-baba`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/papai-osveny`,
        },
      },
    },
    {
      url: `${baseUrl}/transport/nad-morskie-oko`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/transport/to-morskie-oko`,
          ar: `${baseUrl}/ar/naql/ila-morskie-oko`,
          hu: `${baseUrl}/hu/közlekedés/morskie-okohoz`,
        },
      },
    },
    {
      url: `${baseUrl}/ciekawostki-o-splywie-dunajcem`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/fun-facts-about-dunajec-rafting`,
          ar: `${baseUrl}/ar/haqaeq-mumti3a-3an-rihlat-dunajec`,
          hu: `${baseUrl}/hu/erdekessegek-a-dunajeci-turarol`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki-jednodniowe/quady`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/day-trips/quad-bike-trips`,
          ar: `${baseUrl}/ar/rihlat-yawmiya/quads`,
          hu: `${baseUrl}/hu/egynapos-kirandulasok/quad-turak`,
        },
      },
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/offer`,
          ar: `${baseUrl}/ar/alttaref`,
          hu: `${baseUrl}/hu/ajanlat`,
        },
      },
    },
    {
      url: `${baseUrl}/polityka-cookies`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/cookie-policy`,
          ar: `${baseUrl}/ar/siyasat-cookies`,
          hu: `${baseUrl}/hu/suti-szabalyzat`,
        },
      },
    },
  ];
}
