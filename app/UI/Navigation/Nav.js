"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { IoIosArrowDown } from "react-icons/io";
import LocaleSwitcher from "../LocaleSwitcher";

export default function Nav() {
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
    <nav className="relative">
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
              src="/logo/logo2.png"
              fill
              alt="Logo Muszynova"
              className="object-contain"
              sizes="(max-width: 768px) 100px, 150px"
              priority
            />
          </Link>
        </div>

        {/* Prawa strona: Nawigacja, LocaleSwitcher, Hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden items-center font-light xl:flex xl:gap-6  ">
            <ul className="font-semibold">
              <li>
                <Link className="px-3" href={"/wycieczki"}>
                  Wycieczki
                </Link>
                <Link className="px-3" href={"/Informacje"}>
                  Informacje
                </Link>
              </li>
            </ul>
            <LocaleSwitcher />
          </div>

          {/* Hamburger Button (Mobile) */}
          <div
            className={`flex items-center gap-5 xl:hidden ${
              isOpen ? "open" : ""
            }`}
          >
            {/* <LocaleSwitcher /> */}
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
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white text-black overflow-y-auto mt-16"
          >
            <div className="pt-20 px-10 pb-6 flex flex-col text-sm font-medium min-h-screen">
              <Link
                href="/o-nas"
                className="border-b border-gray-300 py-3"
                onClick={handleMenuToggle}
              >
                test
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
