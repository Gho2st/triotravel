"use client";
import { usePathname } from "next/navigation";
import Nav from "../UI/Navigation/Nav";
import Footer from "../UI/Navigation/Footer";

export default function ClientBody({ children, fontClassName }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname.match(/^\/[a-z]{2}$/); // np. /en, /pl

  return (
    <div className={`${fontClassName} ${!isHomePage ? "pt-24" : ""}`}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
