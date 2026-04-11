"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function Offer() {
  const t = useTranslations("offer");
  const k = useTranslations("kuligi"); // na wypadek kuligów w zimie

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Czy jesteśmy w sezonie zimowym? Możesz to później zastąpić logiką z datą
  const isWinter = false;

  const standardGallery = [
    {
      url: "/wycieczki/termy/termy.webp",
      title: t("trips.2"),
      link: "/wycieczki-jednodniowe/chocholowskie-termy",
    },
    {
      url: "/wycieczki/spacer-w-koronach-drzew/lato/korony.webp",
      title: t("trips.3"),
      link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
    },
    {
      url: "/wycieczki/jaskinia-bielanska/jaskinia.webp",
      title: t("trips.4"),
      link: "/wycieczki-jednodniowe/jaskinia-bielanska",
    },
    {
      url: "/wycieczki/tajemnice-wieliczki/wieliczka.webp",
      title: t("trips.6"),
      link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
    },
    {
      url: "/wycieczki/kasprowy-wierch/4.webp",
      title: t("trips.7"),
      link: "/bilety-na-kasprowy-wierch",
    },
    {
      url: "/wycieczki/slowacki-raj/slowacki-raj.webp",
      title: t("trips.8"),
      link: "/wycieczki-jednodniowe/slowacki-raj",
    },
    {
      url: "/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp",
      title: t("trips.11"),
      link: "/wycieczki-jednodniowe/krajobrazy-slowacji",
    },
    {
      url: "/morskie-oko/morskie-oko.webp",
      title: t("trips.19"),
      link: "/transport/nad-morskie-oko",
    },
    {
      url: "/wycieczki/biesiada-goralska/5.webp",
      title: t("trips.16"),
      link: "/wycieczki-jednodniowe/zabawa-goralska",
    },
    {
      url: "/wycieczki/splyw-dunajcem-zakopane/splyw.webp",
      title: t("trips.1"),
      link: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
    },
    {
      url: "/wycieczki/splyw-dunajcem-slowacja/splyw.webp",
      title: t("trips.5"),
      link: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
    },
    {
      url: "/wycieczki/wieden/wieden.webp",
      title: t("trips.9"),
      link: "/wycieczki-jednodniowe/wieden",
    },
    {
      url: "/wycieczki/budapeszt/budapeszt.webp",
      title: t("trips.10"),
      link: "/wycieczki-jednodniowe/budapeszt",
    },
    {
      url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.webp",
      title: t("trips.12"),
      link: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
    },
  ];

  const winterGallery = [
    {
      url: "/wycieczki/termy/termy.webp",
      title: t("trips.2"),
      link: "/wycieczki-jednodniowe/chocholowskie-termy",
    },
    {
      url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.webp",
      title: t("trips.12"),
      link: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
    },
    {
      url: "/wycieczki/spacer-w-koronach-drzew/zima/korony.webp",
      title: t("trips.3"),
      link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
    },
    {
      url: "/wycieczki/kasprowy-wierch/4.webp",
      title: t("trips.7"),
      link: "/bilety-na-kasprowy-wierch",
    },
    {
      url: "/wycieczki/tajemnice-wieliczki/wieliczka.webp",
      title: t("trips.6"),
      link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
    },
    {
      url: "/morskie-oko/morskie-oko.webp",
      title: t("trips.19"),
      link: "/transport/nad-morskie-oko",
    },
    {
      url: "/kuligi/koscielisko.webp",
      title: k("cards.1.header"),
      link: "/kuligi/goralski-koscielisko",
    },
    {
      url: "/kuligi/dolina.webp",
      title: k("cards.2.header"),
      link: "/kuligi/dolina-chocholowska",
    },
  ];

  const gallery = isWinter ? winterGallery : standardGallery;

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1334px)": { slides: { perView: 3, spacing: 20 } },
      "(max-width: 1150px)": { slides: { perView: 2, spacing: 16 } },
      "(max-width: 800px)": { slides: { perView: 1, spacing: 12 } },
    },
    created(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    renderMode: "performance",
    drag: true,
    defaultAnimation: { duration: 800 },
  });

  // Autoplay
  useEffect(() => {
    if (!slider.current) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        slider.current?.next();
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [slider, isPaused]);

  const pauseAutoplay = () => setIsPaused(true);
  const resumeAutoplay = () => setIsPaused(false);

  return (
    <section className="relative bg-neutral-100 px-6 md:px-20 xl:px-32 2xl:px-[16%] py-16 md:py-20 2xl:py-24 overflow-hidden">
      <h2 className="text-center pb-12 font-semibold text-3xl md:text-4xl 2xl:text-5xl">
        {t("header")}
      </h2>

      <div className="relative mt-10">
        {/* Lewa strzałka */}
        <button
          onClick={() => {
            slider.current?.prev();
            pauseAutoplay();
          }}
          className="hidden md:flex cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all"
          aria-label="Poprzedni slajd"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onTouchStart={pauseAutoplay}
        >
          {gallery.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="keen-slider__slide"
              onClick={pauseAutoplay}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[380px] md:h-[480px] 2xl:h-[520px] flex flex-col">
                {/* Obrazek */}
                <div className="relative w-full h-[300px] md:h-[380px] 2xl:h-[420px] overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.alt || "triotravel"}
                    fill
                    priority={idx < 3}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Nakładka przy hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Tytuł */}
                <div className="flex-1 flex items-center justify-center px-4 py-6">
                  <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-center text-gray-800 group-hover:text-customBlue transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Prawa strzałka */}
        <button
          onClick={() => {
            slider.current?.next();
            pauseAutoplay();
          }}
          className="hidden md:flex cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-3 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all"
          aria-label="Następny slajd"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Kropki */}
      <div className="flex justify-center mt-12 gap- gap-3">
        {slider.current &&
          Array.from({
            length: slider.current.track.details.slides.length,
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                slider.current?.moveToIdx(idx);
                pauseAutoplay();
              }}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-10 h-3 bg-red-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`Przejdź do slajdu ${idx + 1}`}
            />
          ))}
      </div>
    </section>
  );
}
