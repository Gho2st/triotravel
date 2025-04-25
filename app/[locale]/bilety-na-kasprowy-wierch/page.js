import Header from "@/app/UI/Header";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Gallery from "@/app/UI/Slider";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import KasprowyComponent from "./Kasprowy";

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

  return (
    <>
      <Header text={t("header")} />
      <div className="relative h-136 w-full">
        <Image
          className="object-cover"
          src="/others/kasprowy.png"
          fill
          alt="kolejka jadąca na Kasprowy Wierch"
        />
      </div>
      {/* tabelka i przyciski  */}
      <KasprowyComponent />
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/kasprowy-wierch/1.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/2.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/3.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/4.png", alt: "First image" },
          ]}
        />
      </div>
    </>
  );
}
