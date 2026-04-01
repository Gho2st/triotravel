"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-[16%] py-16 md:py-20 2xl:py-24 overflow-hidden text-center">
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
        {/* Tekst wjeżdża z lewej */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-snug">
            {t("header1")}
          </h1>
          <p className="mt-10 text-lg xl:text-xl 2xl:text-2xl leading-snug">
            {t("text")}
          </p>
        </motion.div>

        {/* Obrazek wjeżdża z prawej i delikatnie rośnie */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2"
        >
          <Image
            src={"/wycieczki/splyw-dunajcem-slowacja/5.webp"}
            width={100}
            height={100}
            layout="responsive"
            alt={t("alt.1")}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* --- DRUGI BLOK --- */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-20 mt-16 md:mt-20">
        {/* Obrazek wjeżdża z lewej */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <Image
            src={"/wycieczki/spacer-w-koronach-drzew/lato/3.webp"}
            width={100}
            height={100}
            layout="responsive"
            alt={t("alt.2")}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Tekst wjeżdża z prawej */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <p className="text-lg xl:text-xl 2xl:text-2xl leading-snug">
            {t("text2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
