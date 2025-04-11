"use client";
import Header from "@/app/UI/Header";
import Image from "next/image";
import Table from "@/app/UI/Table";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";

export default function Kasprowy() {
  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Sezon wysoki", "Sezon niski"];
  const tableRows = [
    ["Normalny w górę", "140 PLN", "120 PLN"],
    ["Ulgowy w górę", "130 PLN", "100 PLN"],
    ["Normalny w obie strony", "160 PLN", "140 PLN"],
    ["Ulgowy w obie strony", "140 PLN", "120 PLN"],
  ];

  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState("ulgi"); // Domyślnie "Ulgi"

  // Funkcja do zmiany aktywnej sekcji
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Header text="Bilety Na Kasprowy Wierch" />
      <div className="relative h-136 w-full">
        <Image
          className="object-cover"
          src="/others/kasprowy.png"
          fill
          alt="kolejka jadąca na Kasprowy Wierch"
        />
      </div>
      {/* tabelka  */}
      <section className="mx-auto px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <h2 className="text-4xl text-center mb-16 font-semibold">
          Cennik Biletów na Kasprowy Wierch
        </h2>
        <Table headers={tableHeaders} rows={tableRows} />
        <div className="grid grid-cols-3 gap-16 justify-center mt-16">
          <ClickButton
            onClick={() => handleButtonClick("uwagi")}
            text="Uwagi"
            bgColor={
              activeSection === "uwagi" ? "bg-blue-700" : "bg-customBlue"
            }
          />
          <ClickButton
            onClick={() => handleButtonClick("info")}
            text="Informacje Użyteczne"
            bgColor={activeSection === "info" ? "bg-blue-700" : "bg-customBlue"}
          />
          <ClickButton
            onClick={() => handleButtonClick("ulgi")}
            text="Ulgi"
            bgColor={activeSection === "ulgi" ? "bg-blue-700" : "bg-customBlue"}
          />
        </div>
        <div>
          {activeSection === "uwagi" && (
            <div className="text-center mt-20 w-3/4 mx-auto">
              <h3 className="text-3xl font-medium">Uwagi</h3>
              <p className="text-lg mt-10">
                Dzieciom do 10 lat. Dzieciom i młodzieży szkolnej do 15 lat na
                podstawie ważnej legitymacji szkolnej. Studentom do 26 roku
                życia (studenci, uczniowie urodzeni po 01.01.1998 r.) na
                podstawie ważnej polskiej legitymacji studenckiej, legitymacji
                ISIC oraz EURO 26. Osobom po 65 roku życia (urodzeni przed
                31.12.1959) za okazaniem dokumentu potwierdzającego wiek.
                Opiekunom grup szkolnych (1 opiekun na 10 podopiecznych).
                Przewodnikom prowadzącym grupy przysługuje bilet dla przewodnika
                w cenie 35 zł.
              </p>
            </div>
          )}
          {activeSection === "info" && (
            <div className="text-center mt-20 w-3/4 mx-auto">
              <h3 className="text-3xl font-medium">Informacje Użyteczne</h3>
              <p className="text-lg mt-10">
                Kasa w Kuźnicach prowadzi sprzedaż tylko na dzień bieżący,
                bezpośrednio przed odjazdem kolei. Przy czym wszystkie osoby,
                dla których nabywane są bilety, muszą znajdować się bezpośrednio
                przed kasą. Po zakupie biletów następuje odprawa pasażerska i
                przejście na peron do odjazdu. <br />
                Na każdym bilecie widnieje informacja o ważności biletu. Bilety
                na zjazd koleją linową z Kasprowego Wierchu można nabyć tylko w
                kasie stacji górnej w miarę wolnych miejsc. Pierwszeństwo w
                zjeździe mają osoby posiadające bilet powrotny (tzn. do góry i w
                dół). <br />
                Przewidywany czas pobytu na Kasprowym Wierchu przy zakupie
                biletów powrotnych wynosi ok. 1 godz. 40 min. (tzn. jeśli wjazd
                godz. 8:00, to zjazd godz. 10:00; przejazd koleją ok. 20 min.).
                Na teren Tatrzańskiego Parku Narodowego nie można wwozić psów
                oraz innych zwierząt. <br />W cenę biletu wliczony jest bilet
                wstępu do Tatrzańskiego Parku Narodowego, ważny w dniu zakupu
                biletu na KL Kasprowy Wierch.
              </p>
            </div>
          )}
          {activeSection === "ulgi" && (
            <div className="text-center mt-20 w-3/4 mx-auto">
              <h3 className="text-3xl font-medium">
                Przejazd Darmowy Przysługuje
              </h3>
              <p className="text-lg mt-10">
                Dzieciom do 4 lat. Przejazd darmowy na podstawie biletu
                opiekuna, wiek dziecka należy potwierdzić ważnym dokumentem. Nie
                pobiera się dodatkowej opłaty za wózek dziecięcy.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
