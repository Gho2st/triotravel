import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/wycieczki-jednodniowe/92-spacer-w-koronach-drzew",
        destination: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/32-tajemnice-wieliczki",
        destination: "/wycieczki-jednodniowe/tajemnice-wieliczki",
        permanent: true,
      },
      {
        source: "/baseny-termalne/47-termy-chocholowskie",
        destination: "/wycieczki-jednodniowe/chocholowskie-termy",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/36-wycieczka-do-jaskini-bielanskiej",
        destination: "/wycieczki-jednodniowe/jaskinia-bielanska",
        permanent: true,
      },
      {
        source: "/splyw-dunajcem/splyw-dunajcem-zakopane",
        destination: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
        permanent: true,
      },

      {
        source: "/splyw-dunajcem",
        destination: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/93-slowacki-raj",
        destination: "/wycieczki-jednodniowe/slowacki-raj",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/109-wieden",
        destination: "/wycieczki-jednodniowe/wieden",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/108-budapeszt",
        destination: "/wycieczki-jednodniowe/budapeszt",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/113zamek-orawski",
        destination: "/wycieczki-jednodniowe/zamek-orawski",
        permanent: true,
      },
      {
        source: "/kuligi/106",
        destination: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/110-dookola-tatr",
        destination: "/wycieczki-jednodniowe/dookola-tatr",
        permanent: true,
      },
      {
        source:
          "/wycieczki-jednodniowe/34-rafting-czyli-splyw-pontonami-po-dunajcu",
        destination: "/wycieczki-jednodniowe/rafting-po-dunajcu",
        permanent: true,
      },
      {
        source: "/kuligi/41-kuligi-w-sezonie-letnim",
        destination: "/wycieczki-jednodniowe/biesiada-goralska",
        permanent: true,
      },
      {
        source: "/rezerwacje/27-pl/99-punkty-odbioru",
        destination: "/mapa-przystankow",
        permanent: true,
      },
      {
        source: "/kuligi/102-kulig-goralski-koscielsko",
        destination: "/kuligi/goralski-koscielisko",
        permanent: true,
      },
      {
        source: "/kuligi/44-vip-kulig-w-dolinie-chocholowskiej",
        destination: "/kuligi/dolina-chocholowska",
        permanent: true,
      },
      {
        source: "/kuligi/48-kulig-sylwestrowy-2024-25",
        destination: "/kuligi/wieczor-sylwestrowy",
        permanent: true,
      },
      {
        source: "/wycieczki/zamek-orawski",
        destination: "/wycieczki-jednodniowe/krajobrazy-slowacji",
        permanent: true,
      },
      {
        source: "/wycieczki",
        destination: "/wycieczki-jednodniowe",
        permanent: true,
      },
      {
        source: "/wycieczki/splyw-dunajcem-krotszy",
        destination: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
        permanent: true,
      },
      {
        source: "/wycieczki/splyw-dunajcem-dluzszy",
        destination: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
        permanent: true,
      },
      {
        source:
          "/wycieczki/:slug((?!.*\\.(?:png|jpg|jpeg|webp|gif|svg|css|js|ico|json|map|woff2?)$).*)",
        destination: "/wycieczki-jednodniowe/:slug",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/biesiada-goralska",
        destination: "/wycieczki-jednodniowe/zabawa-goralska",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
