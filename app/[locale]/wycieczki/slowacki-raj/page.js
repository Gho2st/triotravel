"use client";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import { useState } from "react";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useTranslations } from "next-intl";

export default function SlowackiRaj() {
  const t = useTranslations("offer.tripslist.slowacki-raj");
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const tripItems = [
    "7:00 - " + t("tripprogram.1"),
    "9:00 - " + t("tripprogram.2"),
    "12:00 - " + t("tripprogram.3"),
    "12:30 - " + t("tripprogram.4"),
    "15:00 - " + t("tripprogram.5"),
    "17:00 - " + t("tripprogram.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "120 PLN*"],
    [t("table.2")],
    ["", t("table.additional")],
    [t("table.3"), "4€"],
    [t("table.4"), "3€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/slowacki-raj/slowacki-raj.png"
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
            title={<> {t("tripprogram.header")}</>}
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
            <ul className="text-lg mt-10">
              <li>{t("buttons.1")} </li>
              <li>{t("buttons.2")}</li>
              <li>{t("buttons.3")}</li>
            </ul>
          </div>
        )}
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/slowacki-raj/1.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/slowacki-raj/2.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/slowacki-raj/3.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/slowacki-raj/4.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
