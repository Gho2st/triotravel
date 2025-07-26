import React from "react";

import { Bus, ShieldCheck, Clock, Tag } from "lucide-react";

export default function WhyTransport({ t }) {
  return (
    <section className="px-[9%] py-10 xl:py-20 2xl:py-32 bg-gray-50">
      <h2 className="text-3xl xl:text-4xl  2xl:text-5xl mx-auto max-w-5xl leading-snug text-center font-semibold mb-12 xl:mb-16 2xl:mb-32">
        {t("why.header")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-all">
          <Bus className="w-8 h-8 2xl:w-10 2xl:h-10 text-blue-600 mb-4" />
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-4">
            {t("why.1.title")}
          </h3>
          <p className=" text-gray-700">{t("why.1.text")}</p>
        </div>

        <div className="shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-all">
          <ShieldCheck className="w-8 h-8 2xl:w-10 2xl:h-10 text-blue-600 mb-4" />
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-4">
            {t("why.2.title")}
          </h3>
          <p className=" text-gray-700">{t("why.2.text")}</p>
        </div>

        <div className="shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-all">
          <Clock className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-4">
            {t("why.3.title")}
          </h3>
          <p className=" text-gray-700">{t("why.3.text")}</p>
        </div>

        <div className="shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-all">
          <Tag className="w-8 h-8 2xl:w-10 2xl:h-10 text-blue-600 mb-4" />
          <h3 className="text-xl xl:text-2xl font-semibold mb-4">
            {t("why.4.title")}
          </h3>
          <p className=" text-gray-700">{t("why.4.text")}</p>
        </div>
      </div>
    </section>
  );
}
