import Image from "next/image";
import LineHeader from "./LineHeader";
import { useTranslations } from "next-intl";

export default function Majer() {
  const t = useTranslations("majer");
  return (
    <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      <LineHeader text={t("header")} />
      <div className="w-1/2 md:w-2/5 xl:w-1/5 mx-auto mt-8 xl:mt-16">
        <Image
          src={"/logo/majer.png"}
          width={500}
          height={500}
          layout="responsive"
          alt="logo firmy Majer"
        />
      </div>
    </div>
  );
}
