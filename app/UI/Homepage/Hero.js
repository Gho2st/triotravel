"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroButton from "../Buttons/HeroButton";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const slides = useMemo(
    () => [
      {
        background: "/wycieczki/spacer-w-koronach-drzew/korony.webp",
        translationKey: "headers.header7", // "Spacer W Koronach Drzew"
        link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
      },
      {
        background: "/wycieczki/splyw-dunajcem-zakopane/4.webp",
        translationKey: "headers.header1", // "Spływ Dunajcem?"
        link: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
      },

      {
        background: "/baner/baner4.webp",
        translationKey: "headers.header2", // "Baseny Termalne?"
        link: "/wycieczki-jednodniowe/chocholowskie-termy",
      },

      {
        background: "/wycieczki/tajemnice-wieliczki/6.webp",
        translationKey: "headers.header8", // "wieliczka?"
        link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
      },
      {
        background: "/wycieczki/jaskinia-bielanska/jaskinia.webp",
        translationKey: "headers.header9", // "jaskinia bielanska"
        link: "/wycieczki-jednodniowe/jaskinia-bielanska",
      },
      {
        background: "/wycieczki/slowacki-raj/slowacki-raj.webp",
        translationKey: "headers.header10", // "jaskinia bielanska"
        link: "/wycieczki-jednodniowe/slowacki-raj",
      },
      {
        background: "/wycieczki/biesiada-goralska/baner.webp",
        translationKey: "headers.header5", // "Biesiada Goralska?"
        link: "/wycieczki-jednodniowe/biesiada-goralska",
      },
      {
        background: "/baner/baner6.webp",
        translationKey: "headers.header4", // "transport?"
        link: "/transport",
      },
      {
        background: "/morskie-oko/morskie-oko.webp",
        translationKey: "headers.header11", // "transport nad morskie oko?"
        link: "/transport-nad-morskie-oko",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  // Preload obrazów, aby uniknąć opóźnień
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.background;
    });
  }, [slides]);

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSlide(0);
    }
  }, [pathname]);

  // Auto-slide z możliwością pauzowania
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, slides, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Nowa animacja tła z płynnym przejściem
  const backgroundTransition = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const socialVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen overflow-hidden relative">
      {/* Animowane tło */}
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].background}
          className="absolute inset-0 z-0"
          variants={backgroundTransition}
          initial={currentSlide === 0 ? false : "initial"} // brak animacji na pierwszym slajdzie
          animate="animate"
          exit="exit"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${slides[currentSlide].background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Kontener na treść i strzałki */}
      <div className="flex flex-col items-center gap-4 z-10">
        {/* Treść bez animacji */}
        <div
          key={currentSlide}
          className="bg-white/90 inline-flex rounded-2xl shadow-2xl transition-all duration-200 ease-in-out"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <span className="text-2xl md:text-4xl font-medium p-3 md:p-6 w-52 min-h-24 md:w-96 lg:w-144 text-center flex justify-center items-center">
            {t(slides[currentSlide].translationKey)}
          </span>
          <HeroButton link={slides[currentSlide].link} />
        </div>

        {/* Strzałki - bez animacji */}
        <div className="flex items-center mt-10 md:mt-0 gap-8 md-gap-0">
          <button
            onClick={prevSlide}
            className="text-white text-2xl md:text-4xl p-2 cursor-pointer md:absolute md:left-4 transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95"
            aria-label="Poprzedni slajd"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-2xl md:text-4xl p-2 cursor-pointer md:absolute md:right-4 transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95"
            aria-label="Następny slajd"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Ikony social media */}
      <motion.div
        className="absolute text-3xl md:text-4xl bottom-0 left-0 flex gap-6 p-6 text-white z-10"
        variants={socialVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          className="cursor-pointer"
          href="https://www.instagram.com/triotravell/"
          aria-label="Instagram TrioTravel"
          whileHover={{
            y: -10,
            transition: { repeat: Infinity, duration: 0.4 },
          }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          aria-label="Facebook TrioTravel"
          className="cursor-pointer"
          whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
          href="https://www.facebook.com/TrioTravel"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          aria-label="Wyślij email do TrioTravel"
          className="cursor-pointer"
          whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
          href="mailto:biuro@triotravel.eu"
        >
          <IoMail />
        </motion.a>
      </motion.div>
    </section>
  );
}
