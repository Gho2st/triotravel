import { useTranslations } from "next-intl";
export default function FunFact() {
  const t = useTranslations("offer.tripslist.splyw-dunajcem-dluzszy.funfact");
  return (
    <div className="md:flex justify-between gap-24 xl:text-lg">
      <div>
        <h4 className="text-2xl font-semibold">{t("header")}</h4>
        <p className="mt-8 xl:mt-16">{t("text1")}</p>
      </div>
      <div>
        <p>{t("text2")}</p>
        <p className="mt-8 xl:mt-16 font-bold">{t("cta")}</p>
      </div>
    </div>
  );
}
