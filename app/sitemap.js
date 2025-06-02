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
      url: `${baseUrl}/wycieczki`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips`,
          ar: `${baseUrl}/ar/rihlat`,
          hu: `${baseUrl}/hu/kirándulások`,
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
      url: `${baseUrl}/mapa-przystankow`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/map-of-stops`,
          ar: `${baseUrl}/ar/kharitat-al-mawaqif`,
          hu: `${baseUrl}/hu/megállók-térképe`,
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
      url: `${baseUrl}/wycieczki/splyw-dunajcem-dluzszy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/dunajec-rafting-extended`,
          ar: `${baseUrl}/ar/rihlat/tajdeef-dunajec-mutawwal`,
          hu: `${baseUrl}/hu/kirándulások/dunajec-rafting-hosszabb`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/chocholowskie-termy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/chocholowska-thermal-pools`,
          ar: `${baseUrl}/ar/rihlat/hammamat-chocholowska-harrariya`,
          hu: `${baseUrl}/hu/kirándulások/chocholowska-termálfürdők`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/spacer-w-koronach-drzew`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/tree-top-walk-bachledka`,
          ar: `${baseUrl}/ar/rihlat/mashi-fawq-al-ashjar-bachledka`,
          hu: `${baseUrl}/hu/kirándulások/fakorona-séta-bachledka`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/jaskinia-bielanska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/belianska-cave-trip`,
          ar: `${baseUrl}/ar/rihlat/rihlat-kahf-belianska`,
          hu: `${baseUrl}/hu/kirándulások/belianska-barlangtúra`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/tajemnice-wieliczki`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/wieliczka-salt-mine-tour`,
          ar: `${baseUrl}/ar/rihlat/asrar-manjam-wieliczka`,
          hu: `${baseUrl}/hu/kirándulások/wieliczka-sóbánya-túra`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/biesiada-goralska`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/goral-feast`,
          ar: `${baseUrl}/ar/rihlat/madbat-al-jibal-goral`,
          hu: `${baseUrl}/hu/kirándulások/hegyvidéki-lakoma`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/slowacki-raj`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/slovak-raj`,
          ar: `${baseUrl}/ar/rihlat/jannat-slovak`,
          hu: `${baseUrl}/hu/kirándulások/szlovák-paradicsom`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/wieden`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/vienna`,
          ar: `${baseUrl}/ar/rihlat/vienna`,
          hu: `${baseUrl}/hu/kirándulások/bécs`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/budapeszt`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/b bioticapest`,
          ar: `${baseUrl}/ar/rihlat/budapest`,
          hu: `${baseUrl}/hu/kirándulások/budapest`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/zamek-orawski`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/orava-castle`,
          ar: `${baseUrl}/ar/rihlat/qilat-orava`,
          hu: `${baseUrl}/hu/kirándulások/árva-vár`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/dookola-tatr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/around-tatras`,
          ar: `${baseUrl}/ar/rihlat/hawl-tatra`,
          hu: `${baseUrl}/hu/kirándulások/tátra-körül`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/rafting-po-dunajcu`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/dunajec-river-rafting`,
          ar: `${baseUrl}/ar/rihlat/tajdeef-nahr-dunajec`,
          hu: `${baseUrl}/hu/kirándulások/dunajec-folyó-rafting`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/swiatynia-lodowa-hrebieniok`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/ice-temple-hrebienok`,
          ar: `${baseUrl}/ar/rihlat/mabad-thalj-hrebienok`,
          hu: `${baseUrl}/hu/kirándulások/jégtemplom-hrebienok`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/splyw-dunajcem-krotszy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/shorter-dunajec-river-rafting`,
          ar: `${baseUrl}/ar/rihlat/rihlat-nahr-dunajec-qasira`,
          hu: `${baseUrl}/hu/kirándulások/rövidebb-dunajec-folyó-rafting`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/tatry-i-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/tatras-and-zakopane`,
          ar: `${baseUrl}/ar/rihlat/tatra-wa-zakopane`,
          hu: `${baseUrl}/hu/kirándulások/tatra-es-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/wycieczki/szlak-papieski`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/trips/papal-trail`,
          ar: `${baseUrl}/ar/rihlat/darb-al-baba`,
          hu: `${baseUrl}/hu/kirándulások/papai-osveny`,
        },
      },
    },
    {
      url: `${baseUrl}/transport-nad-morskie-oko`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/transport-to-morskie-oko`,
          ar: `${baseUrl}/ar/naql-ila-morskie-oko`,
          hu: `${baseUrl}/hu/szallitas-morskie-okohoz`,
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
  ];
}
