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

export default function Wieden() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };

  const customItems = [
    <>
      <strong>Centrum </strong> - Ring jest jedną z najbardziej rozpoznawalnych
      ulic Wiednia. Przy niej mieszczą się najważniejsze zabytki austriackiej
      stolicy. Ring jak pierścień otacza całe historyczne centrum. Aleja została
      bowiem wybudowana na miejscu dawnych murów miejskich, które wyburzono w
      XIX wieku. Chociaż w zasadzie celem powstania Ringstrasse było
      uniemożliwienie poddanym buntu przeciwko władzy, okazało się, że nowa
      ulica to elegancki bulwar oddany w pełni do użytku mieszkańcom Wiednia.
      Stanęły tu najpiękniejsze pałace w całym mieście oraz wiele budynków
      użyteczności publicznej. Jedną z pierwszych atrakcji, jaką zobaczymy po
      przejechaniu Ringiem jest Dom Hundertwassera - nietypowa kamienica
      wyróżniająca się ciekawymi barwami oraz nieregularnymi kształtami,
      zbudowana przez słynnego architekta o tymże właśnie imieniu. Kiedy już
      skończymy podziwiać to interesujące dzieło ówczesnej architektury czeka
      nas zwiedzanie miasta z przewodnikiem. Tutaj mamy okazję zwiedzić i
      wysłuchać ciekawostek na temat reprezentacyjnego Placu Karola czy
      Hofburgu, który to uważany jest za najważniejszy obiekt zabytkowy w
      Wiedniu. Jest to dawna siedziba rodu Habsburgów, mająca już około 700 lat.
      Obiekt jest imponujący, a jego powierzchnia przekracza 240 tysięcy m2.
      Posiada on aż 19 dziedzińców, 50 klatek schodowych, 2600 pokoi oraz
      muzeów, kaplic, ogrodów, bibliotek i innych pomieszczeń. Kolejne atrakcje,
      które czekają w centrum austriackiej stolicy to Kohlmarkt, Graben oraz
      Katedra Św. Szczepana.
    </>,
    <>
      <strong>Belweder</strong> - to największy skarb Wiednia i jeden z
      najpiękniejszych obiektów barokowych na świecie. Został stworzony dla
      księcia Eugeniusza Sabaudzkiego, w pierwszej połowie XVIII wieku. Na
      całość składają się dwa pałace i ogród. Dolny Belweder oraz Górny Belweder
      są dziełami architekta Johanna Lukasa von Hildebrandta. Ogród stworzony
      został natomiast przez Dominiquea Girarda i charakteryzuje się francuskim
      stylem, w którym znajdziemy różnego rodzaje posągi w tym sfinksy, fontanny
      oraz niezliczone ilości roślinności.
    </>,
    <>
      <strong>Pałac i ogrody Schönbrunn </strong> - Letnia rezydencja cesarzowej
      Sisi to najpopularniejsza atrakcja miasta. Nazywany wiedeńskim Wersalem
      zachwyca reprezentacyjnym gmachem, inspirowanym posiadłością Ludwika XIV.
      Służył członkom dynastii Habsburgów i ich znamienitym gościom. Obecnie
      udostępniony zwiedzającym pełni rolę jednego z najważniejszych
      austriackich zabytków - został wpisany na Listę Światowego Dziedzictwa
      Kulturalnego i Przyrodniczego UNESCO. Charakteryzuje go wyjątkowe bogactwo
      dekoracji architektonicznych, malowideł ściennych, złoceń oraz
      przepięknych mozaikowych podłóg. Przy pałacu funkcjonuje również ogród
      zoologiczny i palmiarnia. Schönbrunn to również kompleks parkowy w stylu
      francuskim z labiryntem wykonanym z bukszpanu.
    </>,
  ];

  const tripItems = [
    "6:00 - Wyjazd z Zakopanego",
    "9:00 - Piesze zwiedzanie z Przewodnikiem Kopalni Soli (około 3 godziny)",
    "11:30 -Zakończenie zwiedzania",
    "11:30 - Czas wolny (1h)",
    "12:00 - 13:00 - Wyjazd do Zakopanego",
    "15:00 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Wiedeń"];
  const tableRows = [
    ["Bilet normalny", "350 PLN*"],
    [
      "Bilet ulgowy (młodzież szkolna, studenci, emeryci za okazaniem legitymacji)",
      "330 PLN*",
    ],
    ["Bilet ulgowy (dzieci do 14 r.ż)", "300 PLN*"],
    ["", "Dodatkowo płatne"],
    ["Bilet normalny", "Pałac Schonbrum: 24€, Obiad: ok: 15€"],
    [
      "Bilet ulgowy (dzieci i młodzież 6-18 lat)",
      "Pałac Schonbrum: 17€, Obiad: ok: 15€",
    ],
    [
      "Studenci (na podstawie kart: Euro26, ISIC, ITIC)",
      "Pałac Schonbrum: 20€, Obiad: ok: 15€",
    ],
    [
      "Osoby niepełnosprawne i dzieci do 6 lat",
      "Pałac Schonbrum: BEZPŁATNE, Obiad: ok: 15€",
    ],
  ];
  return (
    <>
      <Header text="Wiedeń" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/wieden/wieden.png"
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
          Położona nad Dunajem stolica Austrii przyciąga wielkim bogactwem
          wielowiekowej historii, kultury i tradycji. Historyczne centrum
          miasta, pełne zabytków ze wszystkich epok historycznych zostało w 2001
          roku wpisane na Listę światowego dziedzictwa UNESCO. Ze względu na
          bogactwo atrakcji Wiedeń należy do najchętniej odwiedzanych miast
          Europy. Pod koniec XVIII wieku tworzyli tu najsłynniejsi kompozytorzy
          nie tylko tamtych czasów, czego dowodem jest określenie klasycy
          wiedeńscy, są tak wspólnie określani Józef Haydn, Wolfgang Amadeusz
          Mozart i Ludwig van Beethoven.
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="*Cena obejmuje: Opiekę wykwalifikowanego pilota oraz przewodnika, transport komfortowym autokarem, ubezpieczenie KL i NNW, zestaw audio guide"
          />
        </div>
        <div className="mt-16 md:w-3/4 mx-auto">
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.9-10h):
              </>
            }
            items={tripItems}
          />
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
                Organizator nie odpowiada za zmianę cen wstępów w trakcie
                sezonu.
              </li>
              <li>Kolejność zwiedzania może ulec zmianie.</li>
              <li>
                Odwołanie imprezy z powodu braku odpowiedniej ilości
                uczestników, może nastąpić najpóźniej na 1 dzień przed
                rozpoczęciem imprezy do godziny 19.00.
              </li>
              <li>
                Wymagany ważny paszport lub dowód osobisty dla każdego
                uczestnika wycieczki bez względu na wiek.
              </li>
            </ul>
          </div>
        )}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Poznaj Wiedeń"
            text={<>Podczas wycieczki do Wiednia czeka nas wiele atrakcji:</>}
            items={customItems}
          />
        </div>
      </section>
      <Majer />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/wieden/wieden.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/wieden/wieden.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/wieden/wieden.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/wieden/wieden.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
