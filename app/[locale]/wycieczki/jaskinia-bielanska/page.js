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
export default function Jaskinia() {
  const t = useTranslations("offer.tripslist.jaskinia-bielanska");
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const customItems = [t("list.1"), t("list.2"), t("list.3")];

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "9:30 - " + t("tripprogram.2"),
    "10:00 - " + t("tripprogram.3"),
    "12:00 - " + t("tripprogram.4"),
    "15:00 - " + t("tripprogram.5"),
    "16:30 - " + t("tripprogram.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "90 PLN"],
    [t("table.2"), "80 PLN"],
    ["", t("table.additional")],
    [t("table.3"), "14€"],
    [t("table.4"), "7€"],
    [t("table.5"), "13€"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/jaskinia-bielanska/jaskinia.png"
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
          <Table headers={tableHeaders} rows={tableRows} />
        </div>
        <div className="mt-16">
          <TripProgram title={t("tripprogram.header")} items={tripItems} />

          <div className="mt-16">
            <BackgroundList title={t("header3")} items={customItems} />
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
                <li>{t("buttons.1")}</li>
                <li>{t("buttons.2")}</li>
                <li>{t("buttons.3")}</li>
                <li>{t("buttons.4")}</li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/1.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/2.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/3.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
