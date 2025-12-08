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
import StarySmokovec from "./StarySmokovec";
import Hrebieniok from "./Hrebieniok";
import FAQSection from "@/app/UI/Trips/Faq";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.swiatynia-lodowa-hrebieniok",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok"][
      locale
    ]; // Pobieramy ścieżkę dla języka
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
  const t = useTranslations("offer.tripslist.swiatynia-lodowa-hrebieniok");
  const f = useTranslations("offer.tripslist.swiatynia-lodowa-hrebieniok.faq");

  const faqData = {
    header: f("header"),
    text: f.raw("text"), // raw działa też po server-side
    list: f.raw("list"), // cały obiekt { "1": { header, text }, "2": ... }
  };

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "9:00 - " + t("tripprogram.2"),
    "10:00 - 12:30 - " + t("tripprogram.3"),
    "12:30 - 13:30 - " + t("tripprogram.4"),
    "15:00/15:30 - " + t("tripprogram.5"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "90 PLN*"],
    [t("table.2"), "80 PLN*"],
    ["", t("table.additional")],
    [t("table.1"), "16€"],
    [t("table.2"), "14€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[900px] ">
        <Image
          src="/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.webp"
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
        <StarySmokovec t={t} />
        <Hrebieniok t={t} />
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
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
          <ButtonComponent />

          <TripTime />
          <FAQSection faq={faqData} />
        </div>
      </section>

      <Gallery
        images={[
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/1.webp",
            alt: t("alt.2"),
          },
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/2.webp",
            alt: t("alt.3"),
          },
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/3.webp",
            alt: t("alt.4"),
          },
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/4.webp",
            alt: t("alt.5"),
          },
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/5.webp",
            alt: t("alt.6"),
          },
          {
            url: "/wycieczki/swiatynia-lodowa-hrebieniok/6.webp",
            alt: t("alt.7"),
          },
        ]}
      />
      <CtaLink />
    </>
  );
}
