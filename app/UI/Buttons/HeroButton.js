"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

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

export default function HeroButton({ link }) {
  const router = useRouter(); // Inicjalizacja routera
  const t = useTranslations("hero");

  // Funkcja obsługująca kliknięcie
  const handleClick = () => {
    router.push(link);
  };

  return (
    <motion.button
      className="bg-red-500 shadow-2xl w-22 md:w-36 relative rounded-r-2xl border-0 cursor-pointer"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      onClick={handleClick}
    >
      <motion.div
        className="absolute flex flex-col justify-center items-center top-[-4rem] left-[-13px] md:left-[-4px] md:top-[-6rem] bg-white w-30 h-30 md:w-40 md:h-40 border-3 rounded-[100%]"
        variants={circleVariants}
      >
        <span className="text-xl md:text-2xl">{t("button")}</span>{" "}
        <span className="text-xl md:text-2xl font-bold">{t("button2")}</span>
      </motion.div>
    </motion.button>
  );
}
