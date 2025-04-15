import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";

export default function Hrebieniok() {
  const tripItems = [
    "8:00 - Wyjazd z Zakopanego",
    "9:00 - Przyjazd do Starego Smokowca",
    "9:30 - Wyjazd kolejką na Hrebieniok",
    "10:00 - 12:00-Zwiedzanie Świątyni Lodowej",
    "12:00 - 13:00 - Czas wolny",
    "15:00 - Powrót do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Świątynia Lodowa Hrebieniok"];
  const tableRows = [
    ["Bilet normalny", "80 PLN"],
    ["Bilet ulgowy (dzieci do 10 lat)", "75 PLN"],
    ["", "Dodatkowo płatne (wjazd kolejką na Hrebieniok)"],
    ["Bilet normalny", "16 €"],
    ["Bilet ulogwy (dzieci do 10 lat)", "14 €"],
  ];
  return (
    <>
      <Header text="Świątynia Lodowa Hrebieniok" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png"
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
          Zapraszamy na wycieczkę na Słowację podczas, której zobaczą Państwo
          Stary Smokowiec. Przejadą się kolejką szynową na Hrebieniok (Tatry
          Wysokie, 1310m n.p.m.), gdzie na szczycie zlokalizowana jest Lodowa
          Świątynia, która w tym roku inspirowana jest Katedrą na Wawelu.
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
              url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
              alt: "First image",
            },
            {
                url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
                alt: "First image",
            },
            {
                url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
                alt: "First image",
            },
            {
                url: "/wycieczki/swiatynia-lodowa-hrebieniok/hrebieniok.png",
                alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
