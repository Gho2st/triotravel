"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery({ images = [] }) {
  // Initialize gallery state with props
  const [gallery, setGallery] = useState(images);

  // Update gallery when props change
  useEffect(() => {
    setGallery(images);
  }, [images]);

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
    dots: false,
    arrows: true,
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
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  // Handle case when no images are provided
  if (!gallery || gallery.length === 0) {
    return (
      <div className="mb-20 mt-10 text-center">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Slider {...carouselSettings} className=" mx-auto ">
        {gallery.map((image, index) => (
          <div
            key={image.id || index}
            className="relative w-full h-[300px] md:h-[500px]"
          >
            {/* Stały rozmiar kontenera */}
            <Image
              src={image.url || image}
              alt={image.alt || `Gallery Image ${index}`}
              fill // Użyj fill zamiast width/height dla responsywności
              className="md:rounded-xl object-cover focus:outline-none"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
