import { useTranslations } from "next-intl";
import Button from "../Buttons/Button";

export default function Cta() {
  const t = useTranslations("cta");

  return (
    <section
      className="bg-img flex justify-center items-center min-h-screen overflow-x-hidden "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(/others/kasprowy.webp)",
      }}
    >
      <div className=" z-10 text-white text-center px-4 py-8">
        <h2 className="text-4xl md:text-7xl font-bold mb-8">{t("header")}</h2>
        <Button text={t("text")} link="/bilety-na-kasprowy-wierch" />
      </div>
    </section>
  );
}
