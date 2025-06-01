import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import Table from "@/app/UI/Table";

import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import TatryZakopane from "@/app/UI/TatryZakopane";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.szlak-papieski",
  });

  const path =
    routing.pathnames["/wycieczki/szlak-papieski"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Szlak() {
  const t = useTranslations("offer.tripslist.szlak-papieski");

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "80 PLN"],
    [t("table.2"), "75 PLN"],
  ];

  const tripItems = [
    t("tripprogram.1"),
    t("tripprogram.2"),
    t("tripprogram.3"),
    t("tripprogram.4"),
    t("tripprogram.5"),
    t("tripprogram.6"),
  ];

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
    t("list.7"),
    t("list.8"),
  ];

  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/szlak-papieski/szlak-papieski.webp"
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
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <div className="mt-16">
          <BackgroundList title={t("header3")} items={customItems} />
        </div>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>
        <div className="mt-16">
          <TripProgram
            title={t("tripprogram.header") + " 4-5h"}
            items={tripItems}
          />
          <div className="mt-24">
            <TatryZakopane />
          </div>
        </div>
      </section>

      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/szlak-papieski/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/szlak-papieski/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/szlak-papieski/szlak-papieski.webp",
              alt: t("alt.1"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
