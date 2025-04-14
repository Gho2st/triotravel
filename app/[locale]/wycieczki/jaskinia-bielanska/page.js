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
export default function Jaskinia() {
  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  const customItems = [
    "Szczyrbskie Pleso - Jeszcze 300 lat temu na miejscu obecnego jeziora istniały trzy zbiorniki wodne, natomiast misa jeziora powstała wskutek stopienia się kry martwego lodu o grubości ok. 80 m, pozostawionej przez cofający się lodowiec. Prace badawcze prowadzone w 1998 r. potwierdzają przypuszczenia na temat powstania zbiornika w wyniku wielkiego trzęsienia ziemi, które spowodowało uszczelnienie moreny i nagłe zwiększenie poziomu wody co potwierdzają źródła historyczne– lewocki kronikarz Gašpar Hain wspomina o powstaniu nowego, dużego jeziora po trzęsieniu ziemi w Tatrach 6 sierpnia 1662 r. Powierzchnia Szczyrbskiego Jeziora wynosi 19,76 ha. Maksymalna głębokość jeziora wynosi 20 m, objętość jest równa 1 284 000 m³. Średnio przez 155 dni w roku jezioro jest pokryte warstwą lodu. Nie posiada rzek zasilających ani wypływających.",
    "Stary Smokowiec - Popularny ośrodek turystyczny, głównie dla narciarzy oraz amatorów pieszych wycieczek. Jest również ważnym węzłem zelektryfikowanej linii kolei wąskotorowej, łączącej Poprad, Tatrzańską Łomnicę oraz Szczyrbskie Jezioro. W Starym Smokowcu znajduje się także dolna stacja kolejki na Smokowieckie Siodełko. Bardzo znanym budynkiem w Starym Smokowcu jest wybudowany w roku 1904 Grand Hotel. W Starym Smokowcu mieści się siedziba Górskiego Pogotowia Ratunkowego (HZS), słowackiej służby ratowniczej. Lasy otaczające Smokowiec zostały niemal doszczętnie zniszczone w czasie huraganu w dniu 19 listopada 2004. Wiatr powalił wówczas drzewa na powierzchni co najmniej 14 tys. ha. Zniszczeniu uległo wtedy około 60% populacji świerka w słowackich Wysokich Tatrach. Na stokach południowych Tatr zalegało około 3 mln m³ drewna. Usuwanie zwalonego lasu odbywało się przez okres około 2 lat, natomiast odrodzenie potrwa ok.100 lat. W Starym Smokowcu został wybudowany pomnik upamiętniający to zdarzenie, huragan odsłonił widok na Tatry oraz Poprad. To nie koniec katastrofy, gdyż kilka lat później - w kwietniu 2013 roku pożar strawił 22 ha młodego lasu.",
    "Tatrzańska Łomnica - Osada powstała ok. 1881 roku, od początku była traktowana jako miejsce turystyczne, a w 1893 r. powstał tutaj pierwszy hotel – Łomnica. Istotny wzrost znaczenia turystycznego osada datuje w końcu lat 30. XX w., kiedy to ukończono budowę niezwykle nowoczesnej w tamtych czasach kolei linowej na Łomnicę ze stacją pośrednią nad Łomnickim Stawem. Odcinek końcowy kolejki pokonuje na jednym przęśle do szczytu różnicę wysokości 850 metrów, zaś wagonik kolejki znajduje się około 300 metrów nad ziemią. Od 2001 roku jej dolny odcinek jest nieczynny ze względu na nieopłacalność i konieczność remontu. Nie wiadomo, czy kiedykolwiek ruszy; być może w dolnym budynku stacyjnym, zaprojektowanym przez znanego słowackiego architekta Dušana Jurkoviča, powstanie muzeum.",
  ];

  const tripItems = [
    "8:00 - Wyjazd z Zakopanego",
    "9:30 - Piesze podejście do Jaskini Bielskiej (około 20 minut)",
    "10:00 - Wejście do Jaskini (czas zwiedzania z przewodnikiem około 70 minut)",
    "12:00 - Przejazd do Szczyrbskiego Jeziora - Czas wolny (2 godziny)",
    "15:00- Wyjazd do Zakopanego",
    "16:30 -Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Jaskinia Bielańska"];
  const tableRows = [
    ["Bilet normalny", "80 PLN"],
    [
      "Bilet ulgowy (dzieci do 12 roku, studenci do 26 lat, emeryci 65+)",
      "75 PLN",
    ],
    [
      "",
      "Dodatkowo płatne (Bilety do Jaskini Bielskiej - czas zwiedzania: 70 min)",
    ],
    ["Bilet normalny", "14 E"],
    ["Bilet ulgowy (dzieci od 6 do 15 lat)", "7E"],
    ["Bilet ulgowy (studenci i seniorzy 60+)", "13E"],
  ];
  return (
    <>
      <Header text="Jaskinia Bielańska" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/jaskinia-bielanska/jaskinia.png"
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
          Jaskinia Bielańska jest jedyną jaskinią udostępnioną dla zwiedzających
          w Tatrach Słowackich. To pierwsza jaskinia w Europie oświetlona
          światłem elektrycznym. Aby dojść do wejścia, które znajduje się na
          wysokości 890 m npm. należy pokonać różnicę poziomów równą 122 metrów,
          długość trasy wynosi 1370 m, a zwiedzanie trwa 70 minut. <br></br>{" "}
          <br></br> Już w pierwszej połowie XVIII wieku wejścia prowadzące do
          jaskini znane były poszukiwaczom złota, jednak przez długi okres czasu
          pozostały one w utajnieniu. Otwór wstępny do jaskini został ponownie
          odnaleziony przez L. Guldena i poszukiwacza złota Fabry'ego w 1826
          roku. <br></br> <br></br> W 1896 roku elektrownia na rzece Białej
          dostarczała prąd do jaskini, którą można było zwiedzać tylko trzy razy
          w ciągu dnia, przewodnik otwierał ją nawet wtedy gdy na zwiedzanie
          oczekiwał jeden turysta. Obecnie wnętrze jaskini ukazuje liczne
          naciekowe wodospady, stalagmity przypominające pagody i liczne
          jeziorka. Dalej udajemy się drogą popod TATRY do Szczyrbskiego Plesa,
          jeziora po stronie słowackiej, do którego jest zaledwie 5 min (pieszo)
          od parkingu, na którym będzie czekał na Państwa kierowca.
          Przejeżdżając przez Stary Smokowiec, mijając Tatrzańską Łomnicę
          (kompleks wyciągów narciarskich) zobaczymy piękno i siłę przyrody,bo w
          2004 roku miejscowość została spustoszona przez potężny huragan, który
          powalił 14 tys. ha lasów.
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table headers={tableHeaders} rows={tableRows} />
        </div>
        <div className="mt-16 md:w-3/4 mx-auto">
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.8-9h):
              </>
            }
            items={tripItems}
          />
          <div className="mt-16">
            <BackgroundList title="Opis Wycieczki" items={customItems} />
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
                <li>
                  Wyjazd realizowany jest poza granicami RP. Należy spełnić
                  wszelkie warunki sanitarno-epidemiologiczne obowiązujące w
                  kraju docelowym - Słowacja.
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/jaskinia-bielanska/jaskinia.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
