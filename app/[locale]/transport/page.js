import Header from "@/app/UI/Header";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
import Button from "@/app/UI/Buttons/Button";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import BusinessGroupsSection from "@/app/UI/transport/BusinessGroupSection";
import WhyTransport from "@/app/UI/transport/WhyTransport";
import TransportOffer from "@/app/UI/transport/TransportOffer";
import TransportCta from "@/app/UI/transport/TransportCta";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.transport" });

  const path = routing.pathnames["/transport"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Transport() {
  const t = useTranslations("transport");
  return (
    <>
      <Header text={t("header")} />
      <div className="md:w-2/5 mx-auto">
        <Image
          src={"/transport/bus.webp"}
          width={500}
          height={500}
          layout="responsive"
          alt={t("alt.1")}
        />
      </div>
      <section>
        <p className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-12  md:w-3/4 mx-auto  xl:text-xl text-center">
          {t("text")}
        </p>
        <div className="flex gap-3 md:gap-6 justify-center mb-10 md:mb-20">
          <Button link="/transport/mapa-przystankow" text={t("button")} />
          <Button link="/transport/nad-morskie-oko" text={t("button2")} />
        </div>
      </section>
      <WhyTransport t={t} />
      <TransportOffer t={t} />
      <BusinessGroupsSection t={t} />
      <Gallery
        images={[
          { url: "/transport/1.webp", alt: t("alt.2") },
          { url: "/transport/2.webp", alt: t("alt.3") },
          { url: "/transport/3.webp", alt: t("alt.4") },
          { url: "/transport/4.webp", alt: t("alt.5") },
        ]}
      />
      <TransportCta t={t} />
    </>
  );
}
