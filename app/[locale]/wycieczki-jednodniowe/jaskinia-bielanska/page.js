import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import { useTranslations } from "next-intl";
import ButtonComponent from "./ButtonComponent";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import Slovakia from "@/app/UI/Slovakia";
import TripTime from "@/app/UI/TripTime";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.jaskinia-bielanska",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/jaskinia-bielanska"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Jaskinia() {
  const t = useTranslations("offer.tripslist.jaskinia-bielanska");

  const customItems = [t("list.1"), t("list.2"), t("list.3")];

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "9:30 - " + t("tripprogram.2"),
    "10:00 - " + t("tripprogram.3"),
    "12:00 - " + t("tripprogram.4"),
    "15:00 - " + t("tripprogram.5"),
    "17:00 - " + t("tripprogram.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "100 PLN"],
    [t("table.2"), "90 PLN"],
    ["", t("table.additional")],
    [t("table.3"), "15€"],
    [t("table.4"), "8€"],
    [t("table.5"), "14€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/jaskinia-bielanska/jaskinia.webp"
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
        <Slovakia />
        <div className="mt-16">
          <Table headers={tableHeaders} rows={tableRows} />
        </div>
        <div className="mt-16">
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
          <TripTime availableDays={["Wt", "Czw", "Sob"]} />

          <div className="mt-16">
            <BackgroundList title={t("header3")} items={customItems} />
          </div>
        </div>
        <ButtonComponent />
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/jaskinia-bielanska/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/3.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/4.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/5.webp",
              alt: t("alt.5"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/6.webp",
              alt: t("alt.6"),
            },
            {
              url: "/wycieczki/jaskinia-bielanska/7.webp",
              alt: t("alt.7"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
