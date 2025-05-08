import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import BackgroundList from "@/app/UI/BackgroundList";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.rafting-po-dunajcu",
  });

  const path = routing.pathnames["/wycieczki/rafting-po-dunajcu"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Rafting() {
  const t = useTranslations("offer.tripslist.rafting-po-dunajcu");
  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
  ];
  const tripItems = [];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "160 PLN*"],
    [t("table.2"), "140 PLN*"],
    ["", t("table.additional")],
    [t("table.3"), "25PLN/23PLN"],
    [t("table.4"), "25PLN/23PLN"],
    [t("table.5"), "12LN/10PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/rafting-po-dunajcu/rafting.webp"
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
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            text={t("list.header")}
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          {t("info")}
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
            title={t("tripprogram.header") + " ok. 9-10h"}
            items={tripItems}
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/rafting-po-dunajcu/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/3.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/4.webp",
              alt: t("alt.5"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
