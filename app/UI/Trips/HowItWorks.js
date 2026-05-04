import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("offer.howitworks");
  const steps = [1, 2, 3, 4];

  return (
    <section className="xl:pb-10">
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
          className="
          flex xl:grid xl:grid-cols-4 
          gap-4 sm:gap-6 xl:gap-8
          overflow-x-auto xl:overflow-visible
          snap-x snap-mandatory xl:snap-none
          scroll-smooth
          px-4 sm:px-6 lg:px-8
          pb-6 xl:pb-0
          -mx-4 sm:-mx-6 lg:-mx-8 xl:mx-auto
          xl:max-w-7xl
          scrollbar-hide
        "
        >
          {steps.map((num) => (
            <div
              key={num}
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
        <div className="flex justify-center gap-2 mt-4 xl:hidden">
          {steps.map((num) => (
            <span
              key={num}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
