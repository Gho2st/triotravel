"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Info from "../Info";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10;

      if ((currentScrollY < lastScrollY && currentScrollY > 50) || isAtBottom) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Info />

      <footer
        className="
          relative
          px-6 md:px-12 xl:px-32 2xl:px-44 
          py-12 sm:py-14 lg:py-20 
          bg-customBlue text-white 
          overflow-hidden
        "
      >
        {/* Główna sekcja */}
        <div
          className="
            grid grid-cols-1 xl:grid-cols-3 
            gap-10 xl:gap-12
            max-w-7xl mx-auto
          "
        >
          {/* === GODZINY === */}
          <div
            className="
              text-center xl:text-right 
              xl:pr-10 xl:border-r 
              border-white/20
              order-2 xl:order-1
            "
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-5 sm:mb-6 lg:mb-8">
              {t("hours.header")}
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-medium opacity-90">{t("hours.1")}</p>
                <p className="font-light opacity-75 mt-0.5">9:00 - 17:00</p>
              </div>
              <div>
                <p className="font-medium opacity-90">{t("hours.2")}</p>
                <p className="font-light opacity-75 mt-0.5">10:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* === LOGO + SOCIAL === */}
          <div className="order-1 xl:order-2 flex flex-col items-center">
            <div className="w-32 sm:w-40 lg:w-48 xl:w-56">
              <Image
                alt="Trio Travel logo"
                src="/logo/logo.webp"
                width={330}
                height={330}
                className="w-full h-auto"
              />
            </div>

            <div className="flex gap-5 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl">
              <Link
                href="https://www.facebook.com/TrioTravel"
                aria-label="Facebook"
                className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/triotravell/"
                aria-label="Instagram"
                className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://wa.me/+48881201205"
                aria-label="WhatsApp"
                className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href="mailto:biuro@triotravel.eu"
                aria-label="Email"
                className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              >
                <IoMail />
              </Link>
            </div>
          </div>

          {/* === KONTAKT === */}
          <div
            className="
              text-center xl:text-left 
              xl:pl-10 xl:border-l 
              border-white/20
              order-3
            "
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-5 sm:mb-6 lg:mb-8">
              {t("contact.header")}
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex justify-center xl:justify-start gap-3 items-center">
                <FaPhoneAlt className="text-base flex-shrink-0 opacity-80" />
                <Link
                  href="tel:+48881201205"
                  className="hover:underline transition-colors"
                >
                  +48 881 201 205
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-3 items-center">
                <IoMail className="text-base flex-shrink-0 opacity-80" />
                <Link
                  href="mailto:biuro@triotravel.eu"
                  className="hover:underline transition-colors break-all"
                >
                  biuro@triotravel.eu
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-3 items-start">
                <FaLocationDot className="text-base flex-shrink-0 opacity-80 mt-1" />
                <span className="leading-relaxed">
                  ul. Kościuszki 23A,
                  <br />
                  34-500 Zakopane
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linia copyright */}
        <div
          className="
            mt-12 sm:mt-16 pt-6 sm:pt-8
            border-t border-white/10
            text-center
          "
        >
          <p className="text-xs sm:text-sm opacity-75">
            TrioTravel © {currentYear}
          </p>
        </div>

        {/* Strzałka do góry */}
        {showArrow && (
          <button
            onClick={scrollToTop}
            aria-label="Przewiń do góry"
            className="
              fixed bottom-5 left-5 lg:bottom-10 lg:left-8 
              z-30
              bg-customBlue/95 backdrop-blur-sm
              shadow-lg hover:shadow-xl
              rounded-xl p-2.5 sm:p-3 
              text-2xl sm:text-3xl text-white 
              hover:scale-110 transition-all duration-300
            "
          >
            <IoIosArrowUp />
          </button>
        )}

        {/* WhatsApp floating */}
        <a
          href="https://wa.me/+48881201205"
          aria-label="Napisz na WhatsApp"
          className="
            fixed bottom-5 right-5 lg:bottom-10 lg:right-8
            z-30
            bg-[#25D366] hover:bg-[#1ea851]
            shadow-lg hover:shadow-xl
            rounded-full p-3 sm:p-3.5
            text-2xl sm:text-3xl lg:text-4xl text-white
            hover:scale-110 transition-all duration-300
          "
        >
          <FaWhatsapp />
        </a>
      </footer>
    </>
  );
}
