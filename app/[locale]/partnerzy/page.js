import Header from "@/app/UI/Header";
import PartnerItem from "@/app/UI/PartnerItem";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.partners",
  });

  const path = routing.pathnames["/partnerzy"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Partners() {
  const t = useTranslations("partners");

  // Tablica linków dla partnerów
  const partnerLinks = {
    skocznia: "http://www.domkipodskocznia.pl/",
    wierszyki: "https://wierszykishelters.pl/",
    oldstreet: "https://apartamentoldstreet.pl/",
    gorski: "http://bsn-zakopane.pl/apartament/",
    elzbiecina: "https://www.willa-elzbiecina.pl/",
    rentplanet: "https://www.rentplanet.pl/",
    nosal: "https://www.hotelnosal.pl/",
    klimatyczne: "http://www.domkiklimatyczne.pl/pl/",
    patryk: "http://patryk-zakopane.pl/",
  };
  return (
    <>
      <Header text={t("title")} />
      <section className="px-6 pt-0 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <div className="mt-16 flex flex-col gap-16 xl:gap-32">
          {[
            "skocznia",
            "wierszyki",
            "oldstreet",
            "gorski",
            "elzbiecina",
            "rentplanet",
            "nosal",
            "klimatyczne",
            "patryk",
          ].map((partner, index) => (
            <PartnerItem
              key={partner} // zostaje dla reacta
              partner={partner}
              f={t}
              t={t.raw(partner)}
              index={index}
              link={partnerLinks[partner]} // Przekazujemy link
            />
          ))}
        </div>
      </section>
    </>
  );
}
