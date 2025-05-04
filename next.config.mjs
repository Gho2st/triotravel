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
        destination: "/wycieczki/spacer-w-koronach-drzew",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/32-tajemnice-wieliczki",
        destination: "/wycieczki/tajemnice-wieliczki",
        permanent: true,
      },
      {
        source: "/baseny-termalne/47-termy-chocholowskie",
        destination: "/wycieczki/chocholowskie-termy",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/36-wycieczka-do-jaskini-bielanskiej",
        destination: "/wycieczki/jaskinia-bielanska",
        permanent: true,
      },
      {
        source: "/splyw-dunajcem/splyw-dunajcem-zakopane",
        destination: "/wycieczki/splyw-dunajcem-dluzszy",
        permanent: true,
      },

      {
        source: "/splyw-dunajcem",
        destination: "/wycieczki/splyw-dunajcem-krotszy",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/93-slowacki-raj",
        destination: "/wycieczki/slowacki-raj",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/109-wieden",
        destination: "/wycieczki/wieden",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/108-budapeszt",
        destination: "/wycieczki/budapeszt",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/113zamek-orawski",
        destination: "/wycieczki/zamek-orawski",
        permanent: true,
      },
      {
        source: "/kuligi/106",
        destination: "/wycieczki/swiatynia-lodowa-hrebieniok",
        permanent: true,
      },
      {
        source: "/wycieczki-jednodniowe/110-dookola-tatr",
        destination: "/wycieczki/dookola-tatr",
        permanent: true,
      },
      {
        source:
          "/wycieczki-jednodniowe/34-rafting-czyli-splyw-pontonami-po-dunajcu",
        destination: "/wycieczki/rafting-po-dunajcu",
        permanent: true,
      },
      {
        source: "/kuligi/41-kuligi-w-sezonie-letnim",
        destination: "/wycieczki/biesiada-goralska",
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
    ];
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
