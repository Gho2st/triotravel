import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
import BackgroundList from "@/app/UI/BackgroundList";
import Image from "next/image";

export default function Sylwester() {
  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Wieczór Sylwestrowy"];
  const tableRows = [
    ["Bilet normalny", "170 PLN"],
    ["Bilet ulgowy (do 10 lat)", "150 PLN"],
  ];

  const customItems = [
    "Odbiór uczestników imprezy z miejsca zakwaterowania (odbiór z miejsca zamieszkania na terenie miasta Zakopane i gminy Kościelisko, pozostałe lokalizacje do uzgodnienia)",
    "Godzinny przejazd saniami u podnóża Doliny Kościeliskiej.",
    "Sanie są cztero- ośmio- lub dziesięcioosobowe",
    "Czas umila kapela góralska grająca na żywo!",
    "Prawdziwie góralski poczęstunek",
    "Cała zabawa odbywa się w malowniczych, zapierających dech w piersiach okolicznościach tatrzańskiej przyrody",
    "Możliwość spożywania własnego alkoholu",
    "W przypadku braku śniegu sanie zostaną zastąpione wozami.",
    "Kulig odbywa się na świeżym powietrzu, bez względu na pogodę, zalecamy stosowny ciepły ubiór",
    "Czas trwania ok. 2,5 godziny (transport w obie strony, kulig, biesiada)",
  ];
  return (
    <>
      <Header text="Kulig w Wieczór Sylwestrowy" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/kuligi/sylwestrowy2.jpg"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Ludzie na powozach z pochodniami ciągnacymi przez konie w aurze zimy podczas kuligu"
        />
      </div>
      <section className=" px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text="KULIG SYLWESTROWY 2024-2025" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Zapraszamy na{" "}
          <span className="font-semibold">niezapomniany Sylwester </span> w
          klimatycznej scenerii Podhala! Kulig sylwestrowy od{" "}
          <span className="font-semibold"> TrioTravel </span> to tradycyjna
          przejażdżka saniami po zaśnieżonych trasach, zakończona ogniskiem i
          poczęstunkiem w góralskim stylu. To wyjątkowa okazja, by
          <span className="font-semibold">
            powitać Nowy Rok w sercu natury, przy blasku ogniska, muzyce i
            regionalnych smakołykach.
          </span>
          Doświadcz magii góralskiej gościnności wśród przyjaciół i rodziny -
          spraw, aby nadchodzący rok rozpoczął się niezapomnianymi chwilami!
        </p>
        {/* more text */}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Co oferujemy podczas Sylwestrowego Kuligu:"
            items={customItems}
          />
        </div>
        {/* GODZINY I CENNIK */}
        <div className="my-20 text-center">
          <h3 className="text-2xl  mb-10 font-semibold">
            Pozostałe godziny do wyboru:
            <br></br>
            20:00 - 22:00
          </h3>
          <h4 className=" mb-10 text-lg font-medium">
            Ceny w sezonie zimowym 2024/2025
          </h4>
          <Table headers={tableHeaders} rows={tableRows} />
          <div className="mt-10">
            <span className="text-lg font-bold">Menu obejmuje:</span>

            <ul className="text-lg flex flex-col gap-2 mt-10">
              <li>
                Kiełbasa do samodzielnego pieczenia, chleb, musztarda,
                ketchup, herbata Góralska i zwykła,
              </li>
            </ul>
          </div>
        </div>
        <Gallery
          images={[
            { url: "/kuligi/goralski/1.jpg", alt: "First image" },
            { url: "/kuligi/goralski/2.jpg", alt: "2 image" },
            { url: "/kuligi/goralski/3.jpg", alt: "3 image" },
            { url: "/kuligi/goralski/4.jpg", alt: "4 image" },
            { url: "/kuligi/goralski/5.jpg", alt: "5 image" },
            { url: "/kuligi/goralski/6.jpg", alt: "6 image" },
          ]}
        />
      </section>
    </>
  );
}
