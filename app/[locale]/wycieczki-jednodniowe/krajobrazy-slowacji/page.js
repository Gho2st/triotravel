import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import Majer from "@/app/UI/Majer";
import { useTranslations } from "next-intl";
import TripTime from "@/app/UI/TripTime";
import BackgroundList from "@/app/UI/BackgroundList";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.krajobrazy-slowacji",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/krajobrazy-slowacji"][locale]; // Pobieramy ścieżkę dla języka
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

export default function KrajobrazySlowacji() {
  const t = useTranslations("offer.tripslist.krajobrazy-slowacji");
  const tripItems = [
    "8:30 - " + t("tripprogram.1"),
    "11:30 - " + t("tripprogram.2"),
    "13:30 - " + t("tripprogram.3"),
    "14:15 - " + t("tripprogram.4"),
    "15:30 - " + t("tripprogram.5"),
    "17:00 - " + t("tripprogram.6"),
  ];

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "110 PLN"],
    ["", t("table.additional")],
    [t("table.2"), "10 PLN"],
  ];

  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp"
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

          <div className="mt-16">
            <BackgroundList title={t("header3")} items={customItems} />
          </div>
          <TripTime
            showCallInfo={true}
            availableDays={["Pon", "Śr", "Pt", "Nd"]}
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp",
              alt: t("alt.1"),
            },
            {
              url: "/wycieczki/krajobrazy-slowacji/2.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/krajobrazy-slowacji/3.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/krajobrazy-slowacji/4.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/krajobrazy-slowacji/5.webp",
              alt: t("alt.5"),
            },
            {
              url: "/wycieczki/krajobrazy-slowacji/6.webp",
              alt: t("alt.6"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
