"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Sample gallery data
const gallery = [
  {
    url: "/wycieczki/splyw-dunajcem-dluzszy/splyw.png",
    alt: "trips.1",
  },
  {
    url: "/wycieczki/termy/termy.png",
    alt: "trips.2",
  },
  {
    url: "/wycieczki/spacer-w-koronach-drzew/korony.png",
    alt: "trips.3",
  },
  {
    url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
    alt: "trips.4",
  },
  {
    url: "/wycieczki/splyw-dunajcem-krotszy/splyw.png",
    alt: "trips.5",
  },
  {
    url: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
    alt: "trips.6",
  },
  {
    url: "/wycieczki/kasprowy.png",
    alt: "trips.7",
  },
  {
    url: "/wycieczki/slowacki-raj/slowacki-raj.png",
    alt: "trips.8",
  },
  {
    url: "/wycieczki/wieden/wieden.png",
    alt: "trips.9",
  },
  {
    url: "/wycieczki/budapeszt/budapeszt.png",
    alt: "trips.10",
  },
  {
    url: "/wycieczki/zamek-orawski/zamek-orawski.png",
    alt: "trips.11",
  },
  {
    url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
    alt: "trips.12",
  },
  {
    url: "/wycieczki/krakow/krakow.png",
    alt: "trips.13",
  },
  {
    url: "/wycieczki/dookola-tatr/tatry.png",
    alt: "trips.14",
  },
  {
    url: "/wycieczki/rafting-po-dunajcu/rafting.png",
    alt: "trips.15",
  },
];

export default function Offer() {
  const t = useTranslations("offer");

  const carouselSettings = {
    infinite: true,
    speed: 800,
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    initialSlide: 0,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1334,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative bg-neutral-100 px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 overflow-x-hidden">
      {/* Red Bookmark */}
      <div className="hidden absolute top-4 md:top-10 right-0 md:right-32 w-16 md:w-32 h-8 md:h-12 bg-red-600 text-white md:flex items-center justify-center rotate-90 shadow-lg">
        <span className="transform -rotate-45 text-sm font-medium"></span>
      </div>

      <h2 className="text-center font-semibold text-4xl md:text-6xl">
        {t("header")}
      </h2>
      <div>
        <Slider {...carouselSettings} className="mx-auto my-12">
          {gallery.map((image, index) => (
            <div
              className="shadow-xl text-center pb-8 rounded-xl hover:cursor-pointer px-2 group"
              key={index}
            >
              <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-t-xl">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-xl font-semibold md:text-2xl block mt-6 px-2 transition-colors duration-300 group-hover:text-customBlue">
                {t(image.alt)}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
