import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import Majer from "@/app/UI/Majer";

import { useTranslations } from "next-intl";
import TatryButtons from "./TatryButtons";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.dookola-tatr",
  });

  const path = routing.pathnames["/wycieczki/dookola-tatr"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Tatry() {
  const t = useTranslations("offer.tripslist.dookola-tatr");

  const tripItems = [
    "8:30 - " + t("tripprogram.1"),
    "(ok. 90 min) - " + t("tripprogram.2"),
    "(ok 70 min) - " + t("tripprogram.3"),
    "(ok 70 min) - " + t("tripprogram.4"),
    "19:00 - " + t("tripprogram.5"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "105 PLN*"],
    [t("table.2"), "99 PLN*"],
    [t("table.3"), "95 PLN*"],
    ["", t("table.additional")],
    [t("table.4"), t("table.a1")],
    [t("table.5"), "10 E**"],
    [t("table.6"), t("table.a2")],
    [t("table.7"), t("table.a3")],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/dookola-tatr/tatry.webp"
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
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
        </div>
        <TatryButtons />
      </section>
      <Majer />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/dookola-tatr/tatry.webp",
              alt: t("alt.1"),
            },
            {
              url: "/wycieczki/dookola-tatr/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/dookola-tatr/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/dookola-tatr/3.webp",
              alt: t("alt.4"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
