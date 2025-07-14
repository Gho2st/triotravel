import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import ClientBody from "../UI/ClientBody";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  // Open Graph
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
      <GoogleTagManager gtmId="GTM-M8ZVL5X6" />
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientBody fontClassName={font.className}>{children}</ClientBody>
        </NextIntlClientProvider>
        {/* Microsoft Clarity Script */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "se6dbhfcmd");
          `}
        </Script>
      </body>
    </html>
  );
}
