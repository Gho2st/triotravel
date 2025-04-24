"use client";
import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import FunFact from "@/app/UI/FunFact";
import { useState } from "react";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useTranslations } from "next-intl";

export default function SplywKrotszy() {
  const t = useTranslations("offer.tripslist.splyw-dunajcem-krotszy");
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
  ];

  const tripItems = [
    "8:00 - " + t("tripprogram.1"),
    "10:00 - " + t("tripprogram.2"),
    "12:30 - " + t("tripprogram.3"),
    "13:00 - " + t("tripprogram.4"),
    "15:00 - " + t("tripprogram.5"),
    "15:30 - " + t("tripprogram.6"),
    "16:00 - " + t("tripprogram.7"),
    "17:00 - " + t("tripprogram.8"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "150 PLN"],
    [t("table.2"), "130 PLN"],
    [t("table.3"), "70 PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/splyw-dunajcem-dluzszy/splyw.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Spływ tratwami drewnianymi na rzece Dunajec w obliczu natury"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t("text")}
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            text={t("list.header")}
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          {t("info")}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={t("table.text")}
          />
          <TripProgram
            title={<>{t("tripprogram.header")}</>}
            items={tripItems}
          />
        </div>
      </section>
      <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <FunFact />
      </div>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/splyw-dunajcem-dluzszy/1.jpg",
              alt: "First image",
            },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/2.jpg", alt: "2 image" },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/3.png", alt: "3 image" },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/4.jpg", alt: "4 image" },
          ]}
        />
      </div>
    </>
  );
}
