import { useTranslations } from "next-intl";

export default function Why() {
  const t = useTranslations("why");
  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 overflow-x-hidden">
      <h2 className="md:w-3/4 xl:w-2/3 text-3xl md:text-5xl leading-snug mb-12 xl:mb-24 xl:pt-20">
        {t("header")}
        <span className="font-bold"> Trio Travel? </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 text-center ">
        {/* card1 */}
        <div className="p-6 py-10 shadow-2xl rounded-3xl  border-4 border-[#005588]">
          <h3 className="text-2xl md:text-3xl mb-10 font-medium">
            {t("cards.1.header")}
          </h3>
          <p className="md:text-lg">{t("cards.1.text")}</p>
        </div>
        <div className="p-6 py-10 shadow-2xl rounded-3xl  border-4 border-[#005588] ">
          <h3 className="text-2xl md:text-3xl mb-10 font-medium">
            {t("cards.2.header")}
          </h3>
          <p className="md:text-lg">{t("cards.2.text")}</p>
        </div>
        <div className="p-6 py-10 shadow-2xl rounded-3xl  border-4 border-[#005588]">
          <h3 className="text-2xl md:text-3xl mb-10 font-medium">
            {t("cards.3.header")}
          </h3>
          <p className="md:text-lg">{t("cards.3.text")}</p>
        </div>
      </div>
    </section>
  );
}
