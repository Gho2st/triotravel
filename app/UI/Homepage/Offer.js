"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Sample gallery data
const gallery = [
  {
    url: "/oferta-zimowa/1.png",
    alt: "Góralski Kulig Kościelisko",
  },
  {
    url: "/oferta-zimowa/2.png",
    alt: "Zimowy Kulig",
  },
  {
    url: "/oferta-zimowa/3.png",
    alt: "Spływ Dunajcem",
  },
  {
    url: "/oferta-zimowa/1.png",
    alt: "Winter Offer 4",
  },
];

export default function Offer() {
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
      <div className="absolute top-4 md:top-10 right-0 md:right-32 w-16 md:w-32 h-8 md:h-12 bg-red-600 text-white flex items-center justify-center rotate-90 shadow-lg">
        <span className="transform -rotate-45 text-sm font-medium"></span>
      </div>

      <h2 className="text-center font-semibold text-5xl md:text-6xl">Oferta Zima 2024</h2>
      <div>
        <Slider {...carouselSettings} className="mx-auto my-12">
          {gallery.map((image, index) => (
            <div
              className="shadow-xl text-center pb-8 rounded-xl hover:cursor-pointer px-2 group"
              key={index}
            >
              <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden rounded-t-xl">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-xl md:text-2xl block mt-4 px-2 transition-colors duration-300 group-hover:text-customBlue">
                {image.alt}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}