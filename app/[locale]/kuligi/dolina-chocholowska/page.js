import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
import BackgroundList from "@/app/UI/BackgroundList";

export default function Dolina() {
  // Przykładowe dane dla tabeli
  const tableHeaders = [
    "Rodzaj biletu",
    "Od 01.12.2024 do końca sezonu zimowego",
    "Od 26.12.2024 do 06.01.2025",
  ];
  const tableRows = [
    ["Bilet normalny", "199 PLN", "219 PLN"],
    ["Bilet ulgowy (do 10 lat)", "179 PLN", "199PLN"],
  ];

  const customItems = [
    "Odbiór z miejsca zamieszkania na terenie miasta Zakopane i gminy Kościelisko (pozostałe lokalizacje do uzgodnienia)",
    "Kulig widokowy z pochodniami w Dolinie Chochołowskiej w saniach 4-osobowych* z krótkim postojem na wykonanie pamiątkowych fotografii",
    "Po kuligu pieczenie kiełbasek przy ognisku z herbatą zwykłą i góralską oraz góralski bigos (możliwość spożywania własnego alkoholu)",
    "Prawdziwa góralska biesiada przy góralskiej muzyce (na żywo)",
    "Cała zabawa odbywa się w okolicznościach pięknej tatrzańskiej przyrody.",
    "Czas trwania ok. 2,5 - 3h",
  ];
  return (
    <>
      <Header text="Góralski Kulig Kościelisko" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 ">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/EadvVWXUk1I?si=S_Q_c6BIrSuW22K"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
      <section className=" px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text="Kulig Vip w Dolinie Chochołowskiej" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Jedyna i niepowtarzalna okazja na to, by poznać piękną zimową aurę
          słynnej{" "}
          <span className="font-semibold"> Doliny Chochołowskiej! </span>{" "}
          Podczas pobytu u podnóża naszych pięknych Polskich Tatr nie może
          zabraknąć prawdziwego góralskiego kuligu. TrioTravel może Państwu
          zaoferować jedyny w swoim rodzaju kulig w dolinie Chochołowskiej,
          gdzie nie doświadczą państwo tłoku i gwaru miasta.{" "}
          <span className="font-semibold"> Godzinną</span> przeprawę saniami
          rozświetlą nam pochodnie, a gdy już zgasną zastąpimy{" "}
          <span className="font-semibold"> biesiadą </span> przy góralskim
          ognisku czyli słynnej Watrze. Przygotowany dla Państwa{" "}
          <span className="font-semibold"> poczęstunek </span> czekał już będzie
          przy rozżarzonym ognisku, a czas umilać będzie{" "}
          <span className="font-semibold"> prawdziwa kapela góralska.</span>
        </p>
        {/* more text */}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Co oferujemy na kuligu w Kościelisku:"
            items={customItems}
            className="shadow-lg"
          />
        </div>
        {/* GODZINY I CENNIK */}
        <div className="my-20 text-center">
          <h3 className="text-2xl  mb-10 font-semibold">
            Start kuligu codziennie o  godz. 17:00, 19:00
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
              <li>godzinną przejażdżkę w saniach czteroosobowych,</li>
              <li>
                godzinną biesiadę z kapelą góralską wraz poczęstunkiem przy
                ognisku,
              </li>
              <li>bilety wstępu do TPN,</li>
              <li>pochodnie podczas jazdy saniami</li>
              <li>
                menu podczas kuligów: bigos, oscypek, pajda chleba z gazdowskim
                smalcem, wino grzane, kiełbasa, chleb, ketchup, ogórki,
                musztarda, herbata zwykła i góralska (bez limitu)
              </li>
              <li>
                * W przypadku grupy 3 - osobowej (lub 7 itd.) obowiązuje dopłata
                do pustego miejsca w saniach: 70zł
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
