import { useTranslations } from "next-intl";

export default function Why() {
  const t = useTranslations("why");
  const cards = [1, 2, 3];

  return (
    <section
      className="
      px-6 md:px-20 xl:px-32 2xl:px-[16%] 
      py-16 md:py-20 2xl:py-24 
      overflow-x-hidden
      bg-gradient-to-b from-white to-gray-50/50
    "
    >
      {/* Header */}
      <div className="max-w-4xl mb-12 sm:mb-16 lg:mb-20">
        <h2
          className="
          text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 
          font-bold leading-tight tracking-tight
          text-gray-900
        "
        >
          {t("header")}
          <span
            className="
            block sm:inline 
            bg-gradient-to-r from-red-600 to-red-500 
            bg-clip-text text-transparent
          "
          >
            {" "}
            Trio Travel?
          </span>
        </h2>
      </div>

      {/* Karty */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
        gap-5 sm:gap-6 lg:gap-8
      "
      >
        {cards.map((num) => (
          <article
            key={num}
            className="
              group relative
              bg-white rounded-3xl
              p-6 sm:p-8 lg:p-10
              shadow-sm hover:shadow-2xl
              ring-1 ring-gray-100 hover:ring-red-100
              transition-all duration-500 ease-out
              hover:-translate-y-1
              overflow-hidden
            "
          >
            {/* Akcent po lewej - czerwony pasek */}
            <div
              className="
                absolute top-0 left-0 
                w-1.5 h-full 
                bg-gradient-to-b from-red-600 to-red-500
                group-hover:w-2
                transition-all duration-500 ease-out
              "
              aria-hidden="true"
            />

            {/* Subtelny gradient w tle (pojawia się na hover) */}
            <div
              className="
                absolute inset-0 
                bg-gradient-to-br from-red-50/0 via-transparent to-blue-50/0
                group-hover:from-red-50/50 group-hover:to-blue-50/30
                transition-all duration-500 ease-out
                pointer-events-none
              "
              aria-hidden="true"
            />

            {/* Numer kroku - subtelny w tle */}
            <span
              className="
                absolute top-4 right-5
                text-5xl sm:text-6xl font-black 
                text-gray-100 group-hover:text-red-100
                transition-colors duration-500
                select-none pointer-events-none
                leading-none
              "
              aria-hidden="true"
            >
              0{num}
            </span>

            {/* Treść */}
            <div className="relative z-10">
              <h3
                className="
                text-lg sm:text-xl lg:text-2xl 
                font-bold text-gray-900 
                tracking-tight
                mb-4 sm:mb-5 lg:mb-6
                pr-10
              "
              >
                {t(`cards.${num}.header`)}
              </h3>
              <p
                className="
                text-sm sm:text-base 2xl:text-lg 
                text-gray-600 leading-relaxed
              "
              >
                {t(`cards.${num}.text`)}
              </p>
            </div>

            {/* Subtelna linia akcent na hover - od dołu */}
            <div
              className="
                absolute bottom-0 left-0
                w-0 group-hover:w-full
                h-0.5 bg-gradient-to-r from-red-600 to-red-400
                transition-all duration-700 ease-out
              "
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
