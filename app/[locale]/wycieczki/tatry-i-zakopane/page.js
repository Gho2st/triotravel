import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";

import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CtaLink from "@/app/UI/CtaLink";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.tatry-i-zakopane",
  });

  const path = routing.pathnames["/wycieczki/tatry-i-zakopane"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Zakopane() {
  const t = useTranslations("offer.tripslist.tatry-i-zakopane");

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
  ];

  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/tatry-i-zakopane/tatry-i-zakopane.png"
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

        <div className="mt-16">
          <BackgroundList title={t("header3")} items={customItems} />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/tatry-i-zakopane/1.png",
              alt: t("alt.2"),
            },
            {
              url: "/wycieczki/tatry-i-zakopane/2.png",
              alt: t("alt.3"),
            },
            {
              url: "/wycieczki/tatry-i-zakopane/3.png",
              alt: t("alt.4"),
            },
            {
              url: "/wycieczki/tatry-i-zakopane/4.png",
              alt: t("alt.5"),
            },
          ]}
        />
      </div>
      <CtaLink />
    </>
  );
}
