import { Church, Coffee, Snowflake, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hrebieniok({ t }) {
  return (
    <div className="py-4 md:py-10 my-16 bg-gray-50">
      <div className="mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Zdjęcie */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/wycieczki/swiatynia-lodowa-hrebieniok/6.webp"
            alt={t("alt.7")}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>

        {/* Treść */}
        <div>
          <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
            {t("offer.2.header")}
          </h2>
          <p className="mb-4 text-sm xl:text-base">{t("offer.2.text")}</p>
          {/* Atrakcje sezonowe */}
          <h3 className="text-xl font-medium mt-6 mb-3">
            {t("offer.2.header2")}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-3">
              <Church className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{t("offer.2.list.1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{t("offer.2.list.2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Snowflake className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{t("offer.2.list.3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Coffee className="text-orange-700 w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{t("offer.2.list.4")}</span>
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
