import Button from "@/app/UI/Buttons/Button";
import Header from "@/app/UI/Header";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Rezerwacje() {
  const t = useTranslations("reservations");
  return (
    <>
      <div className="">
        <section className="">
          <Header text={t("header")} />
          <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 text-center text-xl md:w-3/4 mx-auto">
            <p className="mb-10">{t("text")}</p>
            <Link
              href={"tel:48881201205"}
              className="flex justify-center items-center gap-4 underline"
            >
              <FaPhoneAlt /> +48 881 201 205
            </Link>
            <div className="mt-16">
              <Button link="/mapa-przystankow" text={t("button")} />
            </div>
          </div>
          <div className="md:w-3/4 h-196 bg-neutral-200 mx-auto">
            TU BEDZIE DROPLABS
          </div>
        </section>
      </div>
    </>
  );
}
