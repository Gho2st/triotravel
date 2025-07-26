import React from "react";

import { Plane, MapPin, Globe } from "lucide-react";

export default function TransportOffer({ t }) {
  return (
    <section className="py-10 xl:py-20 2xl:py-32 px-[9%]  mx-auto">
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl mx-auto max-w-5xl leading-snug font-semibold text-center mb-16 2xl:mb-32">
        {t("offer.header")}
      </h2>
      <div className="space-y-16">
        {/* Transfery z i na lotniska */}
        <div className="flex flex-col  lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-xl 2xl:text-2xl font-semibold flex items-center gap-2 mb-4">
              <Plane className="w-8 h-8 2xl:w-10 2xl:h-10 text-blue-500" />
              {t("offer.1.title")}
            </h3>
            <p className="text-gray-700 2xl:text-lg">{t("offer.1.text")}</p>
          </div>
        </div>

        {/* Transport lokalny */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-xl 2xl:text-2xl font-semibold flex items-center gap-2 mb-4">
              <MapPin className="w-8 h-8 2xl:w-10 2xl:h-10 text-green-500" />
              {t("offer.2.title")}
            </h3>
            <p className="text-gray-700 2xl:text-lg">{t("offer.2.text")}</p>
          </div>
        </div>

        {/* Transport krajowy i międzynarodowy */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-xl 2xl:text-2xl font-semibold flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 2xl:w-10 2xl:h-10 text-purple-500" />
              {t("offer.3.title")}
            </h3>
            <p className="text-gray-700 2xl:text-lg">{t("offer.3.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
