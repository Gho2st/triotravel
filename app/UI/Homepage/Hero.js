"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroButton from "../Buttons/HeroButton";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Hero() {
  const slides = [
    {
      background: "/baner/baner.png",
      text: "Wycieczka w góry?",
      link: "/dunajec",
    },
    {
      background: "/baner/baner2.png",
      text: "Spływ Kajakiem?",
      link: "/gory",
    },
    {
      background: "/baner/baner3.png",
      text: "Zimowy Kulig?",
      link: "/zamek",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSlide(0);
    }
  }, [pathname]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const backgroundTransition = {
    initial: { opacity: 0, scale: 1.2 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.8, ease: "easeIn" },
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
      <AnimatePresence mode="wait">
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

      {/* Strzałka w lewo */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 text-white text-2xl md:text-4xl p-2 z-10 cursor-pointer"
        variants={arrowVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaArrowLeft />
      </motion.button>

      {/* Animowana treść */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="bg-white/70 inline-flex rounded-2xl shadow-2xl z-10"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span className="text-2xl md:text-4xl p-3 md:p-6 w-52 md:w-96 lg:w-144 text-center">
            {slides[currentSlide].text}
          </span>
          <HeroButton link={slides[currentSlide].link} />
        </motion.div>
      </AnimatePresence>

      {/* Strzałka w prawo */}
      <motion.button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 text-white text-2xl md:text-4xl p-2 z-10 cursor-pointer"
        variants={arrowVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaArrowRight />
      </motion.button>

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
