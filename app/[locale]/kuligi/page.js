import Card from "@/app/UI/Card";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import SleighRides from "@/app/UI/Sleighs/WhySleighRides";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.kuligi" });

  const path = routing.pathnames["/kuligi"][locale]; // Pobieramy ścieżkę dla języka
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
export default function Kuligi() {
  const t = useTranslations("kuligi");
  const articles = [
    {
      title: t("cards.1.header"),
      image: "/kuligi/koscielisko.webp",
      link: "/kuligi/goralski-koscielisko",
      p: t("cards.1.text"),
    },
    {
      title: t("cards.2.header"),
      image: "/kuligi/dolina.webp",
      link: "/kuligi/dolina-chocholowska",
      p: t("cards.2.text"),
    },
    // {
    //   title: t("cards.4.header"),
    //   image: "/walentynki.svg",
    //   link: "/kuligi/walentynkowy",
    //   p: t("cards.4.text"),
    // },
    // {
    //   title: t("cards.3.header"),
    //   image: "/kuligi/sylwestrowy.webp",
    //   link: "/kuligi/wieczor-sylwestrowy",
    //   p: t("cards.3.text"),
    // },
  ];
  return (
    <>
      <Header text={t("header")} />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <div className="md:w-3/4 mx-auto text-center mt-16">
          <p className="xl:text-xl">
            <span className="font-bold">TrioTravel</span> {t("text")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10 xl:mt-20 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} article={article} className="h-full" />
          ))}
        </div>
      </section>
      <SleighRides />
    </>
  );
}
