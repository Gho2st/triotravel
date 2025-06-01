import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
export default function TatryZakopane() {
  const t = useTranslations("offer.tripslist.tatry-i-zakopane.cta");
  return (
    <div className="md:flex justify-between gap-24 xl:text-lg">
      <div>
        <h4 className="text-2xl font-semibold">{t("header")}</h4>
        <p className="mt-8 xl:mt-16">{t("text1")}</p>
      </div>
      <div>
        <p className="mb-8 xl:mb-16">{t("text2")}</p>
        <Link
          className="font-bold underline text-customBlue"
          href={"/wycieczki/tatry-i-zakopane"}
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
}
