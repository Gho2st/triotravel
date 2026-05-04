"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = Object.keys(faq.list)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => ({
      question: faq.list[key].header,
      answer: faq.list[key].text,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>?/gm, ""),
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 bg-white border-t border-gray-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <h2
          id="faq-heading"
          className="text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-center text-gray-900"
        >
          {faq.header}
        </h2>

        {faq.text && (
          <p className="text-center mt-4 2xl:mt-8 max-w-2xl mx-auto xl:text-lg text-gray-700">
            <span dangerouslySetInnerHTML={{ __html: faq.text }} />
          </p>
        )}

        <div className="mt-12 2xl:mt-16 max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white hover:border-gray-300 transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left flex justify-between items-center hover:text-gray-900"
                >
                  <h3 className="xl:text-lg font-medium text-gray-800 m-0">
                    {item.question}
                  </h3>
                  <span
                    className="text-3xl ml-4 flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-gray-600 leading-relaxed text-sm xl:text-base text-left">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
