import Header from "@/app/UI/Header";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "metadata.polityka-cookies",
  });

  const path = routing.pathnames["/polityka-cookies"][locale]; // Pobieramy ścieżkę dla języka
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

export default function PolitykaCookies() {
  const t = useTranslations("polityka-cookies");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header text={t("header")} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">{t("text")}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t("which.header")}
          </h2>
          <ul className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>{t("which.list.1")}</li>
            <li>
              {t("which.list.header")}:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>{t("which.list.2")}</li>
                <li>{t("which.list.3")}</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t("additional.header")}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t("additional.text")}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t("how.header")}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4"> {t("how.text")}</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{t("how.list.1")}</li>
            <li>{t("how.list.2")}</li>
            <li>{t("how.list.3")}</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            {t("how.list.text")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t("howlong.header")}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t("howlong.text")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{t("howlong.list.1")}</li>
            <li>{t("howlong.list.2")}</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4"></h2>
          <p className="text-gray-700 leading-relaxed">
            <a
              href="mailto:biuro@triotravel.eu"
              className="text-blue-600 hover:underline"
            >
              biuro@triotravel.eu
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
