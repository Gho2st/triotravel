import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
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
    namespace: "metadata.koscielisko",
  });

  const path = routing.pathnames["/kuligi/goralski-koscielisko"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Koscielisko() {
  const t = useTranslations("kuligi.koscielisko");
  const a = useTranslations("kuligi.alt");
  const tableHeaders = [t("table.header1"), t("table.header2")];

  const tableRows = [
    [t("table.3"), "150 PLN*"],
    [t("table.4"), "130 PLN*"],
  ];

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
  ];

  return (
    <>
      <Header text={t("header")} />

      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/JyJcfnneIWc?si=R4eeq28-hOZO50aZ"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>

      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />

        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto  xl:text-xl">
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            items={customItems}
            className="shadow-lg"
          />
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl xl:text-2xl mb-10 md:w-3/4 mx-auto font-semibold">
            {t("info")}
          </h3>

          <h4 className="mb-10 text-lg font-medium">
            {t("header4")} 2024/2025
          </h4>

          <Table headers={tableHeaders} rows={tableRows} />

          <div className="mt-10">
            <span className="text-lg font-bold">{t("table.header3")}</span>
            <ul className="xl:text-lg flex flex-col gap-2 mt-10 text-left md:w-3/4 mx-auto">
              <li>{t("table.list.1")}</li>
              <li> {t("table.list.2")}</li>
              <li> {t("table.list.3")}</li>
              <li>{t("table.list.4")}</li>
              <li>{t("table.list.5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <Gallery
        images={[
          { url: "/kuligi/photos/1.webp", alt: a("1") },
          { url: "/kuligi/photos/2.webp", alt: a("2") },
          { url: "/kuligi/photos/3.webp", alt: a("3") },
          { url: "/kuligi/photos/4.webp", alt: a("4") },
          { url: "/kuligi/photos/5.webp", alt: a("5") },
        ]}
      />
      <CtaLink />
    </>
  );
}
