"use client";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import BackgroundList from "@/app/UI/BackgroundList";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";
import Majer from "@/app/UI/Majer";
import { useTranslations } from "next-intl";

export default function Budapeszt() {
  const t = useTranslations("offer.tripslist.budapeszt");

  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
    t("list.7"),
  ];

  const tripItems = [
    "4:00 - " + t("tripprogram.1"),
    "10:00 - " + t("tripprogram.2"),
    t("tripprogram.3"),
    t("tripprogram.4"),
    "00:00 - " + t("tripprogram.5"),
  ];
  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "300 PLN*"],
    [t("table.2"), "280 PLN*"],
    [t("table.3"), "260 PLN*"],
    ["", t("table.additional")],
    [t("table.4"), "12 €"],
    [t("table.5"), t("table.a1")],
    [t("table.6"), t("table.a2")],
    [t("table.7"), t("table.a3")],
    [t("table.8"), t("table.a4")],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/budapeszt/budapeszt.png"
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
          {t("text")}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
        </div>
        <div className="mt-16">
          <TripProgram
            title={<>{t("tripprogram.header")}</>}
            items={tripItems}
          />
        </div>
        <div className="flex justify-center mt-16">
          <ClickButton
            onClick={() => handleButtonClick("warunki")}
            text={t("buttons.header")}
            bgColor={
              activeSection === "warunki" ? "bg-blue-700" : "bg-customBlue"
            }
          />
        </div>
        {activeSection === "warunki" && (
          <div className="text-center mt-10 md:w-3/4 mx-auto">
            <ul className="xl:text-lg mt-10">
              <li>{t("buttons.1")}</li>
              <li>{t("buttons.2")}</li>
              <li>{t("buttons.3")}</li>
              <li>{t("buttons.4")}</li>
            </ul>
          </div>
        )}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            text={<>{t("list.header")}</>}
            items={customItems}
          />
        </div>
      </section>
      <Majer />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/budapeszt/1.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/2.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/3.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/4.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
