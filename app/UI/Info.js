import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Info() {
  const t = useTranslations("info");
  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      <div className="flex justify-center">
        <a
          href="/regulamin.pdf"
          className="text-center underline uppercase text-2xl 2xl:text-3xl mb-20 font-bold"
        >
          {t("header")}
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-16">
        <div className="w-1/2 mx-auto md:mx-0 md:w-1/6">
          <Image
            src="/others/pfr.webp"
            width={500}
            height={500}
            layout="responsive"
            alt="Logo Polskiego Funduszu Rozwoju"
          />
        </div>
        <p className="md:w-1/2 mt-10 md:mt-0 text-lg text-center md:text-left">
          {t("text")}
          <span className="text-customRed "> {t("text2")} </span>
          {t("text3")}
        </p>
      </div>
    </section>
  );
}
