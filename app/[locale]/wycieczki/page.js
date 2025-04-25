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

  const path = routing.pathnames["/wycieczki"][locale]; // Pobieramy ścieżkę dla języka
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
      image: "/wycieczki/splyw-dunajcem-dluzszy/splyw.png",
      link: "/wycieczki/splyw-dunajcem-dluzszy",
    },
    {
      title: t("trips.2"),
      image: "/wycieczki/termy/termy.png",
      link: "/wycieczki/chocholowskie-termy",
    },
    {
      title: t("trips.3"),
      image: "/wycieczki/spacer-w-koronach-drzew/korony.png",
      link: "/wycieczki/spacer-w-koronach-drzew",
    },
    {
      title: t("trips.4"),
      image: "/wycieczki//jaskinia-bielanska/jaskinia.png",
      link: "/wycieczki/jaskinia-bielanska",
    },
    {
      title: t("trips.6"),
      image: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
      link: "/wycieczki/tajemnice-wieliczki",
    },
    // {
    //   title: t("trips.5"),
    //   image: "/wycieczki/splyw-dunajcem-krotszy/splyw.png",
    //   link: "/wycieczki/splyw-dunajcem-krotszy",
    // },
    {
      title: t("trips.16"),
      image: "/wycieczki/biesiada-goralska/baner.png",
      link: "/wycieczki/biesiada-goralska",
    },
    {
      title: t("trips.7"),
      image: "/wycieczki/kasprowy-wierch/4.png",
      link: "/bilety-na-kasprowy-wierch",
    },
    {
      title: t("trips.8"),
      image: "/wycieczki/slowacki-raj/slowacki-raj.png",
      link: "/wycieczki/slowacki-raj",
    },
    {
      title: t("trips.9"),
      image: "/wycieczki/wieden/wieden.png",
      link: "/wycieczki/wieden",
    },
    {
      title: t("trips.10"),
      image: "/wycieczki/budapeszt/budapeszt.png",
      link: "/wycieczki/budapeszt",
    },
    {
      title: t("trips.11"),
      image: "/wycieczki/zamek-orawski/zamek-orawski.png",
      link: "/wycieczki/zamek-orawski",
    },
    // {
    //   title: t("trips.12"),
    //   image: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
    //   link: "/wycieczki/swiatynia-lodowa-hrebieniok",
    // },

    {
      title: t("trips.14"),
      image: "/wycieczki/dookola-tatr/tatry.png",
      link: "/wycieczki/dookola-tatr",
    },
    {
      title: t("trips.15"),
      image: "/wycieczki/rafting-po-dunajcu/rafting.png",
      link: "/wycieczki/rafting-po-dunajcu",
    },
  ];
  return (
    <>
      <Header text={t("trips.header")} />
      <section className="px-6 md:px-20 2xl:px-32 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header")} />
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
