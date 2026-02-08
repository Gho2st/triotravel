import { CheckCircle2 } from "lucide-react";

export default function BackgroundList({
  title,
  items = [],
  text,
  bgColor = "bg-slate-100",
  textColor = "text-slate-900",
  className = "",
}) {
  return (
    <section
      className={`rounded-3xl p-5 md:p-12 lg:w-11/12 xl:w-4/5 mx-auto ${bgColor} ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-14">
        <h3
          className={`text-2xl md:text-3xl 2xl:text-4xl font-bold mb-4 ${textColor}`}
        >
          {title}
        </h3>
        {text && (
          <p className="text-base md:text-xl font-medium opacity-80 leading-relaxed">
            {text}
          </p>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 md:gap-4 p-3.5 md:p-5 rounded-2xl bg-white/50 backdrop-blur-sm transition-all hover:shadow-sm border border-white/10"
          >
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 mt-0.5 text-blue-600 shrink-0" />

            <span
              className={`text-sm sm:text-base 2xl:text-lg font-medium leading-snug md:leading-normal ${textColor}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
