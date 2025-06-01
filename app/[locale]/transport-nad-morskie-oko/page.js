import Header from "@/app/UI/Header";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
import Button from "@/app/UI/Buttons/Button";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Table from "@/app/UI/Table";
import CtaLink from "@/app/UI/CtaLink";
import TripTime from "@/app/UI/TripTime";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.transport-nad-morskie-oko",
  });

  const path = routing.pathnames["/transport-nad-morskie-oko"][locale]; // Pobieramy ścieżkę dla języka
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

export default function TransportNadMorskie() {
  const t = useTranslations("transport-nad-morskie-oko");

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), , "20 PLN"],
    [t("table.2"), , "25 PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="md:w-2/5 mx-auto">
        <Image
          src={"/transport/bus.webp"}
          width={500}
          height={500}
          layout="responsive"
          alt={t("alt.1")}
        />
      </div>
      <section>
        <p className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-12  md:w-3/4 mx-auto  xl:text-xl text-center">
          {t("text")}
        </p>
        <div className="flex justify-center mb-10 md:mb-20">
          <Button link="/mapa-przystankow" text={t("button")} />
        </div>
        <div className="my-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>

        {/* CO DALEJ? */}
        <div className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-10 md:pb-24 md:w-3/4 mx-auto  xl:text-xl text-center">
          <h2 className="text-2xl font-bold xl:text-3xl 2xl:text-4xl leading-snug mt-8 md:mt-16">
            {t("header2")}
          </h2>
          <p className="mt-10">{t("text2")}</p>
          <TripTime showCallInfo="true" />
        </div>
      </section>
      <Gallery
        images={[
          { url: "/morskie-oko/morskie-oko.webp", alt: t("alt.1") },
          { url: "/morskie-oko/1.webp", alt: t("alt.2") },
          { url: "/morskie-oko/2.webp", alt: t("alt.3") },
          { url: "/morskie-oko/3.webp", alt: t("alt.4") },
        ]}
      />
      <CtaLink />
    </>
  );
}
