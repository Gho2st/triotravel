import Button from "@/app/UI/Buttons/Button";
import Header from "@/app/UI/Header";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Script from "next/script"; // <-- to dodaj!
import { useTranslations } from "next-intl";

export default function Rezerwacje() {
  const t = useTranslations("reservations");

  return (
    <>
      <div>
        <section>
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

          {/* Początek elementu sprzedażowego Droplabs */}
          <div className="md:w-3/4 mx-auto">
            <iframe
              id="dl-widget"
              style={{
                border: "0",
                width: "100%",
                padding: "0",
                margin: "0 auto",
                minHeight: "200px",
                maxWidth: "1000px",
                display: "block",
              }}
              src="https://widget.droplabs.pl/index.html?facilityId=222&onlineGroupId=4681"
              title="DropLabs Rezerwacje"
            ></iframe>
          </div>

          <Script
            src="https://widget.droplabs.pl/widget.js"
            strategy="afterInteractive"
          />
          {/* Koniec elementu sprzedażowego Droplabs */}
        </section>
      </div>
    </>
  );
}
