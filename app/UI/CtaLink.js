import { useTranslations } from "next-intl";
import Button from "./Buttons/Button";
export default function CtaLink({ header, text, button }) {
  const t = useTranslations("cta.trips");
  return (
    <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 max-w-6xl mx-auto">
      <div className="text-center bg-customRed p-10 text-white rounded-2xl shadow-2xl">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
          {t("header")}
        </h2>
        <p className="my-8 xl:my-12 font-medium md:text-lg xl:text-xl">
          {t("text")}
        </p>
        <Button text={t("button")} link="/rezerwacje" />
      </div>
    </div>
  );
}
