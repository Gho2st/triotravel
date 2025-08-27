import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import ClientBody from "../UI/ClientBody";
import CookieBanner from "@/app/UI/CookieBanner";
import Analytics from "@/app/UI/Analytics";

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
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientBody fontClassName={font.className}>
            <CookieBanner />
            <Analytics />
            {children}
          </ClientBody>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
