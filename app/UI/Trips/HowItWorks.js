"use client";

import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";

export default function HowItWorks() {
  const t = useTranslations("offer.howitworks");
  const steps = [1, 2, 3, 4];
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: scroller,
        threshold: 0.6,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index) => {
    const card = cardsRef.current[index];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section className="xl:pb-10 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2
          className="
            text-3xl sm:text-4xl 2xl:text-5xl 
            font-bold tracking-tight text-gray-900
          "
        >
          {t("header")}
        </h2>
        <p
          className="
            mt-4 sm:mt-6 
            text-base sm:text-lg lg:text-xl 
            leading-relaxed
          "
        >
          {t("text")}
        </p>
      </div>

      {/* Slider mobile / Grid desktop */}
      <div className="mt-12 sm:mt-16 2xl:mt-20">
        <div
          ref={scrollerRef}
          className="
            flex xl:grid xl:grid-cols-4 
            gap-4 sm:gap-6 xl:gap-8
            overflow-x-auto xl:overflow-visible
            snap-x snap-mandatory xl:snap-none
            scroll-smooth
            px-4 sm:px-6 lg:px-8
            pb-2 xl:pb-0
            xl:max-w-7xl xl:mx-auto
            scrollbar-hide
            overscroll-x-contain
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {steps.map((num, i) => (
            <div
              key={num}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                group relative flex-shrink-0 
                w-[85%] sm:w-[45%] xl:w-auto
                snap-center xl:snap-align-none
                bg-white rounded-3xl p-6 sm:p-8
                ring-1 ring-gray-100 hover:ring-customBlue/20
                shadow-sm hover:shadow-xl
                transition-all duration-500 ease-out
                xl:hover:-translate-y-1
              "
            >
              {/* Numer w gradient kółku */}
              <div
                className="
                  w-14 h-14 sm:w-16 sm:h-16 
                  mx-auto mb-5 sm:mb-6
                  rounded-2xl 
                  bg-gradient-to-br from-customBlue to-blue-600
                  flex items-center justify-center
                  shadow-lg shadow-customBlue/30
                  xl:group-hover:scale-110 xl:group-hover:rotate-3
                  transition-transform duration-500 ease-out
                "
              >
                <span className="text-xl sm:text-2xl font-bold text-white">
                  {num}
                </span>
              </div>

              <h3
                className="
                  text-lg sm:text-xl 2xl:text-2xl 
                  font-bold text-gray-900 
                  text-center mb-3 tracking-tight
                "
              >
                {t(`cards.${num}.header`)}
              </h3>

              <p
                className="
                  text-sm 2xl:text-base 
                  text-gray-600 leading-relaxed 
                  text-center font-light
                "
              >
                {t(`cards.${num}.text`)}
              </p>
            </div>
          ))}
        </div>

        {/* Wskaźnik scrollowania - tylko mobile */}
        <div className="flex justify-center gap-2 mt-6 xl:hidden">
          {steps.map((num, i) => (
            <button
              key={num}
              onClick={() => scrollToCard(i)}
              aria-label={`Przejdź do kroku ${num}`}
              className={`
                h-2 rounded-full
                transition-all duration-300 ease-out
                ${
                  activeIndex === i
                    ? "w-8 bg-customBlue"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
