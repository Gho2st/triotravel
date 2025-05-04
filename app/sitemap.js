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
          ar: `${baseUrl}/ar/رحلات`,
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
          ar: `${baseUrl}/ar/زلاقات`,
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
          ar: `${baseUrl}/ar/زلاقات/هايلاندر-كوسيلسكو`,
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
          ar: `${baseUrl}/ar/زلاقات/وادي-خوخووفسكا`,
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
          ar: `${baseUrl}/ar/زلاقات/ليلة-رأس-السنة`,
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
          ar: `${baseUrl}/ar/تذاكر-كاسپروي`,
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
          ar: `${baseUrl}/ar/نقل`,
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
          ar: `${baseUrl}/ar/خريطة-المواقف`,
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
          ar: `${baseUrl}/ar/شركاء`,
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
          ar: `${baseUrl}/ar/اتصال`,
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
          ar: `${baseUrl}/ar/حجوزات`,
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
          ar: `${baseUrl}/ar/رحلات/التجديف-نهر-دوناجتس-المطول`,
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
          ar: `${baseUrl}/ar/رحلات/حمامات-خوخووفسكا-الحرارية`,
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
          ar: `${baseUrl}/ar/رحلات/مشي-فوق-الأشجار-باخليدكا`,
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
          ar: `${baseUrl}/ar/رحلات/رحلة-كهف-بيليانسكا`,
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
          ar: `${baseUrl}/ar/رحلات/أسرار-منجم-فيليتشكا`,
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
          ar: `${baseUrl}/ar/رحلات/مأدبة-الجبال-الغورال`,
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
          ar: `${baseUrl}/ar/رحلات/الجنة-السلوفاكية`,
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
          ar: `${baseUrl}/ar/رحلات/فيينا`,
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
          ar: `${baseUrl}/ar/رحلات/بودابست`,
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
          ar: `${baseUrl}/ar/رحلات/قلعة-أوراوا`,
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
          ar: `${baseUrl}/ar/رحلات/حول-تاترا`,
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
          ar: `${baseUrl}/ar/رحلات/التجديف-نهر-دوناجتس`,
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
          ar: `${baseUrl}/ar/رحلات/معبد-الثلج-هريبيانوك`,
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
          ar: `${baseUrl}/ar/رحلات/رحلة-نهر-دوناجتس-القصيرة`,
          hu: `${baseUrl}/hu/kirándulások/rövidebb-dunajec-folyó-rafting`,
        },
      },
    },
  ];
}
