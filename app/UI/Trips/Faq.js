"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("offer.faq");

  const cardCount = 5; // lub dynamicznie jeśli znasz liczbę z backendu
  const cards = Array.from({ length: cardCount }, (_, i) => {
    const index = i + 1;
    const card = {
      question: t(`list.${index}.header`),
      answer: t(`list.${index}.text`),
    };

    return card;
  });

  return (
    <section className="px-6 xl:px-24 py-20 bg-white border-t border-gray-200">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">
        {t("header")}
      </h2>
      <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray-700">
        {t.rich("text", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {cards.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 md:p-6 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
