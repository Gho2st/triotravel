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

export default function Budapeszt() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };

  const customItems = [
    <>
      <strong>Plac Bohaterów</strong> - Położony na krańcu słynnej Alei
      Andrassyego plac od roku 1929 jest ozdobiony monumentalnym pomnikiem
      Millenium, symbolizującym ponad tysiącletnią historię państwa
      węgierskiego.
    </>,
    <>
      <strong>Zamek Vajdahunyad</strong> - Wzniesiony na przełomie XIX i XX
      wieku Zamek Vajdahunyad podobnie jak pomnik milenijny był symbolem
      tysiąclecia Węgier. Budynek charakteryzuje ogromna różnorodność
      architektoniczna, gdyż zamierzeniem autora projektu było połączenie
      dwudziestu różnorodnych stylistycznie zamków, pałaców i kościołów w spójną
      całość. Zamiar udał się znakomicie i dziś zamek należy do żelaznych
      punktów każdej wycieczki zwiedzającej Budapeszt.
    </>,
    <>
      <strong>Wzgórze Gellerta</strong> - Najlepszy punkt widokowy w Budapeszcie
      zawdzięcza swoją nazwę św. Gellertowi (Gerardowi) który w połowie XI wieku
      miał tu zakończyć życie męczeńską śmiercią. Potężne wzgórze zabudowane
      jest pozostałościami austriackiej fortecy wzniesionej w 1850 roku, zaś
      całość zwieńczona jest 40 metrowym pomnikiem Wolności powstałym po II
      wojnie światowej. Całość wpisana jest na listę światowego dziedzictwa
      UNESCO.
    </>,
    <>
      <strong>Wzgórze Zamkowe</strong> - Jest to najstarsza i najbardziej
      atrakcyjna część Budapesztu. To właśnie tu przez wieki znajdowała się
      siedziba władców węgierskich, którzy nie szczędzili grosza by pokazać swe
      bogactwo. Zabytkowy charakter miasta najbardziej podkreśla Zamek
      Królewski, którego początki sięgają XIII wieku i słynny kościół Macieja-
      jedna z najpiękniejszych świątyń na Węgrzech. Turystów zachwycają nie
      tylko monumentalne budowle, ale również uliczki budańskiej starówki, pełne
      uroku i tajemnic.
    </>,
    <>
      <strong>Katedra św. Stefana </strong> - Jedna z najważniejszych świątyń
      węgierskich zachwyca nie tylko swą potęgą, ale również kunsztem wykonania.
      Ciekawostką świątyni jest prawica świętego Stefana- patrona świątyni i
      pierwszego króla Węgier.
    </>,
    <>
      <strong>Parlament</strong> - Niekwestionowany symbol Budapesztu powstał na
      przełomie XIX i XX wieku. Neogotycka perełka jest po dziś dzień siedzibą
      rządu węgierskiego, przechowywane są tu również węgierskie klejnoty
      koronacyjne. Potężne wymiary budynku (268 m x 123 m) sprawiają, iż jest to
      nie tylko jeden z najpiękniejszych, ale również jeden z największych
      gmachów parlamentów narodowych na świecie.
    </>,
    <>
      <strong>Rejs po Dunaju</strong> - Pod koniec zwiedzania będą Państwo mieli
      okazję zobaczyć najatrakcyjniejsze miejsca Budapesztu z perspektywy
      pokładu statku. Rejs będzie idealnym zwieńczeniem tego atrakcyjnego dnia.
    </>,
  ];

  const tripItems = [
    "4:00 - Wyjazd z Zakopanego",
    "10:00 - Dojazd do Budapesztu",
    "Zwiedzanie z przewodnikiem: Plac Bohaterów, Zamek Vajdahunyad, przejazd Aleją Andrassyego, Wzgórze Gellerta, Wzgórze Zamkowe (Zamek Królewski, Kościół Macieja), bazylika św. Stefana;",
    "Rejs statkiem po Dunaju (ok. 1h)",
    "00:00-Planowany powrót do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Budapeszt"];
  const tableRows = [
    ["Bilet normalny", "300 PLN*"],
    [
      "Bilet ulgowy (młodzież szkolna, studenci, emeryci za okazaniem legitymacji)",
      "280 PLN*",
    ],
    ["Bilet ulgowy (dzieci do 14 r.ż)", "260 PLN*"],
    ["", "Dodatkowo płatne"],
    ["Rejs po Dunaju", "12 E"],
    [
      "Kościół Macieja",
      "dorośli 2500 HUF, studenci i emeryci pow. 60 lat - 1900 HUF, dzieci do 6 lat gratis,",
    ],
    ["Bazylika", "dorośli 2000 HUF, studenci i emeryci pow. 60 lat - 1500 HUF"],
    ["Obiad", "ok. 3000 HUF."],
    ["Wskazówki podróżnicze", "1 000 HUF = ok. 15 zł"],
  ];
  return (
    <>
      <Header text="Budapeszt" />
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
        <LineHeader text="Co oferujemy?" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Budapeszt to bez wątpienia jedno z najciekawszych i najpiękniejszych
          miast w Europie. Urokliwe położenie nad Dunajem, wspaniałe wzgórza
          Budy pełne źródeł geotermalnych, ciekawa historia i bogata
          architektura sprawia, że do stolicy naszych bratanków corocznie
          ściągają rzesze turystów z całego świata.
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="*Cena obejmuje: Opiekę wykwalifikowanego pilota oraz przewodnika, transport komfortowym autokarem, ubezpieczenie KL i NNW, zestaw audio guide"
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
                Organizator nie odpowiada za zmianę cen wstępów w trakcie
                sezonu.
              </li>
              <li>Kolejność zwiedzania może ulec zmianie.</li>
              <li>
                Odwołanie imprezy z powodu braku odpowiedniej ilości uczestników
                może nastąpić najpóźniej na 1 dzień przed rozpoczęciem imprezy
                do godziny 18.00.
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
            title="Poznaj Budapeszt"
            text={
              <>Podczas wycieczki do Budapesztu czeka nas wiele atrakcji:</>
            }
            items={customItems}
          />
        </div>
      </section>
      <Majer />
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/budapeszt/budapeszt.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/budapeszt.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/budapeszt.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/budapeszt/budapeszt.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
