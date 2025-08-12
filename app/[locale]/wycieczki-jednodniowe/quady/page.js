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
    namespace: "metadata.quady",
  });

  const path = routing.pathnames["/wycieczki-jednodniowe/quady"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Quady() {
  const t = useTranslations("offer.tripslist.quady");

  const tripItems = [
    t("tripprogram.1"),
    t("tripprogram.2"),
    t("tripprogram.3"),
    t("tripprogram.4"),
    t("tripprogram.5"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header2"), t("table.header1")];
  const tableRows = [
    [t("table.1"), "450 PLN/1h*"],
    [t("table.2"), "200 PLN*"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/quady/quady.webp"
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
            title={t("tripprogram.header") + " ok. 3-5h"}
            items={tripItems}
          />
          <TripTime showCallInfo={true} />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/quady/2.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/quady/3.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/quady/4.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/quady/5.webp",
              alt: t("alt.5"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
