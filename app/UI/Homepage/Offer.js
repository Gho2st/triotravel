"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Sample gallery data
const gallery = [
  {
    url: "/oferta-zimowa/1.png",
    alt: "Winter Offer 1",
  },
  {
    url: "/oferta-zimowa/1.png",
    alt: "Winter Offer 2",
  },
  {
    url: "/oferta-zimowa/1.png",
    alt: "Winter Offer 3",
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
    <section className="relative bg-neutral-100 px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      {/* Red Bookmark */}
      <div className="absolute top-10 right-32 w-32 h-12 bg-red-600 text-white flex items-center justify-center  rotate-90 shadow-lg">
        <span className="transform -rotate-45 text-sm font-medium"></span>
      </div>

      <h2 className="text-center text-6xl">Oferta Zima 2024</h2>
      <div>
        <Slider {...carouselSettings} className="mx-auto my-12 mt-24 ">
          {gallery.map((image, index) => (
            <div className="shadow-xl text-center pb-8 rounded-xl hover:cursor-pointer" key={index}>
              <Image
                src={image.url}
                alt={image.alt || `Gallery Image ${index}`}
                width={500}
                height={500}
                className="rounded-t-xl mb-6"
              />
              <span className="text-2xl">Góralski Kulig Kościelisko</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
