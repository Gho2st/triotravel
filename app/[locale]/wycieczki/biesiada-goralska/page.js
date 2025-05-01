import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
import TripProgram from "@/app/UI/TripProgram";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.biesiada-goralska",
  });

  const path = routing.pathnames["/wycieczki/biesiada-goralska"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Biesiada() {
  const t = useTranslations("offer.tripslist.biesiada");
  const customItems = [t("list.1")];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), , "170 PLN"],
    [t("table.2"), , "140 PLN"],
    [t("table.3"), , "0 PLN"],
  ];

  const tripItems = [
    "17:00 - " + t("tripprogram.1"),
    "18:00 - " + t("tripprogram.2"),
    "19:00 - " + t("tripprogram.3"),
    "21:30 - " + t("tripprogram.4"),
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/biesiada-goralska/baner.png"
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
          <BackgroundList title={t("header3")} items={customItems} />
        </div>
        <div className="mt-16">
          <Table headers={tableHeaders} rows={tableRows} />
        </div>
        <div className="mt-16">
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/biesiada-goralska/1.png", alt: t("alt.2") },
            { url: "/wycieczki/biesiada-goralska/2.png", alt: t("alt.3") },
            { url: "/wycieczki/biesiada-goralska/3.png", alt: t("alt.4") },
            { url: "/wycieczki/biesiada-goralska/4.png", alt: t("alt.5") },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
