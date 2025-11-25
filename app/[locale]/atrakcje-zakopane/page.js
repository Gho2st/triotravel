import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/app/UI/Header";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.atrakcje-zakopane",
  });

  const path = routing.pathnames["/atrakcje-zakopane"][locale]; // Pobieramy ścieżkę dla języka
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

export default function Atrakcje() {
  const t = useTranslations("atrakcje-zakopane");

  return (
    <>
      <Header text={t("header")} />
      {/* HERO Z TŁEM – Z FIXED WYSOKOŚCIĄ */}
      <div className="relative min-h-screen md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
        {/* Tło z obrazkiem */}
        <Image
          src="/atrakcje.png"
          alt="Tatry i Zakopane – najpiękniejsze widoki"
          fill
          priority
          quality={95}
          className="object-cover object-center scale-110 
               md:group-hover:scale-105 transition-transform duration-[8000ms] ease-out"
        />

        {/* Gradient nakładka */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Treść na wierzchu */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight drop-shadow-2xl animate-fade-up">
              {t("hero.header")}
            </h2>

            <p className="mt-8 text-base md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
              {t("hero.text")}
            </p>

            <p className="mt-10 md:mt-12 text-base md:text-lg 2xl:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
              {t("hero.text2")}
            </p>
          </div>
        </div>
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16">
        {/* CO MOZNA */}
        <div className="mt-16 lg:mt-24 px-4">
          <h3 className="text-center text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6">
            {t("what.header")}
          </h3>

          <p className="text-lg text-center mb-24">{t("what.text")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Każdy punkt jako karta z ikoną i delikatnym hoverem */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                🏔️
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.1.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.1.text")}
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                🎻
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.2.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.2.text")}
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                🔥
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.3.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.3.text")}
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                ♨️
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.4.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.4.text")}
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl">
                🛷
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.5.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.5.text")}
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-2xl">
                👨‍👩‍👧‍👦
              </div>
              <p className="mt-6 text-lg font-medium text-gray-800 text-center">
                {t("what.cards.6.header")}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {t("what.cards.6.text")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 bg-gray-50 rounded-3xl px-6 py-16 lg:px-12 lg:py-20 mx-auto">
          {/* Nagłówek */}
          <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            {t("offer.header")}
          </h3>

          {/* 3 kafelki – bardzo czyste */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {/* Wycieczki */}
            <Link
              href="/wycieczki"
              className="group bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition">
                🏔️
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {t("offer.cards.1.header")}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {t("offer.cards.1.text")}
              </p>
              <span className="inline-block mt-5 text-blue-500 font-medium group-hover:text-blue-700">
                {t("offer.cards.1.link")} →
              </span>
            </Link>

            {/* Kuligi */}
            <Link
              href="/kuligi"
              className="group bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition">
                🛷
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {t("offer.cards.2.header")}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {t("offer.cards.2.text")}
              </p>
              <span className="inline-block mt-5 text-blue-600 font-medium group-hover:text-blue-700">
                {t("offer.cards.2.link")} →
              </span>
            </Link>

            {/* Transport */}
            <Link
              href="/transport"
              className="group bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition">
                🚐
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {t("offer.cards.3.header")}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {t("offer.cards.3.text")}
              </p>
              <span className="inline-block mt-5 text-blue-600 font-medium group-hover:text-blue-700">
                {t("offer.cards.3.link")} →
              </span>
            </Link>
          </div>

          {/* CTA na dole – bardzo delikatny i ciepły */}
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {t("cta.header")}
            </h4>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {t("cta.text")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+48881201205"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-medium px-8 py-4 rounded-full hover:bg-blue-600 transition text-lg shadow-md hover:shadow-lg"
              >
                ☎ {t("cta.buttons.1")}
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-medium px-8 py-4 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition text-lg"
              >
                ✉ {t("cta.buttons.2")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
