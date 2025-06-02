import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import { useTranslations } from "next-intl";
import TripTime from "@/app/UI/TripTime";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.tajemnice-wieliczki",
  });

  const path = routing.pathnames["/wycieczki/tajemnice-wieliczki"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Wieliczka() {
  const t = useTranslations("offer.tripslist.wieliczka");

  const tripItems = [
    "6:00 - " + t("tripprogram.1"),
    "8:00 - " + t("tripprogram.2"),
    "11:30 - " + t("tripprogram.3"),
    "11:30 - " + t("tripprogram.4"),
    "12:00 - 13:00 " + t("tripprogram.5"),
    "15:00 - " + t("tripprogram.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "90 PLN"],
    [t("table.2"), "80 PLN"],
    ["", t("table.additional")],
    [t("table.3"), "103 PLN**"],
    [t("table.4"), "82 PLN**"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/tajemnice-wieliczki/wieliczka.webp"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt={t("alt.1")}
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t("text")}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>
        <div className="mt-16">
          <TripProgram
            title={<>{t("tripprogram.header")}</>}
            items={tripItems}
          />
          <TripTime
            availableDays={["Pon", "Pt"]} // Przykład: wybrane dni
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/tajemnice-wieliczki/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/3.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/4.webp",
              alt: t("alt.5"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/5.webp",
              alt: t("alt.6"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/6.webp",
              alt: t("alt.7"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/7.webp",
              alt: t("alt.8"),
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/8.webp",
              alt: t("alt.9"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
