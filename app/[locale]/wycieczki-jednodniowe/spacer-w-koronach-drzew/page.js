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
import WhySpacer from "@/app/[locale]/wycieczki-jednodniowe/spacer-w-koronach-drzew/Why";
import SzcybrskieJezioroSection from "@/app/[locale]/wycieczki-jednodniowe/spacer-w-koronach-drzew/Szczyrbskie";
import SciezkaWBachledce from "@/app/[locale]/wycieczki-jednodniowe/spacer-w-koronach-drzew/SciezkaWBachledce";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.spacer-w-koronach-drzew",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/spacer-w-koronach-drzew"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Spacer() {
  const t = useTranslations("offer.tripslist.spacer-w-koronach-drzew");

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "10:00 - " + t("tripprogram.2"),
    "10:30 - " + t("tripprogram.3"),
    "12:30 - " + t("tripprogram.4"),
    "13:00 - " + t("tripprogram.5"),
    "15:30 - " + t("tripprogram.6"),
    "16:00 - " + t("tripprogram.7"),
    "16:30 - " + t("tripprogram.8"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "80 PLN*"],
    [t("table.2"), "75 PLN*"],
    ["", t("table.additional")],
    [t("table.1"), "30€"],
    [t("table.2"), "24€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/spacer-w-koronach-drzew/zima/korony.webp"
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
        <SciezkaWBachledce t={t} />
        <SzcybrskieJezioroSection t={t} />
        <Slovakia />
        <WhySpacer t={t} />
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>
        <div id="szczegoly-wycieczki" className="mt-16">
          <BackgroundList
            title={t("header3")}
            items={Array.from({ length: 3 }, (_, i) =>
              t.rich(`list.${i + 1}`, {
                strong: (chunks) => <strong>{chunks}</strong>,
              })
            )}
          />
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
          <TripTime />
          <ButtonComponent />
        </div>
      </section>

      <Gallery
        images={[
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/1.webp",
            alt: t("alt.2"),
          },
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/2.webp",
            alt: t("alt.3"),
          },
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/3.webp",
            alt: t("alt.4"),
          },
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/4.webp",
            alt: t("alt.5"),
          },
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/5.webp",
            alt: t("alt.6"),
          },
          {
            url: "/wycieczki/spacer-w-koronach-drzew/zima/6.webp",
            alt: t("alt.7"),
          },
        ]}
      />
      <CtaLink />
    </>
  );
}
