import Header from "@/app/UI/Header";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.mapa-przystankow",
  });

  const path = routing.pathnames["/mapa-przystankow"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Map() {
  const t = useTranslations("pickup");
  return (
    <>
      <Header text={t("header")} />

      <section
        className="min-h-[100vh] "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("/mapa-przystankow/1.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white xl:text-xl lg:w-3/4 mx-auto px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
          <h2 className="text-3xl md:text-5xl mb-16  font-bold leading-snug">
            {t("header2")}
          </h2>
          <p>{t("text")}</p>
          <p className="mt-10">{t("text2")}</p>
        </div>
        <div className="flex flex-col lg:flex-row md:gap-20">
          <div className="sm:w-1/3 md:w-1/2">
            <Image
              src="/mapa-przystankow/2.webp"
              width={500}
              height={500}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="text-white mt-16 2xl:mt-24 px-6 pb-20">
            <h3 className="text-2xl xl:text-4xl font-bold"> {t("header3")}</h3>
            <ul className="mt-16 xl:text-xl flex flex-col gap-5">
              <li>{t("list.1")}</li>
              <li>{t("list.2")}</li>
              <li>{t("list.3")}</li>
            </ul>
            <p className="text-xl mt-16 font-bold md:w-2/3">{t("header3")}</p>
          </div>
        </div>
      </section>
      <div className="">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=10xF1NK7XYLSKAPftKi0IQ6fYeM3jtdVR"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </>
  );
}
