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
        },
      },
    },
  ];
}
