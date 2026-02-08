export default function sitemap() {
  const baseUrl = "https://triotravel.pl";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
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
          pl: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          de: `${baseUrl}/de/blog`,
          ar: `${baseUrl}/ar/blog`,
          hu: `${baseUrl}/hu/blog`,
          es: `${baseUrl}/es/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/miasto-u-stop-tatr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/miasto-u-stop-tatr`,
          en: `${baseUrl}/en/blog/mountain-town-adventure`,
          de: `${baseUrl}/de/blog/stadt-am-fusse-der-tatra`,
          ar: `${baseUrl}/ar/blog/madinat-tatra`,
          hu: `${baseUrl}/hu/blog/hegyi-varos-kaland`,
          es: `${baseUrl}/es/blog/ciudad-montana-aventura`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/rodzinne-wakacje-w-gorach`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/rodzinne-wakacje-w-gorach`,
          en: `${baseUrl}/en/blog/family-vacations-mountains`,
          de: `${baseUrl}/de/blog/familienurlaub-in-den-bergen`,
          ar: `${baseUrl}/ar/blog/utla-ailiya-jabal`,
          hu: `${baseUrl}/hu/blog/csaladi-vakaciok-hegyekben`,
          es: `${baseUrl}/es/blog/vacaciones-familia-montana`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/gorska-adrenalina`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/gorska-adrenalina`,
          en: `${baseUrl}/en/blog/mountain-adrenaline`,
          de: `${baseUrl}/de/blog/berg-adrenalin`,
          ar: `${baseUrl}/ar/blog/ithara-jabaliya`,
          hu: `${baseUrl}/hu/blog/hegyi-adrenalin`,
          es: `${baseUrl}/es/blog/adrenalina-montana`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/gorska-kultura`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/gorska-kultura`,
          en: `${baseUrl}/en/blog/highland-culture`,
          de: `${baseUrl}/de/blog/bergkultur`,
          ar: `${baseUrl}/ar/blog/thaqafa-jabaliya`,
          hu: `${baseUrl}/hu/blog/hegyi-kultura`,
          es: `${baseUrl}/es/blog/cultura-montanesa`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/relaks-w-tatrach`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/relaks-w-tatrach`,
          en: `${baseUrl}/en/blog/relaxation-tatras`,
          de: `${baseUrl}/de/blog/entspannung-in-der-tatra`,
          ar: `${baseUrl}/ar/blog/istiraha-tatra`,
          hu: `${baseUrl}/hu/blog/pihenes-tatraban`,
          es: `${baseUrl}/es/blog/relax-tatras`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/najlepsze-trasy-z-zakopanego`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/najlepsze-trasy-z-zakopanego`,
          en: `${baseUrl}/en/blog/best-trails-from-zakopane`,
          de: `${baseUrl}/de/blog/beste-routen-von-zakopane`,
          ar: `${baseUrl}/ar/blog/afdal-almasarat-min-zakubani`,
          hu: `${baseUrl}/hu/blog/legjobb-osvenyek-zakopanebol`,
          es: `${baseUrl}/es/blog/mejores-rutas-desde-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/najpiekniejsze-widoki-tatry`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/najpiekniejsze-widoki-tatry`,
          en: `${baseUrl}/en/blog/most-beautiful-tatra-views`,
          de: `${baseUrl}/de/blog/schoenste-aussichten-tatra`,
          ar: `${baseUrl}/ar/blog/afdal-almanazir-tatra`,
          hu: `${baseUrl}/hu/blog/legszerubb-tatra-kilatasok`,
          es: `${baseUrl}/es/blog/vistas-mas-bellas-tatras`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/weekend-w-zakopanem`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/weekend-w-zakopanem`,
          en: `${baseUrl}/en/blog/weekend-in-zakopane`,
          de: `${baseUrl}/de/blog/wochenende-in-zakopane`,
          ar: `${baseUrl}/ar/blog/nahiyat-alnihaya-fi-zakubani`,
          hu: `${baseUrl}/hu/blog/hetvege-zakopaneben`,
          es: `${baseUrl}/es/blog/fin-de-semana-zakopane`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/przyroda-tatr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/przyroda-tatr`,
          en: `${baseUrl}/en/blog/tatra-nature`,
          de: `${baseUrl}/de/blog/natur-der-tatra`,
          ar: `${baseUrl}/ar/blog/tabi3at-tatra`,
          hu: `${baseUrl}/hu/blog/tatra-termeszet`,
          es: `${baseUrl}/es/blog/naturaleza-tatras`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/adrenalina-tatry`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/adrenalina-tatry`,
          en: `${baseUrl}/en/blog/adrenaline-tatras`,
          de: `${baseUrl}/de/blog/adrenalin-tatra`,
          ar: `${baseUrl}/ar/blog/adrenaline-tatra`,
          hu: `${baseUrl}/hu/blog/adrenalin-tatraban`,
          es: `${baseUrl}/es/blog/adrenalina-tatras`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/romantyczny-zakopane`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/romantyczny-zakopane`,
          en: `${baseUrl}/en/blog/romantic-zakopane`,
          de: `${baseUrl}/de/blog/romantisches-zakopane`,
          ar: `${baseUrl}/ar/blog/zakubani-alromansiya`,
          hu: `${baseUrl}/hu/blog/romantikus-zakopane`,
          es: `${baseUrl}/es/blog/zakopane-romantico`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/fotografia-tatry`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${baseUrl}/blog/fotografia-tatry`,
          en: `${baseUrl}/en/blog/photography-tatras`,
          de: `${baseUrl}/de/blog/fotografie-tatra`,
          ar: `${baseUrl}/ar/blog/taswir-tatra`,
          hu: `${baseUrl}/hu/blog/fotografalas-tatraban`,
          es: `${baseUrl}/es/blog/fotografia-tatras`,
        },
      },
    },
  ];
}
