import About from "../UI/Homepage/About";
import Cta from "../UI/Homepage/Cta";
import Hero from "../UI/Homepage/Hero";
import Offer from "../UI/Homepage/Offer";
import Why from "../UI/Homepage/Why";
import Services from "../UI/Homepage/Services";
import Reviews from "../UI/Reviews";
import { getTranslations } from "next-intl/server";
import FacebookPosts from "../UI/Homepage/FacebookPosts";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "metadata.homepage" });

  const defaultLocale = "pl"; // Ustaw domyślny język
  const canonicalUrl =
    locale === defaultLocale
      ? "https://triotravel.pl"
      : `https://triotravel.pl/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <FacebookPosts />
      <Why />
      <Services />
      <Reviews />
      <Cta />
    </>
  );
}
