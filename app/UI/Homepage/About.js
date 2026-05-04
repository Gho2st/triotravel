import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      className="
      px-6 md:px-20 xl:px-32 2xl:px-[16%] 
      py-16 md:py-20 2xl:py-24 
      overflow-hidden
    "
    >
      {/* === BLOK 1 === */}
      <div
        className="
        flex flex-col lg:flex-row 
        gap-10 lg:gap-16 xl:gap-20
        items-center
      "
      >
        {/* Tekst */}
        <div
          className="
          lg:w-1/2 flex flex-col justify-center 
          text-center lg:text-left
        "
        >
          <h1
            className="
            text-2xl  xl:text-3xl 2xl:text-5xl 
            font-bold leading-tight tracking-tight
            text-gray-900
          "
          >
            {t("header1")}
          </h1>
          <p
            className="
            mt-6 sm:mt-8 lg:mt-10
            text-base xl:text-lg 2xl:text-2xl 
            leading-relaxed text-gray-700
          "
          >
            {t("text")}
          </p>
        </div>

        {/* Obrazek */}
        <div
          className="
          lg:w-1/2 w-full
        "
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/50">
            <Image
              src="/wycieczki/splyw-dunajcem-slowacja/5.webp"
              alt={t("alt.1")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      {/* === BLOK 2 === */}
      <div
        className="
        flex flex-col-reverse lg:flex-row 
        gap-10 lg:gap-16 xl:gap-20
        mt-16 md:mt-20 lg:mt-24
        items-center
      "
      >
        {/* Obrazek */}
        <div
          className="
          lg:w-1/2 w-full
        "
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/50">
            <Image
              src="/wycieczki/spacer-w-koronach-drzew/lato/3.webp"
              alt={t("alt.2")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Tekst */}
        <div
          className="
          lg:w-1/2 flex flex-col justify-center 
          text-center lg:text-left
        "
        >
          <p
            className="
            text-base xl:text-lg 2xl:text-2xl 
            leading-relaxed text-gray-700
          "
          >
            {t("text2")}
          </p>
        </div>
      </div>
    </section>
  );
}
