"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  // faq.list to już gotowy obiekt z backendu
  const faqs = Object.keys(faq.list)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => ({
      question: faq.list[key].header,
      answer: faq.list[key].text,
    }));

  return (
    <section className="px-6 xl:px-24 py-20 bg-white border-t border-gray-200">
      <h2 className="text-3xl 2xl:text-4xl font-extrabold text-center text-gray-900">
        {faq.header}
      </h2>

      <p className="text-center mt-4 2xl:mt-8 max-w-2xl mx-auto text-lg text-gray-700">
        {/* Jeśli w tekście masz <strong>, możesz użyć dangerousSetInnerHTML albo lepiej – zrobić to po server-side */}
        <span dangerouslySetInnerHTML={{ __html: faq.text }} />
        {/* Albo jeśli chcesz bezpieczniej – przekaż już przetworzony HTML z serwera */}
      </p>

      <div className="mt-12 2xl:mt-16 max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white hover:border-gray-300 transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 hover:text-gray-900"
            >
              <span>{item.question}</span>
              <span className="text-3xl ml-4 flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-gray-600 leading-relaxed text-left">
                    <p>{item.answer}</p>
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
