import Header from "@/app/UI/Header";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Gallery from "@/app/UI/Slider";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import KasprowyComponent from "./Kasprowy";
import CtaLink from "@/app/UI/CtaLink";
import BackgroundList from "@/app/UI/BackgroundList";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.kasprowy" });

  const path = routing.pathnames["/bilety-na-kasprowy-wierch"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Kasprowy() {
  const t = useTranslations("offer.tripslist.kasprowy");

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
      <div className="relative h-136 w-full">
        <Image
          className="object-cover"
          src="/others/kasprowy.webp"
          fill
          alt="kolejka jadąca na Kasprowy Wierch"
        />
      </div>
      <div className="flex justify-center mt-16">
        <BackgroundList title={t("list.header")} items={customItems} />
      </div>
      {/* tabelka i przyciski  */}
      <KasprowyComponent />
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/kasprowy-wierch/1.webp", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/2.webp", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/3.webp", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/4.webp", alt: "First image" },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
