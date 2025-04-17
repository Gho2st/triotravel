import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
export default function Wieliczka() {
  const tripItems = [
    "6:00 - Wyjazd z Zakopanego",
    "9:00 - Piesze zwiedzanie z Przewodnikiem Kopalni Soli (około 3 godziny)",
    "11:30 -Zakończenie zwiedzania",
    "11:30 - Czas wolny (1h)",
    "12:00 - 13:00 - Wyjazd do Zakopanego",
    "15:00 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Tajemnice Wieliczki"];
  const tableRows = [
    ["Bilet normalny", "90 PLN"],
    [
      "Bilet ulgowy (dzieci do 10 roku, studenci do 26 lat, emeryci 65+)",
      "80 PLN",
    ],
    ["", "Dodatkowo płatne (Bilety wstępu do kopalni)"],
    ["Bilet normalny", "98 PLN**"],
    [
      "Bilet ulgowy (dzieci do 10 roku, studenci do 26 lat, emeryci 65+)",
      "78 PLN**",
    ],
  ];
  return (
    <>
      <Header text="Tajemnice Wieliczki" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/tajemnice-wieliczki/wieliczka.png"
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
          Kopalnia Soli w Wieliczce uznawana jest za jeden z siedmiu cudów
          Polski. Penetrując piękne podziemne komory, zaglądając do
          niesamowitych solnych jezior, podziwiając niezwykłe konstrukcje
          ciesielskie i unikalne solne rzeźby, poczujesz wyjątkowy klimat.{" "}
          <br></br>
          <br></br> W 2004 roku okazało się, że położona 104 metry pod ziemią
          solanka jest wspaniałym miejscem do uprawiania windsurfingu.
          Wypróbował ją sam Mateusz Kusznierewicz, którego w żeglowaniu
          wspomagała ogromna dmuchawa oraz duża ilość zagorzałych kibiców.{" "}
          <br></br>
          <br></br> Blisko 3-kilometrowy spacer po krętej trasie wraz z 800
          schodami do pokonania, zaprowadzi Państwa na głębokość 135 metrów co
          będzie nie tylko niezapomniana przygoda, ale również „solna dawka”
          zdrowia!
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="**Ceny biletów wstępów mogą ulec zmianie"
          />
        </div>
        <div className="mt-16">
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.9-10h):
              </>
            }
            items={tripItems}
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/tajemnice-wieliczki/wieliczka.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
