"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "../LocaleSwitcher";
import Button from "../Buttons/Button";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 95;
  const hideDelay = 5;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (scrollY > lastScrollY + hideDelay) {
        setIsVisible(false);
      } else if (scrollY < lastScrollY - hideDelay) {
        setIsVisible(true);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="relative ">
      {/* Top Bar */}
      <div
        className={`fixed shadow-xl top-0 left-0 right-0 z-50 mx-auto flex w-full bg-white items-center justify-between px-6 xl:py-0 2xl:px-8  transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Lewa strona: Logo  */}
        <div className="flex items-center">
          <Link href="/" className="relative h-24 w-24">
            <Image
              src="/logo/logo2.webp"
              fill
              alt="Logo Trio Travel"
              className="object-contain"
              sizes="(max-width: 768px) 100px, 150px"
              priority
            />
          </Link>
        </div>

        {/* Prawa strona: Nawigacja, LocaleSwitcher, Hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="font-medium hidden items-center text-lg  xl:flex xl:gap-2 2xl:gap-6 ">
            <li className="">
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/wycieczki-jednodniowe"}
              >
                {t("links.link1")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/kuligi"}
              >
                {t("links.link2")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/bilety-na-kasprowy-wierch"}
              >
                {t("links.link3")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/transport"}
              >
                {t("links.link4")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/partnerzy"}
              >
                {t("links.link5")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/blog"}
              >
                {t("links.link8")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/oferta"}
              >
                {t("links.link7")}
              </Link>
            </li>
            <li>
              <Link
                className="px-3 hover:text-red-500 duration-300"
                href={"/kontakt"}
              >
                {t("links.link6")}
              </Link>
            </li>
            <li>
              <Button text={t("button")} link={"/rezerwacje"} />
            </li>
          </ul>
          <LocaleSwitcher />

          {/* Hamburger Button (Mobile) */}
          <div
            className={`flex items-center gap-5 xl:hidden ${
              isOpen ? "open" : ""
            }`}
          >
            <button
              className="hamburger"
              onClick={handleMenuToggle}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isOpen}
            >
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-20 bg-gradient-to-b from-white to-gray-50 text-black overflow-y-auto mt-24 shadow-xl"
          >
            <div className="container mx-auto">
              <ul className="pt-10 px-6 pb-8 flex flex-col text-base font-semibold min-h-screen gap-2">
                <li>
                  <Link
                    href="/wycieczki-jednodniowe"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link1")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kuligi"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link2")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bilety-na-kasprowy-wierch"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link3")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transport"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link4")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerzy"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link5")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link8")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/oferta"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link7")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="block border-b border-gray-200 py-4 px-4 rounded-lg hover:bg-customBlue hover:text-red-500 transition-colors duration-200"
                    onClick={handleMenuToggle}
                  >
                    {t("links.link6")}
                  </Link>
                </li>
                <li className="mt-6">
                  <Button
                    onClick={handleMenuToggle}
                    text={t("button")}
                    link={"/rezerwacje"}
                  />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
