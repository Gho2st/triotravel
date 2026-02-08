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
      className={`relative overflow-hidden rounded-3xl p-6 md:p-12 lg:w-11/12 xl:w-4/5 mx-auto ${bgColor} ${className}`}
    >
      {/* Nagłówek */}
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <h3
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${textColor}`}
        >
          {title}
        </h3>
        {text && (
          <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
            {text}
          </p>
        )}
      </div>

      {/* Lista */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm transition-hover hover:shadow-md border border-transparent hover:border-white/20"
          >
            <CheckCircle2 className="w-6 h-6 mt-0.5 text-blue-600 shrink-0" />
            <span className={`text-base md:text-lg font-medium ${textColor}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
