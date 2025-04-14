"use client";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import { useState } from "react";
import ClickButton from "@/app/UI/Buttons/ClickButton";

export default function SlowackiRaj() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const tripItems = [
    "7:00 - Wyjazd z Zakopanego",
    "9:00 - Wędrówka trasą - Sucha Bela (drabinki)",
    "12:00 - Zakończenie trasy, czas wolny.",
    "12:30 - Kontynuacja wycieczki, powrót do autokaru. Możliwość zjazdu rowerem (7 euro) lub pieszo.",
    "15:00 - Wyjazd do Zakopanego",
    "17:00 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Słowacki Raj"];
  const tableRows = [
    ["Bilet normalny", "120 PLN*"],
    ["Bilet ulgowy (dzieci do 10 lat)", "100 PLN*"],
    ["", "Dodatkowo płatne (Wstęp do Słowackiego Parku Narodowego)"],
    ["Bilet normalny", "4€"],
    ["Bilet ulgowy (dzieci do 10 lat i seniorzy powyżej 62 lat)", "3€"],
  ];
  return (
    <>
      <Header text="Słowacki Raj" />
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
        <LineHeader text="Co oferujemy?" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Zapraszamy Państwa na pieszą wycieczkę wzdłuż potoku Sucha Bela z
          licznymi mostkami,wodospadami przerzuconymi nad potokiem, metalowymi
          drabinami mającymi kilka metrów wysokości, za pomocą których pokonuje
          się wysokość. Woda spływająca w tych miejscach tworzy niepowtarzalne
          wodospady. To trasa dla średnio zaawansowanego turysty posiadającego
          trochę zręczności i brak lęku wysokości. <br></br>
          <br></br> <strong>WĄWÓZ SUCHA BELA (SUCHÁ BELÁ)</strong>
          Jednokierunkowy zielony szlak, mający początek w Podlesku, za pomocą
          licznych drabinek drewnianych oraz metalowych przeprawimy się przez
          wąwóz Sucha Bela. Po drodze mijamy piękne wodospady: Okienkowy oraz
          Korytowy. To jedno z najbardziej malowniczych i najchętniej
          odwiedzanych miejsc w całym parku
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: opiekę kierowcy podczas wycieczki, ubezpieczenie NNW oraz transport z Zakopanego"
          />
        </div>
        <div className="mt-16 md:w-3/4 mx-auto">
          <TripProgram title={<>Program wycieczki:</>} items={tripItems} />
        </div>
        <div className="flex justify-center mt-16">
          <ClickButton
            onClick={() => handleButtonClick("warunki")}
            text="Warunki Uczestnictwa"
            bgColor={
              activeSection === "warunki" ? "bg-blue-700" : "bg-customBlue"
            }
          />
        </div>
        {activeSection === "warunki" && (
          <div className="text-center mt-10 md:w-3/4 mx-auto">
            <ul className="text-lg mt-10">
              <li>
                Każdy uczestnik musi posiadać ważny paszport lub dowód osobisty.
              </li>
              <li>
                W przypadku złej pogody lub nieodpowiednich warunków na szlaku
                zastrzegamy sobie prawo do zmiany trasy wycieczki lub kolejności
                zwiedzania.
              </li>
              <li>
                Odwołanie imprezy z powodu braku odpowiedniej ilości
                uczestników, może nastąpić najpóźniej na 1 dzień przed
                rozpoczęciem imprezy do godziny 21.00.
              </li>
            </ul>
          </div>
        )}
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/slowacki-raj/slowacki-raj.png",
              alt: "First image",
            },
            {
                url: "/wycieczki/slowacki-raj/slowacki-raj.png",
                alt: "First image",
            },
            {
                url: "/wycieczki/slowacki-raj/slowacki-raj.png",
                alt: "First image",
            },
            {
                url: "/wycieczki/slowacki-raj/slowacki-raj.png",
                alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
