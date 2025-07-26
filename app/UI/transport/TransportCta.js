import React from "react";
import { Users, FileText, Wrench } from "lucide-react";

import Button from "../Buttons/Button";

export default function TransportCta({ t }) {
  return (
    <section className="px-[9%] py-10 xl:py-20 ">
      <div className="md:w-3/4 mx-auto xl:text-xl text-center">
        <h2 className="text-xl  xl:text-3xl 2xl:text-4xl leading-snug mt-8 md:mt-16">
          {t.rich("cta.header", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </h2>
        <p className="mt-10">{t("cta.text")}</p>
      </div>
      <div className="mt-20 text-center">
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {[
            {
              icon: FileText,
              text: t("cta.1.title"),
              color: "text-blue-600",
            },
            {
              icon: Users,
              text: t("cta.2.title"),
              color: "text-green-600",
            },
            {
              icon: Wrench,
              text: t("cta.3.title"),
              color: "text-yellow-500",
            },
          ].map(({ icon: Icon, text, color }, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-full">
                <Icon className={`w-8 h-8 2xl:h-10 2xl:w-10 ${color}`} />
              </div>
              <p className="text-gray-700 text-lg 2xl:text-xl leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className=" text-lg text-gray-700 max-w-2xl mx-auto my-10">
          {t("cta.text2")}
        </p>

        <Button link="/kontakt" text={t("cta.button")} />
      </div>
    </section>
  );
}
