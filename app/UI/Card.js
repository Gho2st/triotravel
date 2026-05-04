import Image from "next/image";
import Button from "@/app/UI/Buttons/Button";
import { useTranslations } from "next-intl";

export default function Card({
  article,
  isPopular = false,
  variant = "default",
}) {
  const t = useTranslations("offer");

  const isHero = variant === "hero";

  return (
    <article
      itemScope
      itemType="https://schema.org/TouristTrip"
      className={`
        group relative flex flex-col 
        bg-white rounded-3xl overflow-hidden
        shadow-md hover:shadow-2xl
        ring-1 ring-gray-100 hover:ring-customBlue/20
        transition-all duration-500 ease-out
        hover:-translate-y-1
        h-full w-full
        ${isHero ? "lg:scale-[1.02]" : ""}
      `}
    >
      {/* Obrazek */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          itemProp="image"
          src={article.image}
          alt={article.title}
          fill
          sizes={
            isHero
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          }
          className="
            object-cover 
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />
        {/* Gradient overlay */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-t from-black/30 via-transparent to-transparent
            opacity-60 group-hover:opacity-80 
            transition-opacity duration-500
          "
        />

        {/* 🌟 Badge BESTSELLER */}
        {isPopular && (
          <span
            className="
              absolute top-4 left-4 z-10
              flex items-center gap-1.5
              bg-white/95 backdrop-blur-sm
              text-xs sm:text-sm font-bold text-gray-900
              px-3 py-1.5 rounded-full 
              shadow-lg
              ring-1 ring-black/5
            "
          >
            <span className="text-amber-500">⭐</span>
            <span>Bestseller</span>
          </span>
        )}

        {/* Badge HERO - dla wariantu hero */}
        {isHero && (
          <span
            className="
              absolute top-4 right-4 z-10
              bg-customBlue text-white
              text-xs font-bold uppercase tracking-wider
              px-3 py-1.5 rounded-full 
              shadow-lg
            "
          >
            Top wybór
          </span>
        )}
      </div>

      {/* Treść */}
      <div
        className={`flex flex-col flex-1 p-5 sm:p-6 gap-3 sm:gap-4 ${isHero ? "lg:p-8" : ""}`}
      >
        <h3
          itemProp="name"
          className={`
            font-bold text-gray-900 
            leading-tight tracking-tight
            line-clamp-2
            text-lg sm:text-xl 2xl:text-2xl
          `}
        >
          {article.title}
        </h3>

        <p
          itemProp="description"
          className={`
            text-gray-600 leading-relaxed font-light
            line-clamp-3 flex-1
            text-sm 2xl:text-base
          `}
        >
          {article.p}
        </p>

        {/* Przycisk - przyklejony do dołu */}
        <div className="pt-2 mt-auto">
          <link itemProp="url" href={article.link} />
          <Button
            text={t("button")}
            link={article.link}
            bgColor="bg-customBlue"
            textColor="text-white"
          />
        </div>
      </div>
    </article>
  );
}
