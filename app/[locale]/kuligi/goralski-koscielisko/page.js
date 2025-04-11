import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
import BackgroundList from "@/app/UI/BackgroundList";

export default function Koscielisko() {
  // Przykładowe dane dla tabeli
  const tableHeaders = [
    "Rodzaj biletu",
    "Od 01.12.2024 do końca sezonu zimowego",
  ];
  const tableRows = [
    ["Bilet normalny", "150 PLN*"],
    ["Bilet ulgowy (do 10 lat)", "130 PLN*"],
  ];

  const customItems = [
    "Odbiór z miejsca zamieszkania na terenie miasta Zakopane i gminy Kościelisko (pozostałe lokalizacje do uzgodnienia) ",
    "Kulig z pochodniami w Kościelisku.",
    "Po kuligu zapraszamy na smaczny poczęstunek,  w tym: pieczoną kiełbasę oraz herbatę zwykłą bądź góralską",
    "Biesiada wraz z ogniskiem przygotowana będzie w pięknej górskiej scenerii.",
    "Cała zabawa odbywa się w okolicznościach pięknej tatrzańskiej przyrody.",
  ];
  return (
    <>
      <Header text="Góralski Kulig Kościelisko" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 ">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/JyJcfnneIWc?si=R4eeq28-hOZO50aZ"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
      <section className=" px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text="Góralski Kulig Kościelisko" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Podczas pobytu w Zakopanem zapraszamy na malownicze kuligi połączone z
          biesiadą przy ognisku. Fantastyczna  niezapomniana przygoda, wyjątkowy
          klimat, przepiękne widoki i świetna atmosfera. Zapraszamy na
          organizowany{" "}
          <span className="font-semibold">Góralski kulig w Kościelisku.</span>{" "}
          Przejażdżka saniami wśród malowniczej scenerii przepełnionej górskim
          klimatem stworzy unikalny klimat, którego nie będą mogli Państwo
          zapomnieć. Przejażdżka w saniach trwa{" "}
          <span className="font-semibold">ok. 1h</span> podczas której przejazd
          rozświetlony zostanie przez{" "}
          <span className="font-semibold"> pochodnie.</span> Następnie
          zapraszamy Państwa na ognisko wraz ze{" "}
          <span className="font-semibold">
            {" "}
            smakowitym poczęstunkiem i kapelą{" "}
          </span>{" "}
          umilającą czas muzyką na żywo. 
        </p>
        {/* more text */}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="W Programie Naszego kuligu oferujemy:"
            items={customItems}
            className="shadow-lg"
          />
        </div>
        {/* GODZINY I CENNIK */}
        <div className="my-20 text-center">
          <h3 className="text-2xl  mb-10 font-semibold">
            Godziny kuligów w sezonie zimowym: 16.00, 17.00, 18.00, 19.00{" "}
            <br></br>
            (Wyjazd z Zakopanego około 40 min wcześniej)
          </h3>
          <h4 className=" mb-10 text-lg font-medium">
            Ceny w sezonie zimowym 2024/2025
          </h4>
          <Table headers={tableHeaders} rows={tableRows} />
          <div className="mt-10">
            <span className="text-lg font-bold">*Cena obejmuje:</span>

            <ul className="text-lg flex flex-col gap-2 mt-10">
              <li>
                transport w dwie strony (odbiór z miejsca zakwaterowania na
                terenie Zakopanego i Kościeliska),
              </li>
              <li>godzinną przejażdżkę w saniach 4, 8 i 10 osobowych,</li>
              <li>poczęstunek przy ognisku </li>
              <li>
                menu podczas kuligów: kiełbasa, chleb, ketchup, musztarda,
                herbata zwykła i herbata góralska (bez limitu)
              </li>
              <li>
                * w przypadku niewystarczającej ilości śniegu lub jego braku
                kuligi odbywają się na wozach / dorożkami
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
