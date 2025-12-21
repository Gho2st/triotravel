import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
import BackgroundList from "@/app/UI/BackgroundList";
import { useTranslations } from "next-intl";
import CheckList from "@/app/UI/CheckList";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import FAQSection from "@/app/UI/Trips/Faq";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.dolina-chocholowska",
  });

  const path = routing.pathnames["/kuligi/dolina-chocholowska"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Dolina() {
  const t = useTranslations("kuligi.dolina");
  const a = useTranslations("kuligi.alt");
  const f = useTranslations("kuligi.dolina.faq");

  const faqData = {
    header: f("header"),
    text: f.raw("text"),
    list: f.raw("list"),
  };

  // Przykładowe dane dla tabeli
  const tableHeaders = [
    t("table.header1"),
    t("table.header2"),
    t("table.header3"),
  ];
  const tableRows = [
    [t("table.3"), "220 PLN", "230 PLN"],
    [t("table.4"), "200 PLN", "210 PLN"],
  ];

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
  ];

  const checkItems = [
    t("table.list.1"),
    t("table.list.2"),
    t("table.list.3"),
    t("table.list.4"),
    t("table.list.5"),
    t("table.list.6"),
    t("table.list.7"),
    t("table.list.8"),
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16">
        <div className="relative w-full aspect-[16/9]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/EadvVWXUk1I?si=S_Q_c6BIrSuW22K&rel=0"
            allowFullScreen
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <section className=" px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        {/* more text */}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            items={customItems}
            className="shadow-lg"
          />
        </div>
        {/* GODZINY I CENNIK */}
        <div className="mt-20 text-center">
          <h3 className="text-xl xl:text-2xl md:w-3/4 mx-auto  mb-10 font-semibold">
            {t("info")}
          </h3>
          <h4 className=" mb-10 text-lg font-medium">{t("header4")}</h4>
          <Table headers={tableHeaders} rows={tableRows} />
          <CheckList title={t("table.header4")} items={checkItems} />
          <div className="mt-12">
            <FAQSection faq={faqData} />
          </div>
        </div>
      </section>
      <Gallery
        images={[
          { url: "/kuligi/dolina-chocholowska/1.webp", alt: a("1") },
          { url: "/kuligi/dolina-chocholowska/2.webp", alt: a("2") },
          { url: "/kuligi/dolina-chocholowska/3.webp", alt: a("3") },
          { url: "/kuligi/dolina-chocholowska/4.webp", alt: a("4") },
          { url: "/kuligi/dolina-chocholowska/5.webp", alt: a("5") },
          { url: "/kuligi/dolina-chocholowska/6.webp", alt: a("5") },
        ]}
      />
      <CtaLink />
    </>
  );
}
