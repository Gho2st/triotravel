"use client";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import Majer from "@/app/UI/Majer";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";

export default function Tatry() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const tripItems = [
    "8:30 - Wyjazd z Zakopanego",
    "Zwiedzanie Zamku Orawskiego z przewodnikiem (ok. 90 min)",
    "Zwiedzanie Jaskini Demianowskiej (ok. 70 min)",
    "Czas wolny Liptowski Mikulasz (ok. 70 min)",
    "ok. 19:00 - Planowany powrót do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Zamek Orawski"];
  const tableRows = [
    ["Bilet normalny", "105 PLN*"],
    [
      "Bilet ulgowy (mlodzież szkolna, studenci, emeryci za okazaniem legitymacji)",
      "99 PLN*",
    ],
    ["Bilet ulgowy (dzieci do 14 lat)", "95 PLN*"],
    ["", "Dodatkowo płatne"],
    [
      "Jaskinia Demianowska",
      "dorośli 12€ , studenci/emeryci/renciści 11€ ,  dzieci w wieku 6-15 lat 6€**",
    ],
    ["* fotogrowanie/kamera", "10 E**"],
    [
      "Zamek Orawski",
      " dorośli 9€, studenci/emeryci/renciści/dzieci 4,5€, dzieci do lat 6 GRATIS**",
    ],
    ["* fotogrowanie/kamera", "3€ fotografowanie/5€ kamera**"],
  ];
  return (
    <>
      <Header text="Dookoła Tatr" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/dookola-tatr/tatry.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Co oferujemy?" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          <strong>Zamek Orawski </strong> Wzniesiony w XIII wieku na potężnej,
          wysokiej na 112 metrów skale Zamek Orawski, jest najoryginalniej
          położonym obiektem na Słowacji. Przebudowywany i rozbudowywany na
          przestrzeni kilkuset lat, dziś stanowi świetny przykład różnych
          technik budownictwa obronnego. Zamek pierwotnie był siedzibą
          właścicieli Orawy. W 1868 roku utworzono w nim pierwszą na ziemiach
          słowackich ekspozycję muzealną. Funkcje muzealne zamek pełni do dziś.
          Podczas zwiedzania zobaczą państwo ekspozycje o charakterze
          historycznym, archeologicznym i etnograficznym. Zwieńczeniem
          przechadzki po muzeum, będzie wejście do najwyżej położonych komnat
          zamkowych. <br></br> <br></br>{" "}
          <strong>Jaskinia Demianowska Wolności </strong> - O atrakcyjności
          Jaskini Demianowskiej Wolności, niech świadczy fakt, iż jest to
          najczęściej odwiedzana jaskinia Słowacji. Wielokolorowe formy
          naciekowe o zróżnicowanych kształtach, tufowe jeziorka i podziemna
          rzeka sprawiają, że obiekt ten uznawany jest za jedną z
          najpiękniejszych jaskiń w Europie.
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={
              <>
                * Cena obejmuje: Przejazd komfortowym autokarem, opiekę
                wykwalifikowanego pilota, ubezpieczenie NNW, KL. <br></br>
                <br></br> **Ceny biletów wstępów mogą ulec zmianie
              </>
            }
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
                Wymagany ważny paszport lub dowód osobisty dla każdego
                uczestnika wycieczki bez względu na wiek.
              </li>
              <li>
                Organizator nie odpowiada za zmianę cen wstępów w trakcie
                sezonu.
              </li>
              <li>Kolejność zwiedzania może ulec zmianie.</li>
              <li>
                Odwołanie imprezy z powodu braku odpowiedniej ilości
                uczestników, może nastąpić najpóźniej na 1 dzień przed
                rozpoczęciem imprezy do godziny 19.00.
              </li>
            </ul>
          </div>
        )}
      </section>
      <Majer />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/dookola-tatr/tatry.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/dookola-tatr/tatry.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/dookola-tatr/tatry.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/dookola-tatr/tatry.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
