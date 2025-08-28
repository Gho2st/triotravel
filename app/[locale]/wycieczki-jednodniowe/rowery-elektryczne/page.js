import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Gallery from "@/app/UI/Slider";
import BackgroundList from "@/app/UI/BackgroundList";
import { useTranslations } from "next-intl";
import TripTime from "@/app/UI/TripTime";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";
import InstaLink from "@/app/[locale]/wycieczki-jednodniowe/rowery-elektryczne/InstaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.rowery-elektryczne",
  });

  const path =
    routing.pathnames["/wycieczki-jednodniowe/rowery-elektryczne"][locale]; // Pobieramy ścieżkę dla języka
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

export default function RoweryElektryczne() {
  const t = useTranslations("offer.tripslist.rowery-elektryczne");

  return (
    <>
      <Header text={t("header")} />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/rowery-elektryczne/1.webp",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/rowery-elektryczne/2.webp",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/rowery-elektryczne/3.webp",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/rowery-elektryczne/4.webp",
              alt: t("alt.5"),
            },
            {
              url: "/wycieczki/rowery-elektryczne/rowery-elektryczne.webp",
              alt: t("alt.1"),
            },
          ]}
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t("text")}
        </p>
        <InstaLink t={t} />
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header4")}
            items={Array.from({ length: 6 }, (_, i) =>
              t.rich(`list.${i + 1}`, {
                strong: (chunks) => <strong>{chunks}</strong>,
              })
            )}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          {t("info")}
        </p>
        <CtaLink />
        <div className="mt-16">
          <TripTime showCallInfo={true} />
        </div>
      </section>
    </>
  );
}
