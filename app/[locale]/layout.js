import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import ClientBody from "../UI/ClientBody";
import CookieConsent from "@/app/UI/CookieConsent";
import SnowEffect from "../UI/SnowEffect";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  openGraph: {
    type: "website",
    url: "https://triotravel.pl/",
    title: "Biuro Podróży Zakopane - TrioTravel",
    description:
      "Wycieczki jednodniowe z Zakopanego do Słowacji i nie tylko! Spływ Dunajcem, Kasprowy, kuligi, zamki. Odkrywaj Tatry z Trio Travel - rezerwuj online.",
    images: "https://triotravel.pl/opengraph-image.png",
  },
};

export default async function LocaleLayout({ children, params }) {
  const locale = (await params).locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientBody fontClassName={font.className}>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* <SnowEffect /> */}
            {children}
            <CookieConsent />
            <GoogleTagManager gtmId="GTM-M8ZVL5X6" />
          </ClientBody>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
