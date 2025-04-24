"use client";
import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";
import { useTranslations } from "next-intl";
export default function Spacer() {
  const t = useTranslations("offer.tripslist.spacer-w-koronach-drzew");
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const customItems = [t("list.1"), t("list.2")];

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "10:00 - " + t("tripprogram.2"),
    "10:30 - " + t("tripprogram.3"),
    "12:30 - " + t("tripprogram.4"),
    "13:00 - " + t("tripprogram.5"),
    "15:30 - " + t("tripprogram.6"),
    "16:00 - " + t("tripprogram.7"),
    "17:00 - " + t("tripprogram.8"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "80 PLN*"],
    [t("table.2"), "75 PLN*"],
    ["", t("table.additional")],
    [t("table.1"), "30€"],
    [t("table.2"), "24€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/spacer-w-koronach-drzew/korony.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>
        <div className="mt-16">
          <BackgroundList title={t("header3")} items={customItems} />
          <TripProgram title={t("tripprogram.header")} items={tripItems} />
          <p className="text-center mt-16 text-lg">{t("tripprogram.text")}</p>
          <div className="flex justify-center mt-16">
            <ClickButton
              onClick={() => handleButtonClick("warunki")}
              text={t("tripprogram.button")}
              bgColor={
                activeSection === "warunki" ? "bg-blue-700" : "bg-customBlue"
              }
            />
          </div>
          {activeSection === "warunki" && (
            <div className="text-center mt-10 md:w-3/4 mx-auto">
              <p className="text-lg mt-10">{t("tripprogram.text2")}</p>
            </div>
          )}
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/spacer-w-koronach-drzew/1.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/spacer-w-koronach-drzew/2.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/spacer-w-koronach-drzew/3.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/spacer-w-koronach-drzew/4.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
