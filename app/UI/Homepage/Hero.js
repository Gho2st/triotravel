"use client";
import { useState, useEffect } from "react";
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

  const slides = [
    {
      background: "/baner/baner.png",
      translationKey: "headers.header5", // "Wycieczka w Górach?"
      link: "/",
    },
    {
      background: "/baner/baner2.png",
      translationKey: "headers.header1", // "Spływ Kajakiem?"
      link: "/wycieczki-splyw-kajakiem",
    },
    {
      background: "/baner/baner3.png", //"Zimowy Kulig?"
      translationKey: "headers.header6",
      link: "/kuligi",
    },
    {
      background: "/baner/baner4.png",
      translationKey: "headers.header2", // "Baseny Termalne?"
      link: "/wycieczki/termy",
    },
    {
      background: "/baner/baner5.png",
      translationKey: "headers.header3", // "Bilety na Kasprowy?"
      link: "/bilety-na-kasprowy-wierch",
    },
    {
      background: "/baner/baner6.png",
      translationKey: "headers.header4", // "Transport w Górach?"
      link: "/transport",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  // Preload obrazów, aby uniknąć opóźnień
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.background;
    });
  }, []);

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
  }, [currentSlide, slides.length, isPaused]);

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
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 100, rotate: 10 },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      rotate: -10,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const arrowVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { yoyo: Infinity, duration: 0.5 },
    },
    tap: { scale: 0.9, rotate: -10 },
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
          initial="initial"
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
        {/* Animowana treść z obsługą najechania */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="bg-white/90 inline-flex rounded-2xl shadow-2xl"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <span className="text-2xl md:text-4xl font-medium p-3 md:p-6 w-52 md:w-96 lg:w-144 text-center">
              {t(slides[currentSlide].translationKey)}
            </span>
            <HeroButton link={slides[currentSlide].link} />
          </motion.div>
        </AnimatePresence>

        {/* Strzałki - pod napisem na telefonie, po bokach na większych ekranach */}
        <div className="flex items-center mt-10 md:mt-0 gap-8 md:gap-0  ">
          <motion.button
            onClick={prevSlide}
            className="text-white text-2xl md:text-4xl p-2 cursor-pointer  md:absolute md:left-4"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="text-white text-2xl md:text-4xl p-2 cursor-pointer   md:absolute md:right-4"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Ikony social media */}
      <motion.div
        className="absolute text-4xl bottom-0 left-0 flex gap-6 p-6 text-white z-10"
        variants={socialVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="cursor-pointer"
          whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
        >
          <FaInstagram />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
        >
          <FaFacebook />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
        >
          <IoMail />
        </motion.div>
      </motion.div>
    </section>
  );
}
