import { CheckCircle2 } from "lucide-react";

export default function BackgroundList({
  title,
  items = [],
  text,
  bgColor = "bg-slate-100",
  textColor = "text-slate-900",
  accentColor = "text-blue-600",
  className = "",
}) {
  return (
    <section
      className={`
        relative overflow-hidden
        rounded-2xl sm:rounded-3xl 
        p-5 sm:p-8 md:p-10 lg:p-14 
        max-w-7xl mx-auto
        ${bgColor} 
        ${className}
      `}
    >
      {/* Subtelny gradient w tle dla głębi */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-br from-white/40 via-transparent to-white/20
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-14">
        <h3
          className={`
            text-2xl sm:text-3xl  2xl:text-5xl 
            font-bold tracking-wider
            mb-3 sm:mb-4 
            ${textColor}
          `}
        >
          {title}
        </h3>
        {text && (
          <p
            className={`
              text-sm sm:text-base lg:text-lg xl:text-xl 
              font-normal opacity-75 
              leading-relaxed
              max-w-2xl mx-auto
              ${textColor}
            `}
          >
            {text}
          </p>
        )}
      </div>

      {/* Lista */}
      <ul
        className="
          relative
          grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 
          gap-2.5 sm:gap-4 lg:gap-5
        "
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="
              group flex items-start 
              gap-3 sm:gap-4 
              p-3.5 sm:p-4 lg:p-5
              rounded-xl sm:rounded-2xl 
              bg-white/60 hover:bg-white/90
              backdrop-blur-sm
              ring-1 ring-white/40 hover:ring-white/80
              shadow-sm hover:shadow-md
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
            "
          >
            {/* Ikona w kółku */}
            <div
              className={`
                flex-shrink-0
                flex items-center justify-center
                w-7 h-7 sm:w-8 sm:h-8
                rounded-lg sm:rounded-xl
                bg-white shadow-sm
                group-hover:scale-110 group-hover:rotate-3
                transition-transform duration-300 ease-out
              `}
            >
              <CheckCircle2
                className={`
                  w-4 h-4 sm:w-5 sm:h-5 
                  ${accentColor}
                `}
                strokeWidth={2.5}
              />
            </div>

            {/* Tekst */}
            <span
              className={`
                text-sm sm:text-base lg:text-base 
                font-medium leading-snug 
                pt-0.5 sm:pt-1
                ${textColor}
              `}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
