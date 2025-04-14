import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import BackgroundList from "@/app/UI/BackgroundList";

export default function Rafting() {
  const customItems = [
    "Rejs statkiem po Jeziorze Czorsztyńskim: Podczas rejsu statkiem spacerowym będziesz mógł podziwiać zaporę wodną, ruiny zamku Czorsztyńskiego, zamek Niedzica, skansen Czorsztyński oraz przepiękny górski krajobraz. Taki rejs to przygoda, która na długo zostanie w twojej pamięci!",
    "Zamek w Niedzicy: To właśnie tu w zamkowych lochach można obejrzeć izbę tortur z dybami, w które wedle legendy miał być zakuty Janosik",
    "Zwiedzanie Zapory na Dunajcu Zapora główna Czorsztyn - Niedzica to największa w Polsce zapora ziemna o wysokości 56 m i długości 404 m.",
    "Park Miniatur Podhala, Orawy i Spisza to miejsce absolutnie wyjątkowe. W jednym miejscu możesz podziwiać najpiękniejsze zabytki sakralne, zamki i wiele, wiele więcej.",
    "Podczas wycieczki zobaczysz również zabytkowy Kościółek w Dębnie z XV w. wpisany na listę UNESCO - to właśnie tutaj Janosik brał za żonę Marynę....",
  ];
  const tripItems = [
    "7:00 - Wyjazd z Zakopanego",
    "9:00 - Wędrówka trasą - Sucha Bela (drabinki)",
    "12:00 - Zakończenie trasy, czas wolny.",
    "12:30 - Kontynuacja wycieczki, powrót do autokaru. Możliwość zjazdu rowerem (7 euro) lub pieszo.",
    "15:00 - Wyjazd do Zakopanego",
    "17:00 - Planowany powrót",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Rafting po Dunajcu"];
  const tableRows = [
    ["Bilet normalny", "160 PLN*"],
    ["Bilet ulgowy (dzieci do 10 lat)", "140 PLN*"],
    ["", "Dodatkowo płatne"],
    ["Rejs Statkiem", "25PLN/23PLN"],
    ["Zwiedzanie zamku w Niedzicy", "25PLN/23PLN"],
    ["Zwiedzanie parku miniatur", "12LN/10PLN"],
  ];
  return (
    <>
      <Header text="Rafting po Dunajcu" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/rafting-po-dunajcu/rafting.png"
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
          Na początku spływy Doliną Dunajca organizowane były wyłącznie na
          wyjątkowe okazje. Korzystać z nich mogli jedynie możnowładcy, bogacze
          oraz ważne persony, którzy spotykali się z królem na zamku w
          Czorsztynie i Niedzicy. Dziś również ty możesz być jak VIP i poczuć
          władczą rządzę przygody z adrenaliną w tle…
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Co zobaczysz?"
            text={
              <>
                Podczas wycieczki w Pieniny, poza główną atrakcją, którą jest
                pełen emocji dwugodzinny spływ pontonami po Dunajcu, odwiedzisz
                również Niedzicę, w której do wyboru masz
                <strong> jedną </strong> z atrakcji:
              </>
            }
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          Sezon spływowy trwa od 1 kwietnia do 31 października - świątek, piątek
          i niedziele. Zatem na wycieczkę zapraszamy codziennie!
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: Opiekę kierowcy, bilet na spływ, wstęp do PPN oraz ubezpieczenie NNW "
          />
        </div>
        <div className="mt-16 md:w-3/4 mx-auto">
          <TripProgram title={<>Program wycieczki:</>} items={tripItems} />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/rafting-po-dunajcu/rafting.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/rafting.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/rafting.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/rafting.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
