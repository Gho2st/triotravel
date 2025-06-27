import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Card from "@/app/UI/Card";
import Services from "@/app/UI/Homepage/Services";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import WhyTrips from "@/app/UI/Trips/WhyTrips";
import HowItWorks from "@/app/UI/Trips/HowItWorks";
import FAQSection from "@/app/UI/Trips/Faq";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.trips" });

  const path = routing.pathnames["/wycieczki-jednodniowe"][locale];
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

export default function Atrakcje() {
  const t = useTranslations("offer");

  const articles = [
    {
      title: t("trips.1"),
      p: t("trips.1p"),
      image: "/wycieczki/splyw-dunajcem-zakopane/splyw.webp",
      link: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
      category: "poland",
      popular: true,
      popularTitle: t("trips.1h"),
      popularDescription: t("trips.1popular"),
    },
    {
      title: t("trips.2"),
      p: t("trips.2p"),
      image: "/wycieczki/termy/termy.webp",
      link: "/wycieczki-jednodniowe/chocholowskie-termy",
      category: "poland",
    },
    {
      title: t("trips.3"),
      p: t("trips.3p"),
      image: "/wycieczki/spacer-w-koronach-drzew/korony.webp",
      link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
      category: "foreign",
      popular: true,
      popularTitle: t("trips.3h"),
      popularDescription: t("trips.3popular"),
    },
    {
      title: t("trips.4"),
      p: t("trips.4p"),
      image: "/wycieczki/jaskinia-bielanska/jaskinia.webp",
      link: "/wycieczki-jednodniowe/jaskinia-bielanska",
      category: "foreign",
    },
    {
      title: t("trips.5"),
      p: t("trips.5p"),
      image: "/wycieczki/splyw-dunajcem-slowacja/splyw.webp",
      link: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
      category: "foreign",
      popular: true,
      popularTitle: t("trips.5h"),
      popularDescription: t("trips.5popular"),
    },
    {
      title: t("trips.6"),
      p: t("trips.6p"),
      image: "/wycieczki/tajemnice-wieliczki/wieliczka.webp",
      link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
      category: "poland",
    },
    {
      title: t("trips.7"),
      p: t("trips.7p"),
      image: "/wycieczki/kasprowy-wierch/4.webp",
      link: "/bilety-na-kasprowy-wierch",
      category: "poland",
    },
    {
      title: t("trips.8"),
      p: t("trips.8p"),
      image: "/wycieczki/slowacki-raj/slowacki-raj.webp",
      link: "/wycieczki-jednodniowe/slowacki-raj",
      category: "foreign",
    },
    {
      title: t("trips.9"),
      p: t("trips.9p"),
      image: "/wycieczki/wieden/wieden.webp",
      link: "/wycieczki-jednodniowe/wieden",
      category: "foreign",
    },
    {
      title: t("trips.10"),
      p: t("trips.10p"),
      image: "/wycieczki/budapeszt/budapeszt.webp",
      link: "/wycieczki-jednodniowe/budapeszt",
      category: "foreign",
    },
    {
      title: t("trips.11"),
      p: t("trips.11p"),
      image: "/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp",
      link: "/wycieczki-jednodniowe/krajobrazy-slowacji",
      category: "foreign",
    },
    {
      title: t("trips.14"),
      p: t("trips.14p"),
      image: "/wycieczki/dookola-tatr/tatry.webp",
      link: "/wycieczki-jednodniowe/dookola-tatr",
      category: "active",
    },
    {
      title: t("trips.15"),
      p: t("trips.15p"),
      image: "/wycieczki/rafting-po-dunajcu/rafting.webp",
      link: "/wycieczki-jednodniowe/rafting-po-dunajcu",
      category: "active",
    },
    {
      title: t("trips.16"),
      p: t("trips.16p"),
      image: "/wycieczki/biesiada-goralska/5.webp",
      link: "/wycieczki-jednodniowe/zabawa-goralska",
      category: "poland",
      popular: true,
      popularTitle: t("trips.16h"),
      popularDescription: t("trips.16popular"),
    },
    {
      title: t("trips.18"),
      p: t("trips.18p"),
      image: "/wycieczki/szlak-papieski/szlak-papieski.webp",
      link: "/wycieczki-jednodniowe/szlak-papieski",
      category: "poland",
    },
    {
      title: t("trips.19"),
      p: t("trips.19p"),
      image: "/morskie-oko/morskie-oko.webp",
      link: "/transport-nad-morskie-oko",
      category: "poland",
    },
    {
      title: t("trips.20"),
      p: t("trips.20p"),
      image: "/wycieczki/quady/quady.webp",
      link: "/wycieczki-jednodniowe/quady",
      category: "active",
    },
  ];

  const categories = [
    { id: "popular", title: t("trips.popularHeader") },
    { id: "poland", title: t("trips.polandHeader") },
    { id: "foreign", title: t("trips.foreignHeader") },
    { id: "active", title: t("trips.activeHeader") },
  ];

  return (
    <>
      <Header text={t("trips.header")} />
      <section className="px-6 md:px-20 2xl:px-32 py-16 md:py-20 2xl:py-24">
        <HowItWorks />
        <p className="mt-10 2xl:mt-16 mb-16 text-center text-xl">
          {t.rich("text2", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        {categories.map((cat) => (
          <div key={cat.id} className="mb-24">
            <LineHeader text={cat.title} />
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-10 justify-center items-center">
              {articles
                .filter((a) =>
                  cat.id === "popular" ? a.popular : a.category === cat.id
                )
                .map((article, index) => (
                  <Card
                    key={index}
                    article={{
                      ...article,
                      title:
                        cat.id === "popular" && article.popularTitle
                          ? article.popularTitle
                          : article.title,
                      p:
                        cat.id === "popular" && article.popularDescription
                          ? article.popularDescription
                          : article.p,
                    }}
                    index={index}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
      <WhyTrips />
      <FAQSection />
    </>
  );
}
