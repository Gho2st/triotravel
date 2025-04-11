"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter z next/navigation

// Animation variants for the button
const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

// Animation variants for the circle
const circleVariants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  hover: {
    y: -10,
    rotate: 5,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function HeroButton() {
  const router = useRouter(); // Inicjalizacja routera

  // Funkcja obsługująca kliknięcie
  const handleClick = () => {
    router.push("/rezerwacje"); // Przekierowanie do /rezerwacje
  };

  return (
    <motion.button
      className="bg-red-500 shadow-2xl w-20 md:w-36 relative rounded-r-2xl border-0 cursor-pointer"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      onClick={handleClick} // Dodanie obsługi kliknięcia
    >
      <motion.div
        className="absolute top-[-4rem] left-[-12px] md:left-0 md:top-[-6rem] bg-white p-2 py-5 md:p-6 md:py-10 border-3 text-xl rounded-[100%]"
        variants={circleVariants}
      >
        <span className="">Rezerwuj</span>{" "}
        <span className="text-xl md:text-2xl font-bold">TERAZ</span>
      </motion.div>
    </motion.button>
  );
}
