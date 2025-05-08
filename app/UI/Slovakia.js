import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Slovakia() {
  const t = useTranslations("slovakia");
  return (
    <div className="flex justify-center items-center my-16">
      <div className="flex items-center gap-5 p-5 bg-gray-100 rounded-lg max-w-md">
        {/* Mapa Słowacji z pliku SVG */}
        <Image
          src="/slovakia.svg"
          width={100}
          height={100}
          alt={t("alt")}
          className="w-24 h-auto"
        />

        {/* Tekst promocyjny */}
        <div>
          <h3 className="text-2xl font-bold text-customBlue m-0">
            {t("header")}
          </h3>
          <p className="text-base text-gray-700 mt-1">{t("text")}</p>
        </div>
      </div>
    </div>
  );
}
