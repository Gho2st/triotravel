import { Mountain, Timer, Bed, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StarySmokovec({ t }) {
  return (
    <div className="py-4 md:py-10 my-16 bg-gray-50">
      <div className=" mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Treść */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-semibold mb-4">{t("offer.1.header")}</h2>
          <p className=" mb-4">{t("offer.1.text")}</p>

          {/* Atrakcje na trasie */}
          <h3 className="text-xl font-medium mt-6 mb-3">
            {t("offer.1.header2")}
          </h3>
          <ul className="grid grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-center gap-2">
              <Mountain className="text-indigo-500 w-5 h-5" />
              {t("offer.1.list.1")}
            </li>
            <li className="flex items-center gap-2">
              <Timer className="text-green-600 w-5 h-5" /> {t("offer.1.list.2")}
            </li>
            <li className="flex items-center gap-2">
              <Bed className="text-yellow-500 w-5 h-5" /> {t("offer.1.list.3")}
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-500 w-5 h-5" /> {t("offer.1.list.4")}
            </li>
          </ul>

          {/* Przyciski */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/rezerwacje"
              className="px-5 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              {t("offer.1.button1")}
            </Link>
            <Link
              href="#galeria"
              className="px-5 py-3 border rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
            >
              {t("offer.1.button2")}
            </Link>
          </div>
        </div>

        {/* Zdjęcie */}
        <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/wycieczki/swiatynia-lodowa-hrebieniok/4.webp"
            alt={t("alt.5")}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
