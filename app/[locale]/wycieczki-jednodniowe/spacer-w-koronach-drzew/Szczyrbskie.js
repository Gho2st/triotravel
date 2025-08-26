import {
  MapPin,
  Coffee,
  Camera,
  Sailboat,
  Snowflake,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SzcybrskieJezioroSection({ t }) {
  return (
    <div className="py-4 md:py-10 my-16 bg-gray-50">
      <div className="mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Zdjęcie */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/wycieczki/spacer-w-koronach-drzew/9.webp"
            alt={t("alt.10")}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
          <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Tatry Wysokie, Słowacja
          </span>
        </div>

        {/* Treść */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">{t("offer.2.header")}</h2>
          <p className="mb-4">{t("offer.2.text")}</p>
          {/* Atrakcje sezonowe */}
          <h3 className="text-xl font-medium mt-6 mb-3">
            {t("offer.2.header2")}
          </h3>
          <ul className="grid grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-center gap-2">
              <Sailboat className="text-blue-500 w-5 h-5" />
              {t("offer.2.list.1")}
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="text-green-600 w-5 h-5" /> {t("offer.2.list.2")}
            </li>
            <li className="flex items-center gap-2">
              <Snowflake className="text-cyan-500 w-5 h-5" />
              {t("offer.2.list.3")}
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-brown-500 w-5 h-5" />
              {t("offer.2.list.4")}
            </li>
          </ul>
          {/* Przyciski */}
          <div className="mt-6 flex gap-4">
            <Link
              href="#szczegoly-wycieczki"
              className="px-5 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              {t("offer.2.button1")}
            </Link>
            <Link
              href="/kontakt"
              className="px-5 py-3 border rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
            >
              {t("offer.2.button2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
