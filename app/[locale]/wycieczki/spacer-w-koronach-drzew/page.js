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
export default function Spacer() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const customItems = [
    "Podczas przechadzania się po ścieżce,skorzystać można z wielu tablic informacyjnych przeznaczonych bez przeszkód do przeczytania, znajdujących się na kilku przystankach w sekcji poziomej Ścieżki. Tablice zawierają interesujące informacje dotyczące fauny, flory oraz życia lasów miejscowych, jak i ich ochrony czy niszczącej siły pogody.",
    "Trasa o długości ponad 600 m przeprowadzi zwiedzających przez gatunkowo zróżnicowany las, w którym znajduje się dużo różnych niespodzianek i ciekawostek.",
  ];

  const tripItems = [
    "8:00 - Transfer z Zakopanego",
    "10:00 - Wyjazd kolejką Gondolową Bachledka na szczyt Magury Spiskiej ",
    "10:30 - Spacer ścieżką po Koronie Drzew ",
    "12.30 - Zjazd kolejką",
    "13:00 - Przejazd do Szczyrbskiego Plesa (Czas wolny 2 godziny ) ** niedostępny w sezonie zimowym **",
    "15:30 - Wyjazd do Zakopanego",
    "16:00 - Wyjazd powrotny",
    "17:00 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Spacer w Koronach Drzew"];
  const tableRows = [
    ["Bilet normalny", "80 PLN*"],
    ["Bilet ulgowy (do 14lat, emeryci 65+)", "75 PLN*"],
    [
      "",
      "Dodatkowo płatne (bilet na kolejkę gondolową w dwie strony + na scieżkę w koronach drzew)",
    ],
    ["Bilet normalny", "30€"],
    ["Bilet ulgowy (do 14lat, emeryci 65+)", "24€"],
  ];
  return (
    <>
      <Header text="Spacer w Koronach Drzew" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/spacer-w-koronach-drzew/korony.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Odkryj Piękno Natury" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          Ścieżka w Koronach Drzew Bachledka znajduje się w samym sercu
          gatunkowo zróżnicowanego lasu{" "}
          <strong> Pienińskiego Parku Narodowego.</strong>
          Zwiedzającym pokaże, dlaczego jest natura Magury Spiskiej wyjątkowa.
          Razem z nami zapoznajesz się z miejscowymi lasami. Stajesz się częścią
          życia leśnego oraz dowiesz się coś o różnych gatunków zwierząt i
          roślin występujących bardzo rzadko. Wyjazd wczesnym rankiem z
          Zakopanego w stronę Bachledowej Doliny. Tutaj zaprosimy Państwa na
          kolejkę gondolową przejazd w dwie strony (czas trwania przejazdu około
          7 minut), która zawiezie państwa na Szczyt Magury Spiskiej.
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: opiekę kierowcy podczas wycieczki, ubezpieczenie NNW oraz transport z Zakopanego"
          />
        </div>
        <div className="mt-16">
          <BackgroundList title="Więcej informacji" items={customItems} />
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.8-9h):
              </>
            }
            items={tripItems}
          />
          <p className="text-center mt-16 text-lg">
            Po zakończeniu zwiedzania wracamy kolejka gondolową na parking z
            którego ruszamy przez Taty Wysokie (Tatrzańska Łomnica,Stary
            Smokowiec) do Szczyrbskiego Plesa. Tutaj zapraszamy Państwa na czas
            wolny. Dla chętnych spacer wokoło jeziora zajmie około 40 minut,
            Strbske Pleso - to po naszemu Szczyrbskie Jezioro. Położone na
            wysokości 1346 m n.p.m. Często porównywane do naszego Morskiego Oka.
            Jezioro jest otoczone lasem świerkowym, bardzo zniszczonym przez
            huraganowy wiatr w 2004.Osada ta ma status uzdrowiska klimatycznego
            jest także powszechnie znanym kurortem narciarskim. To przepiękne
            miejsce a mało brakowało, by po jeziorze zajmującym około 20 ha
            mogło nie być śladu, gdy w połowie XIX wieku mieszkańcy okolicy
            chcieli go odwodnić i zmienić na pastwisko. Po spacerze dookoła
            urokliwego jeziora powrót do Zakopanego. Trasa o długości ponad 600
            m przeprowadzi zwiedzających przez gatunkowo zróżnicowany las, w
            którym znajduje się dużo różnych niespodzianek i ciekawostek.
          </p>
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
        </div>
      </section>
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/spacer-w-koronach-drzew/korony.png", alt: "First image" },
            { url: "/wycieczki/spacer-w-koronach-drzew/korony.png", alt: "First image" },
            { url: "/wycieczki/spacer-w-koronach-drzew/korony.png", alt: "First image" },
            { url: "/wycieczki/spacer-w-koronach-drzew/korony.png", alt: "First image" },
          ]}
        />
      </div>
    </>
  );
}
