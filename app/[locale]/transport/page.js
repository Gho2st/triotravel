import Header from "@/app/UI/Header";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
import Button from "@/app/UI/Buttons/Button";

export default function Transport() {
  const t = useTranslations("transport");
  return (
    <>
      <Header text={t("header")} />
      <div className="md:w-2/5 mx-auto">
        <Image
          src={"/transport/bus.png"}
          width={500}
          height={500}
          layout="responsive"
          alt="bus ze śladem przejechanej trasy"
        />
      </div>
      <section>
        <p className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-12  md:w-3/4 mx-auto  xl:text-xl text-center">
          {t("text")}
        </p>
        <div className="flex justify-center mb-10 md:mb-20">
          <Button link="/mapa-przystankow" text={t("button")} />
        </div>
        <Gallery
          images={[
            { url: "/transport/1.png", alt: "First image" },
            { url: "/transport/2.png", alt: "2 image" },
            { url: "/transport/3.png", alt: "3 image" },
            { url: "/transport/4.png", alt: "4 image" },
          ]}
        />
        <div className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-10 md:pb-24 md:w-3/4 mx-auto  xl:text-xl text-center">
          <h2 className="text-xl  xl:text-3xl 2xl:text-4xl leading-snug mt-8 md:mt-16">
            <span className="font-bold">Trio Travel </span> -{" "}
            <span className="font-bold">{t("header3")} </span> {t("header2")}
          </h2>
          <p className="mt-10">{t("text2")}</p>
        </div>
      </section>
    </>
  );
}
