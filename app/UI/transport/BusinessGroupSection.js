import React from "react";
import { Bus, ClipboardCheck, BedDouble } from "lucide-react";

export default function BusinessGroupsSection({ t }) {
  return (
    <section className="py-10 xl:py-20 2xl:py-32 px-[9%]  bg-gray-50  mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl  xl:text-4xl 2xl:text-5xl leading-snug font-semibold mb-10 text-gray-900">
          {t("business.header")}
        </h2>
        <p className="text-gray-600 max-w-2xl xl:text-xl mt-6 mx-auto">
          {t("business.text")}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {[
          { icon: Bus, text: t("business.1.title"), color: "text-blue-500" },
          {
            icon: ClipboardCheck,
            text: t("business.2.title"),
            color: "text-green-500",
          },
          {
            icon: BedDouble,
            text: t("business.3.title"),
            color: "text-purple-500",
          },
        ].map(({ icon: Icon, text, color }, i) => (
          <div
            key={i}
            className="flex gap-5 items-start shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-all"
          >
            <div className={`  rounded-full ${color}`}>
              <Icon className="w-8 h-8 2xl:h-10 2xl:w-10" />
            </div>
            <p className="text-gray-900 text-lg font-medium leading-snug max-w-xs">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <p className="text-lg font-semibold text-gray-700">
          {t("business.text2")}
        </p>
      </div>
    </section>
  );
}
