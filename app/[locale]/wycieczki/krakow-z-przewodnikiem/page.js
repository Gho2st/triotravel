import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import BackgroundList from "@/app/UI/BackgroundList";

export default function Krakow() {
  const customItems = [
    <>
      <strong>Zwiedzanie Wzgórza Wawelskiego </strong> - Katedra Wawelska, Groby
      oraz Krypty Królewskie i Zasłużonych Polaków, Krypta Pary Prezydenckiej,
      -Wieża z Dzwonem Zygmunta, -Historia Zamku Królewskiego z Dziedzińcem
      Arkadowym, -Pozostałości murów obronnych, -Smok Wawelski, Smocza Jama,
      -Zwiedzanie Starego Miasta szlakiem „Droga Królewska”.
    </>,
    <>
      <strong>Spacer ulicą Kanoniczą, Grodzką z kościołami </strong> - Św.
      Andrzeja, Św. Piotra i Pawła, ulicą Franciszkańską ze słynnym Pałacem
      Biskupim i „Oknem Papieskim”. Przejście przez Dzielnicę Uniwersytecką –
      Collegium Maius do Rynku Głównego, Wieża Ratuszowa, Sukiennice, Kościół
      Mariacki z Ołtarzem Wita Stwosza (wysłuchanie Hejnału Mariackiego),
      przejście ulicą Floriańską pod Barbakan, Bramę Floriańską i Pomnik
      Grunwaldzki.
    </>,
  ];

  const tripItems = [
    "8:00 - Wyjazd z Zakopanego",
    "10:30 - Piesze zwiedzanie Krakowa z przewodnikiem (ok. 4-5 godzin)",
    "15:30 - Czas wolny (2h)",
    "17:30 - Wyjazd do Zakopanego",
    "19:30 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Zamek Orawski"];
  const tableRows = [
    ["Bilet normalny", "120 PLN*"],
    [
      "Bilet ulgowy (dzieci do lat 10, studenci do 26 lat, emeryci 65+)",
      "110 PLN*",
    ],
    ["", "Dodatkowo płatne (Katedra Wawelska, Kościół Mariacki)"],
    ["Bilet normalny", "48 PLN**"],
    ["Bilet ulogwy", "24 PLN**"],
  ];
  return (
    <>
      <Header text="Zwiedzanie Krakowa" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/krakow/krakow.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Kraków z przewodnikiem" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          Od wielu lat Kraków niezmiennie znajduje się w czołówce światowych
          rankingów miast wartych odwiedzenia. Co więcej, w lutym 2014 r. został
          wybrany najlepszym turystycznym miastem Europy według portalu
          turystycznego Zoover i otrzymał Zoover Award for „Best European City
          Trip 2015” Podążaj śladami królów polskich przez ulice
          średniowiecznego miasta. Droga Królewska to najsłynniejsza trasa
          zwiedzania Krakowa, którą przez lata przemierzali nasi królowie po
          słynnej koronacji królewskiej. Prowadzi od Wzgórza Wawelskiego po
          północną część miasta, gdzie znajduje się Plac Matejki.
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text={
              <>
                * Cena obejmuje: Opiekę kierowcy, przewodnika po Krakowie,
                transport z Zakopanego oraz ubezpieczenie NNW <br></br>
                <br></br> **Ceny biletów wstępów mogą ulec zmianie
              </>
            }
          />
        </div>
        <div className="mt-16">
          <TripProgram title={<>Program wycieczki:</>} items={tripItems} />
        </div>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Poznaj Kraków"
            text={<>Podczas wycieczki do Krakowa czeka nas wiele atrakcji:</>}
            items={customItems}
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/krakow/krakow.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/krakow/krakow.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/krakow/krakow.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/krakow/krakow.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
