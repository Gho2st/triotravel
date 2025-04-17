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

export default function SplywKrotszy() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const customItems = [
    <>
      <strong>Rejs statkiem po Jeziorze Czorsztyńskim</strong> - (Podczas rejsu
      statkiem spacerowym będziesz mógł podziwiać zaporę wodną, ruiny zamku
      Czorsztyńskiego, zamek Niedzica, skansen Czorsztyński oraz przepiękny
      górski krajobraz). Taki rejs to przygoda, która na długo zostanie w twojej
      pamięci!
    </>,
    <>
      <strong>Zamek w Niedzicy </strong> - gdzie więziono i torturowano
      Janosika.
    </>,
    <>
      <strong>Zaporę Czorsztyńską</strong> - wraz z spektakularnym malowidłem
      wykonanym w technice 3D
    </>,
    <>
      <strong>Zaporę Czorsztyńską</strong> - wraz z spektakularnym malowidłem
      wykonanym w technice 3D
    </>,

    "Park Miniatur Podhala, Orawy i Spisza, park linowy.",
    "Wracając do Zakopanego zatrzymamy się w Dębnie, gdzie znajduje się zabytkowy drewniany Kościół z XV w wpisany na listę UNESCO - prelekcja z Panią kustosz ok. 20 min.",
  ];

  const tripItems = [
    "8:00 - Wyjazd z Zakopanego",
    "10:00 - Spływ tratwami z miejscowości Majere (Słowacja) po Dunajcu (czas spływu około 1,5 -2 h) do przystani w Leśnicy (Słowacja)",
    "12:30 - Wyjazd do Niedzicy",
    "13:00 - Czas wolny",
    "15:00 - Przejazd do Dębna",
    "15:30 - Zwiedzanie Kościółka z Panią Kustosz (około 20 minut)",
    "16:00 - Wyjazd powrotny",
    "17:00 - Planowy przyjazd do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Spływ Dunajcem 2.5h"];
  const tableRows = [
    ["Bilet normalny", "150 PLN"],
    ["Bilet ulgowy (do 10 lat)", "130 PLN"],
    ["Bilet ulgowy (do 3 lat)", "70 PLN"],
  ];
  return (
    <>
      <Header text="Spływ Dunajcem 1.5h" />
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
        <LineHeader text="Co oferujemy?" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          Przygotowaliśmy dla Państwa szereg niezwykle ciekawych atrakcji, które
          z pewnością uczynią czas Państwa wypoczynku szalenie interesującym i
          niezapomnianym. Proponowany przez nas spływ Dunajcem z Zakopanego to
          rewelacyjny sposób na to, aby należycie nacieszyć się pięknymi
          krajobrazami, a zarazem wiele zwiedzić. Flisacy umilą go Państwu
          fascynującymi opowieściami i legendami związanymi z rzeką oraz jej
          okolicami. Poza spływem na drewnianej tratwie, skąd nacieszycie
          Państwo oczy widokiem otaczających Pienin, oferta obejmuje również
          możliwość zwiedzania zamku w Niedzicy, zapory na Dunajcu czy Parku
          Miniatur Podhala, Orawy i Spisza.  
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Wycieczka w Pieniny: Spływ i Niedzica"
            text={
              <>
                Podczas wycieczki w Pieniny, poza główną atrakcją, którą jest
                spływ na drewnianych tratwach-odwiedzisz również Niedzicę, w
                której do wyboru masz <strong>jedną</strong> z atrakcji:
              </>
            }
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          Sezon flisacki trwa od 1 kwietnia do 31 października - świątek, piątek
          i niedziele. Zatem na wycieczkę zapraszamy codziennie!
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: opiekę kierowcy podczas wycieczki, transport z Zakopanego, bilet na spływ Dunajcem bez czekania w kolecje oraz ubezpieczenie NNW. Dodatkowo płatne: rejs statkiem, zwiedzanie zamku w Niedzicy, zwiedzanie parku miniatur "
          />
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.9-10h):
              </>
            }
            items={tripItems}
          />
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
                  Każdy uczestnik musi posiadać ważny paszport lub dowód
                  osobisty.
                </li>
                <li>
                  W przypadku złej pogody lub nieodpowiednich warunków na szlaku
                  zastrzegamy sobie prawo do zmiany trasy wycieczki lub
                  kolejności zwiedzania.
                </li>
                <li>
                  Odwołanie imprezy z powodu braku odpowiedniej ilości
                  uczestników, może nastąpić najpóźniej na 1 dzień przed
                  rozpoczęciem imprezy do godziny 21.00.
                </li>
              </ul>
            </div>
          )}
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
            { url: "/wycieczki/splyw-dunajcem-dluzszy/3.jpg", alt: "3 image" },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/4.jpg", alt: "4 image" },
          ]}
        />
      </div>
    </>
  );
}
