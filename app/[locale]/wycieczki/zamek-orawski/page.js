import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";

export default function Zamek() {
  const tripItems = [
    "Wyjazd z Zakopanego",
    "Zwiedzanie Zamku Orawskiego",
    "Przejazd przez Skansen w Chochołowie",
    "Postój na granicy - możliwość wizyty w sklepie Słowackim",
    "Degustacja Oscypków w Najstarszej Bacówce",
    "Powrót do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Zamek Orawski"];
  const tableRows = [
    ["Bilet normalny", "90 PLN"],
    ["Bilet ulgowy (dziecko do lat 15, emeryt, niepełnosprawny)", "80 PLN"],
    ["", "Dodatkowo płatne (bilety wstępu do Zamku Orawskiego)"],
    ["Bilet normalny", "9 E"],
    ["Bilet ulogwy", "4.5 E"],
  ];
  return (
    <>
      <Header text="Zamek Orawski" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/zamek-orawski/zamek-orawski.png"
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
          Triotravel z przyjemnością zaprasza na pełną atrakcji jednodniową
          wycieczkę. Proponujemy Państwu wyjątkową podróż, która obejmuje
          zwiedzanie Zamku Orawskiego, Skansenu w Chochołowie oraz degustację
          oscypków w najstarszej bacówce w regionie. <br></br>
          <br></br>
          Zamek Orawski Położony na wysokiej skale, Zamek Orawski to
          majestatyczna twierdza, która zachwyca swoją architekturą i bogatą
          historią. Podczas zwiedzania z przewodnikiem poznają Państwo
          fascynujące opowieści o życiu zamku oraz jego mieszkańców. To
          niezapomniana podróż w czasie, która przybliży Państwu kulturę i
          tradycje regionu.<br></br>
          <br></br> Skansen w Chochołowie Skansen w Chochołowie to unikatowe
          miejsce, gdzie można poczuć ducha tradycyjnej kultury góralskiej.
          Położony w malowniczej wsi Chochołów, skansen oferuje zwiedzającym
          możliwość zobaczenia autentycznych, drewnianych chałup, które od
          pokoleń zachowują swój niepowtarzalny charakter.
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
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/zamek-orawski/zamek-orawski.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/zamek-orawski/zamek-orawski.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/zamek-orawski/zamek-orawski.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/zamek-orawski/zamek-orawski.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
