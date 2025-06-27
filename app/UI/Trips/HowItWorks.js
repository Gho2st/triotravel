import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("offer.howitworks");

  return (
    <>
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
        {t("header")}
      </h2>
      <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray-700">
        {t("text")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 my-16 mb-20 xl:mb-24 text-center">
        <div className="bg-white shadow-xl p-8 rounded-2xl">
          <div className="text-4xl mb-4">1️⃣</div>
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-3">{t("cards.1.header")}</h3>
          <p className="font-light">{t("cards.1.text")}</p>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-2xl">
          <div className="text-4xl mb-4">2️⃣</div>
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-3">{t("cards.2.header")}</h3>
          <p className="font-light">{t("cards.2.text")}</p>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-2xl">
          <div className="text-4xl mb-4">3️⃣</div>
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-3">{t("cards.3.header")}</h3>
          <p className="font-light">{t("cards.3.text")}</p>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-2xl">
          <div className="text-4xl mb-4">4️⃣</div>
          <h3 className="text-xl 2xl:text-2xl font-semibold mb-3">{t("cards.4.header")}</h3>
          <p className="font-light">{t("cards.4.text")}</p>
        </div>
      </div>
    </>
  );
}
