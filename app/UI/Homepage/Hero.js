"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroButton from "../Buttons/HeroButton";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const slides = [
    {
      background: "url(baner/baner.png)",
      text: "Wycieczka w góry?",
      link: "/dunajec",
    },
    {
      background: "url(baner/baner2.png)",
      text: "Spływ Kajakiem?",
      link: "/gory",
    },
    {
      background: "url(baner/baner3.png)",
      text: "Zimowy Kulig?",
      link: "/zamek",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Warianty animacji dla tła (zoom + fade)
  const backgroundVariants = {
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

  // Warianty animacji dla treści (rotacja + przesunięcie)
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

  // Warianty animacji dla strzałek (pulsowanie + obrót)
  const arrowVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { yoyo: Infinity, duration: 0.5 },
    },
    tap: { scale: 0.9, rotate: -10 },
  };

  // Warianty dla ikon social media (skakanie)
  const socialVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen overflow-hidden relative overflow-x-hidden">
      {/* Animowane tło */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), ${slides[currentSlide].background}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* Strzałka w lewo */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-1 md:left-4 text-white text-2xl md:text-4xl p-2 z-10 cursor-pointer"
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
        className="absolute right-1 md:right-4 text-white text-2xl md:text-4xl p-2 z-10 cursor-pointer"
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
