"use client";
import Header from "@/app/UI/Header";
import Image from "next/image";
import Table from "@/app/UI/Table";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Gallery from "@/app/UI/Slider";

export default function Kasprowy() {
  const t = useTranslations("offer.tripslist.kasprowy");
  // Przykładowe dane dla tabeli
  const tableHeaders = [
    t("table.header1"),
    t("table.header2"),
    t("table.header3"),
  ];
  const tableRows = [
    [t("table.1"), "140 PLN", "120 PLN"],
    [t("table.2"), "130 PLN", "100 PLN"],
    [t("table.3"), "160 PLN", "140 PLN"],
    [t("table.4"), "140 PLN", "120 PLN"],
  ];

  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState("ulgi"); // Domyślnie "Ulgi"

  // Funkcja do zmiany aktywnej sekcji
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Header text={t("header")} />
      <div className="relative h-136 w-full">
        <Image
          className="object-cover"
          src="/others/kasprowy.png"
          fill
          alt="kolejka jadąca na Kasprowy Wierch"
        />
      </div>
      {/* tabelka  */}
      <section className="mx-auto px-5 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <Table headers={tableHeaders} rows={tableRows} text={t("table.text")} />
        <div className="grid grid-cols-3 gap-2 md:gap-16 justify-center mt-16">
          <ClickButton
            onClick={() => handleButtonClick("uwagi")}
            text={t("buttons.1")}
            bgColor={
              activeSection === "uwagi" ? "bg-blue-700" : "bg-customBlue"
            }
          />
          <ClickButton
            onClick={() => handleButtonClick("info")}
            text={t("buttons.2")}
            bgColor={activeSection === "info" ? "bg-blue-700" : "bg-customBlue"}
          />
          <ClickButton
            onClick={() => handleButtonClick("ulgi")}
            text={t("buttons.3")}
            bgColor={activeSection === "ulgi" ? "bg-blue-700" : "bg-customBlue"}
          />
        </div>
        <div>
          {activeSection === "uwagi" && (
            <div className="text-center mt-20 md:w-3/4 mx-auto">
              <h3 className="text-2xl xl:text-3xl font-medium">
                {t("buttons.1")}
              </h3>
              <p className="xl:text-lg mt-10">{t("buttons.text1")}</p>
            </div>
          )}
          {activeSection === "info" && (
            <div className="text-center mt-20 md:w-3/4 mx-auto">
              <h3 className="text-2xl xl:text-3xl font-medium">
                {t("buttons.2")}
              </h3>
              <p className="xl:text-lg mt-10">{t("buttons.text2")}</p>
            </div>
          )}
          {activeSection === "ulgi" && (
            <div className="text-center mt-20 md:w-3/4 mx-auto">
              <h3 className="text-2xl xl:text-3xl font-medium">
                {t("buttons.3")}
              </h3>
              <p className="xl:text-lg mt-10">{t("buttons.text3")}</p>
            </div>
          )}
        </div>
      </section>
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/kasprowy-wierch/1.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/2.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/3.png", alt: "First image" },
            { url: "/wycieczki/kasprowy-wierch/4.png", alt: "First image" },
          ]}
        />
      </div>
    </>
  );
}
