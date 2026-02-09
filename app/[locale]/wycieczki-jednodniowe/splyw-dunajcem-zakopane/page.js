import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import FunFact from "@/app/UI/FunFact";
import FAQSection from "@/app/UI/Trips/Faq";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import TripTime from "@/app/UI/TripTime";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.splyw-dunajcem-zakopane",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/splyw-dunajcem-zakopane"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Splywzakopane() {
  const t = useTranslations("offer.tripslist.splyw-dunajcem-zakopane");
  const f = useTranslations("offer.tripslist.splyw-dunajcem-zakopane.faq");

  const faqData = {
    header: f("header"),
    text: f.raw("text"),
    list: f.raw("list"),
  };

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "10:00 - " + t("tripprogram.2"),
    "12:30 - " + t("tripprogram.3"),
    "13:00 - " + t("tripprogram.4"),
    "15:00 - " + t("tripprogram.5"),
    "15:30 - " + t("tripprogram.6"),
    "16:00 - " + t("tripprogram.7"),
    "17:00 - " + t("tripprogram.8"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "190 PLN*"],
    [t("table.2"), "170 PLN*"],
    [t("table.4"), "70 PLN*"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/splyw-dunajcem-zakopane/splyw.webp"
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
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            items={Array.from({ length: 6 }, (_, i) =>
              t.rich(`list.${i + 1}`, {
                strong: (chunks) => <strong>{chunks}</strong>,
              }),
            )}
          />
        </div>
        <p className="text-xl xl:text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          {t("info")}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
          <TripTime />
          <FAQSection faq={faqData} />
        </div>
      </section>
      <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <FunFact />
      </div>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/3.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/4.webp",
              alt: t("alt.5"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/5.webp",
              alt: t("alt.6"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/6.webp",
              alt: t("alt.7"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/7.webp",
              alt: t("alt.8"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/8.webp",
              alt: t("alt.9"),
            },
            {
              url: "/wycieczki/splyw-dunajcem-zakopane/9.webp",
              alt: t("alt.10"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
