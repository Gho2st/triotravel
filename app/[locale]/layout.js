import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Footer from "../UI/Navigation/Footer";
import Nav from "../UI/Navigation/Nav";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default async function LocaleLayout({ children, params }) {
  // Upewnij się, że `params` jest obiektem, a nie Promise
  const locale = (await params).locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${font.className} pt-24`}>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
