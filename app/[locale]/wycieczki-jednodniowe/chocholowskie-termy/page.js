import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
import TripTime from "@/app/UI/TripTime";
import TripProgram from "@/app/UI/TripProgram";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import Button from "@/app/UI/Buttons/Button";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.termy" });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/chocholowskie-termy"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Termy() {
  const t = useTranslations("offer.tripslist.termy");
  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
    t("list.7"),
    t("list.8"),
    t("list.9"),
    t("list.10"),
  ];

  const tripItems = [
    t("tripprogram.1"),
    t("tripprogram.2"),
    t("tripprogram.3"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), , "130 PLN"],
    [t("table.2"), , "120 PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/termy/termy.webp"
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
        <p className="mt-8 text-center md:w-3/4 mx-auto xl:text-xl">
          {t.rich("text2", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className="flex gap-4 justify-center mt-10">
          <Button text={t("button")} link="/transport/mapa-przystankow" />
          <Button text={t("button2")} link="/kontakt" />
        </div>
        <div className="flex flex-col justify-center mt-16">
          <BackgroundList title={t("header3")} items={customItems} />
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
        </div>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
          <TripTime />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/termy/1.webp", alt: t("alt.2") },
            { url: "/wycieczki/termy/2.webp", alt: t("alt.3") },
            { url: "/wycieczki/termy/3.webp", alt: t("alt.4") },
            { url: "/wycieczki/termy/4.webp", alt: t("alt.5") },
            { url: "/wycieczki/termy/5.webp", alt: t("alt.6") },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
