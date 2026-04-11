"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import Info from "../Info";
import { FaWhatsapp } from "react-icons/fa";

import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Sprawdzamy, czy jesteśmy na dole strony
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10; // -10 dla marginesu błędu

      // Pokazuj strzałkę, gdy przewijamy w górę lub jesteśmy na dole
      if ((currentScrollY < lastScrollY && currentScrollY > 50) || isAtBottom) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Czyszczenie listenera przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Info />

      <footer className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 bg-customBlue text-white overflow-hidden ">
        <div className="flex flex-col gap-16 xl:flex-row justify-between ">
          <div className="text-lg md:text-xl xl:w-96 text-center xl:text-right pr-0 xl:pr-10 xl:border-r-2 border-r-gray-200">
            <p className="text-2xl md:text-3xl mb-10 xl:mb-16">
              {t("hours.header")}
            </p>
            <div className="mb-6">
              <p> {t("hours.1")}:</p>
              <p className="font-light mt-2">9:00 - 17:00</p>
            </div>
            <div>
              <p> {t("hours.2")}:</p>
              <p className="font-light mt-2">10:00 - 16:00</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center  w-1/2 sm:w-1/3  xl:w-2/3 mx-auto">
              <Image
                alt="logo"
                src={"/logo/logo.webp"}
                width={330}
                height={330}
                layout="responsive"
              />
            </div>
            <div className="flex mt-10 text-2xl md:text-3xl xl:text-4xl justify-center gap-16">
              <Link
                href={"https://www.facebook.com/TrioTravel"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <FaFacebook className="" />
              </Link>
              <Link
                href={"https://www.instagram.com/triotravell/"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <FaInstagram className="" />
              </Link>
              <Link
                href={"https://wa.me/+48881201205"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <FaWhatsapp className="" />
              </Link>
              <Link
                href={"mailto:biuro@triotravel.eu"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <IoMail className="" />
              </Link>
            </div>
          </div>
          <div className="text-lg md:text-xl xl:w-96 text-center xl:text-left pl-0 xl:pl-10 xl:border-l-2 border-l-gray-200 ">
            <div className="text-2xl md:text-3xl mb-10 xl:mb-16">
              {t("contact.header")}
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center">
                <FaPhoneAlt className="text-2xl" />
                <Link className="underline" href={"tel:+48881201205"}>
                  +48 881 201 205{" "}
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center">
                <IoMail className="text-2xl" />
                <Link className="underline" href={"mailto:biuro@triotravel.eu"}>
                  biuro@triotravel.eu{" "}
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center break-words">
                <FaLocationDot className="text-2xl" />
                ul. Kościuszki 23A,<br></br> 34-500 Zakopane
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-24 text-center">
          <p className="text-lg">TrioTravel | {currentYear}</p>
        </div>
        {showArrow && (
          <span className="fixed bg-customBlue shadow-2xl rounded-lg p-1 text-4xl text-white bottom-6 left-6 xl:bottom-16 xl:left-10 z-10">
            <IoIosArrowUp onClick={scrollToTop} className="cursor-pointer" />
          </span>
        )}
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+48881201205"
          className="fixed bg-[#25D366] shadow-2xl rounded-full p-2 text-3xl xl:text-5xl text-white bottom-6 right-6 xl:bottom-16 xl:right-10 z-10"
        >
          <FaWhatsapp className="cursor-pointer" />
        </a>
      </footer>
    </>
  );
}
