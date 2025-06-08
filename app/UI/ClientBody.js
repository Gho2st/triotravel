"use client";
import { usePathname } from "next/navigation";
import Nav from "../UI/Navigation/Nav";
import Footer from "../UI/Navigation/Footer";

export default function ClientBody({ children, fontClassName }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname.match(/^\/[a-z]{2}$/); // e.g., /en, /pl
  const isOfferPage =
    pathname === "/oferta" || pathname.match(/^\/[a-z]{2}\/oferta$/); // e.g., /pl/oferta

  return (
    <div
      className={`${fontClassName} ${
        !isHomePage && !isOfferPage ? "pt-24" : ""
      }`}
    >
      {!isOfferPage && <Nav />}
      <main>{children}</main>
      {!isOfferPage && <Footer />}
    </div>
  );
}
