import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Card from "@/app/UI/Card";
import Services from "@/app/UI/Homepage/Services";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.trips" });

  const path = routing.pathnames["/wycieczki-jednodniowe"][locale]; // Pobieramy ścieżkę dla języka
  // Jeśli locale to 'pl', pomijamy prefix języka, w przeciwnym razie go dodajemy
  const canonicalUrl =
    locale === "pl"
      ? `https://triotravel.pl${path}`
      : `https://triotravel.pl/${locale}${path}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function Atrakcje() {
  const t = useTranslations("offer");

  const articles = [
    {
      title: t("trips.1"),
      image: "/wycieczki/splyw-dunajcem-zakopane/splyw.webp",
      link: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
    },
    {
      title: t("trips.2"),
      image: "/wycieczki/termy/termy.webp",
      link: "/wycieczki-jednodniowe/chocholowskie-termy",
    },
    {
      title: t("trips.3"),
      image: "/wycieczki/spacer-w-koronach-drzew/korony.webp",
      link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
    },
    {
      title: t("trips.4"),
      image: "/wycieczki//jaskinia-bielanska/jaskinia.webp",
      link: "/wycieczki-jednodniowe/jaskinia-bielanska",
    },
    {
      title: t("trips.6"),
      image: "/wycieczki/tajemnice-wieliczki/wieliczka.webp",
      link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
    },
    {
      title: t("trips.5"),
      image: "/wycieczki/splyw-dunajcem-slowacja/splyw.webp",
      link: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
    },
    {
      title: t("trips.16"),
      image: "/wycieczki/biesiada-goralska/baner.webp",
      link: "/wycieczki-jednodniowe/biesiada-goralska",
    },
    {
      title: t("trips.7"),
      image: "/wycieczki/kasprowy-wierch/4.webp",
      link: "/bilety-na-kasprowy-wierch",
    },
    {
      title: t("trips.8"),
      image: "/wycieczki/slowacki-raj/slowacki-raj.webp",
      link: "/wycieczki-jednodniowe/slowacki-raj",
    },
    {
      title: t("trips.18"),
      image: "/wycieczki/szlak-papieski/szlak-papieski.webp",
      link: "/wycieczki-jednodniowe/szlak-papieski",
    },
    {
      title: t("trips.19"),
      image: "/morskie-oko/morskie-oko.webp",
      link: "/transport-nad-morskie-oko",
    },
    {
      title: t("trips.9"),
      image: "/wycieczki/wieden/wieden.webp",
      link: "/wycieczki-jednodniowe/wieden",
    },
    {
      title: t("trips.10"),
      image: "/wycieczki/budapeszt/budapeszt.webp",
      link: "/wycieczki-jednodniowe/budapeszt",
    },
    {
      title: t("trips.11"),
      image: "/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp",
      link: "/wycieczki-jednodniowe/krajobrazy-slowacji",
    },
    // {
    //   title: t("trips.12"),
    //   image: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.webp",
    //   link: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
    // },

    {
      title: t("trips.14"),
      image: "/wycieczki/dookola-tatr/tatry.webp",
      link: "/wycieczki-jednodniowe/dookola-tatr",
    },
    {
      title: t("trips.15"),
      image: "/wycieczki/rafting-po-dunajcu/rafting.webp",
      link: "/wycieczki-jednodniowe/rafting-po-dunajcu",
    },
    {
      title: t("trips.20"),
      image: "/wycieczki/quady/quady.webp",
      link: "/wycieczki-jednodniowe/quady",
    },
  ];
  return (
    <>
      <Header text={t("trips.header")} />
      <section className="px-6 md:px-20 2xl:px-32 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header")} />
        <p className="mt-10 2xl:mt-16 text-center text-xl">{t("text2")}</p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-16 mt-20 justify-center items-center">
          {articles.map((article, index) => (
            <Card key={index} article={article} index={index} />
          ))}
        </div>
      </section>
      <section>
        <Services />
      </section>
    </>
  );
}
