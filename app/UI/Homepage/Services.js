"use client";
import { motion, useInView } from "framer-motion";
import { FaArrowTurnDown } from "react-icons/fa6";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { FaBus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

// Define cardsData with translation keys
const cardsData = [
  {
    icon: <FaBus className="text-2xl xl:text-4xl text-white" />,
    title: "cards.1.header",
    description: "cards.1.text",
  },
  {
    icon: <FaSearch className="text-2xl xl:text-4xl text-white" />,
    title: "cards.2.header",
    description: "cards.2.text",
  },
  {
    icon: <FaPeopleCarry className="text-2xl xl:text-4xl text-white" />,
    title: "cards.3.header",
    description: "cards.3.text",
  },
];

function ServiceCard({ icon, title, description, isLeftAligned }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const t = useTranslations("services");

  return (
    <motion.article
      ref={ref}
      className={`relative w-11/12 xl:w-3/5   shadow-2xl p-6 xl:p-10 rounded-lg bg-white ${
        isLeftAligned ? "rounded-r-xl ml-0" : "rounded-l-xl ml-auto"
      } my-14 xl:my-24`}
      initial={{ opacity: 0, x: isLeftAligned ? -200 : 200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2 }}
    >
      <div className="bg-blue-800 rounded-lg inline-block p-3">{icon}</div>
      <h2 className="text-xl xl:text-2xl leading-snug 2xl:text-4xl 2xl:leading-snug my-5 font-semibold">
        {t(title)}
      </h2>
      <p className="text-neutral-800 text-sm 2xl:text-xl">{t(description)}</p>
      <span
        className={`absolute top-[50%] translate-y-[-50%] ${
          isLeftAligned ? "right-[-30px]" : "left-[-30px]"
        }`}
      >
        <FaArrowTurnDown
          className={`text-5xl text-red-600 ${
            isLeftAligned ? "" : "transform scale-x-[-1]"
          }`}
        />
      </span>
    </motion.article>
  );
}

export default function Services({ cards = cardsData }) {
  return (
    <section className="py-10 xl:px-44 2xl:px-[16%] bg-neutral-100 overflow-x-hidden">
      {cards.map((card, index) => (
        <ServiceCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          isLeftAligned={index % 2 === 0}
        />
      ))}
    </section>
  );
}
