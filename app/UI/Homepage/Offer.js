"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useRef, useState } from "react";

// Sample gallery data
const gallery = [
  {
    url: "/wycieczki/splyw-dunajcem-zakopane/splyw.webp",
    alt: "trips.1",
    link: "/wycieczki-jednodniowe/splyw-dunajcem-zakopane",
  },
  {
    url: "/wycieczki/termy/termy.webp",
    alt: "trips.2",
    link: "/wycieczki-jednodniowe/chocholowskie-termy",
  },
  {
    url: "/wycieczki/spacer-w-koronach-drzew/korony.webp",
    alt: "trips.3",
    link: "/wycieczki-jednodniowe/spacer-w-koronach-drzew",
  },
  {
    url: "/wycieczki/jaskinia-bielanska/jaskinia.webp",
    alt: "trips.4",
    link: "/wycieczki-jednodniowe/jaskinia-bielanska",
  },
  {
    url: "/wycieczki/biesiada-goralska/baner.webp",
    alt: "trips.16",
    link: "/wycieczki-jednodniowe/biesiada-goralska",
  },
  {
    url: "/wycieczki/splyw-dunajcem-slowacja/splyw.webp",
    alt: "trips.5",
    link: "/wycieczki-jednodniowe/splyw-dunajcem-slowacja",
  },
  {
    url: "/wycieczki/tajemnice-wieliczki/wieliczka.webp",
    alt: "trips.6",
    link: "/wycieczki-jednodniowe/tajemnice-wieliczki",
  },
  {
    url: "/wycieczki//kasprowy-wierch/1.webp",
    alt: "trips.7",
    link: "/bilety-na-kasprowy-wierch",
  },
  {
    url: "/wycieczki/slowacki-raj/slowacki-raj.webp",
    alt: "trips.8",
    link: "/wycieczki-jednodniowe/slowacki-raj",
  },
  {
    url: "/wycieczki/krajobrazy-slowacji/krajobrazy-slowacji.webp",
    alt: "trips.11",
    link: "/wycieczki-jednodniowe/krajobrazy-slowacji",
  },
  {
    url: "/morskie-oko/morskie-oko.webp",
    alt: "trips.19",
    link: "/transport-nad-morskie-oko",
  },
  {
    url: "/wycieczki/wieden/wieden.webp",
    alt: "trips.9",
    link: "/wycieczki-jednodniowe/wieden",
  },
  {
    url: "/wycieczki/budapeszt/budapeszt.webp",
    alt: "trips.10",
    link: "/wycieczki-jednodniowe/budapeszt",
  },

  // {
  //   url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.webp",
  //   alt: "trips.12",
  //   link: "/wycieczki-jednodniowe/swiatynia-lodowa-hrebieniok",
  // },
  {
    url: "/wycieczki/dookola-tatr/tatry.webp",
    alt: "trips.14",
    link: "/wycieczki-jednodniowe/dookola-tatr",
  },
  {
    url: "/wycieczki/rafting-po-dunajcu/rafting.webp",
    alt: "trips.15",
    link: "/wycieczki-jednodniowe/rafting-po-dunajcu",
  },
  {
    url: "/wycieczki/quady/quady.webp",
    alt: "trips.20",
    link: "/wycieczki-jednodniowe/quady",
  },
];
export default function Offer() {
  const t = useTranslations("offer");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1334px)": { slides: { perView: 3, spacing: 16 } },
      "(max-width: 1150px)": { slides: { perView: 2, spacing: 16 } },
      "(max-width: 800px)": { slides: { perView: 1, spacing: 12 } },
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
      setSlideCount(slider.track.details.slides.length);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    renderMode: "performance",
    drag: true,
    defaultAnimation: { duration: 800 },
  });

  useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        slider.current?.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [slider, isPaused]);

  const pauseAutoplay = () => {
    setIsPaused(true);
  };

  return (
    <section className="relative bg-neutral-100 px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 overflow-x-hidden">
      {/* Red Bookmark */}
      <div className="hidden absolute top-4 md:top-10 right-0 md:right-12 xl:right-32 w-16 md:w-32 h-8 xl:h-12 bg-red-600 text-white lg:flex items-center justify-center rotate-90 shadow-lg">
        <span className="transform -rotate-45 text-sm font-medium"></span>
      </div>

      <h2 className="text-center pb-10 font-semibold text-4xl md:text-5xl 2xl:text-6xl">
        {t("header")}
      </h2>

      {/* STRZAŁKI */}
      <div className="relative mt-10">
        {/* Left Arrow */}
        <button
          onClick={() => {
            slider.current?.prev();
            pauseAutoplay();
          }}
          className="hidden cursor-pointer md:flex absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 p-2 px-3 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition"
        >
          ◀
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="keen-slider mx-auto"
          onMouseDown={pauseAutoplay}
          onTouchStart={pauseAutoplay}
        >
          {gallery.map((image, index) => (
            <Link href={image.link} key={index} className="keen-slider__slide">
              <div className="bg-white text-center rounded-xl hover:cursor-pointer group h-[350px] md:h-[450px] flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    priority={index < 2}
                    className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center px-2">
                  <span className="text-xl py-8 sm:py-0 2xl:py-10 font-semibold md:text-2xl transition-colors duration-300 group-hover:text-customBlue">
                    {t(image.alt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            slider.current?.next();
            pauseAutoplay();
          }}
          className="hidden cursor-pointer md:flex absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 p-2 px-3 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition"
        >
          ▶
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: slideCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              slider.current?.moveToIdx(idx);
              pauseAutoplay();
            }}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-red-500 scale-125" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
}
