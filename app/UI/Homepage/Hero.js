"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroButton from "../Buttons/HeroButton";
import {
  FaInstagram,
  FaFacebook,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const slides = useMemo(
    () => [
      {
        background: "/wycieczki/spacer-w-koronach-drzew/korony.webp",
        translationKey: "headers.header7",
        link: "/wycieczki/spacer-w-koronach-drzew",
      },
      {
        background: "/wycieczki/splyw-dunajcem-dluzszy/4.webp",
        translationKey: "headers.header1",
        link: "/wycieczki/splyw-dunajcem-dluzszy",
      },
      {
        background: "/baner/baner4.webp",
        translationKey: "headers.header2",
        link: "/wycieczki/chocholowskie-termy",
      },
      {
        background: "/wycieczki/tajemnice-wieliczki/6.webp",
        translationKey: "headers.header8",
        link: "/wycieczki/tajemnice-wieliczki",
      },
      {
        background: "/wycieczki/jaskinia-bielanska/jaskinia.webp",
        translationKey: "headers.header9",
        link: "/wycieczki/jaskinia-bielanska",
      },
      {
        background: "/wycieczki/slowacki-raj/slowacki-raj.webp",
        translationKey: "headers.header10",
        link: "/wycieczki/slowacki-raj",
      },
      {
        background: "/wycieczki/biesiada-goralska/baner.webp",
        translationKey: "headers.header5",
        link: "/wycieczki/biesiada-goralska",
      },
      {
        background: "/baner/baner6.webp",
        translationKey: "headers.header4",
        link: "/transport",
      },
      {
        background: "/morskie-oko/morskie-oko.webp",
        translationKey: "headers.header11",
        link: "/transport-nad-morskie-oko",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSlide(0);
    }
  }, [pathname]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, slides, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with transition */}
      <motion.div
        key={slides[currentSlide].background}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={slides[currentSlide].background}
          alt="Slide background"
          fill
          style={{ objectFit: "cover" }}
          priority={currentSlide === 0}
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </motion.div>

      {/* Main content block */}
      <div className="z-10 flex flex-col items-center gap-4">
        <div
          className="inline-flex rounded-2xl bg-white/90 shadow-2xl transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <span className="flex min-h-24 w-54 items-center text-center justify-center p-3 text-2xl font-medium md:w-96 md:p-6 md:text-4xl lg:w-144">
            {t(slides[currentSlide].translationKey)}
          </span>
          <HeroButton link={slides[currentSlide].link} />
        </div>

        {/* Arrows */}
        <div className="mt-10 flex items-center gap-8 md:mt-0 md:gap-0">
          <button
            onClick={prevSlide}
            className="cursor-pointer p-2 text-2xl text-white md:absolute md:left-4 md:text-4xl"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer p-2 text-2xl text-white md:absolute md:right-4 md:text-4xl"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Socials */}
      <div className="absolute bottom-0 left-0 z-10 flex gap-6 p-6 text-3xl text-white md:text-4xl">
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/triotravell/"
        >
          <FaInstagram />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.facebook.com/TrioTravel"
        >
          <FaFacebook />
        </a>
        <a className="cursor-pointer" href="mailto:biuro@triotravel.eu">
          <IoMail />
        </a>
      </div>
    </section>
  );
}
