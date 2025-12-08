import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 overflow-hidden text-center ">
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-snug ">
            {t("header1")}
          </h1>
          <p className="mt-10 text-lg xl:text-xl 2xl:text-2xl leading-snug">
            {t("text")}
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={"/wycieczki/spacer-w-koronach-drzew/zima/2.webp"}
            width={100}
            height={100}
            layout="responsive"
            alt={t("alt.1")}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-20 mt-16 md:mt-20">
        <div className="lg:w-1/2">
          <Image
            src={"/kuligi/photos/4.webp"}
            width={100}
            height={100}
            layout="responsive"
            alt={t("alt.2")}
            className="rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg xl:text-xl 2xl:text-2xl leading-snug">
            {t("text2")}
          </p>
        </div>
      </div>
    </section>
  );
}
