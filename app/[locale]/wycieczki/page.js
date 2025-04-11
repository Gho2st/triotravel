import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Card from "@/app/UI/Card";
import Services from "@/app/UI/Homepage/Services";
import { FaBus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

export default function Atrakcje() {
  const cardsData = [
    {
      icon: <FaBus className="text-4xl text-white" />,
      title: "Wycieczki i transport",
      description:
        "Trio Travel to biuro podróży posiadające duże doświadczenie w organizacji wszelkich projektów turystycznych, imprez tematycznych oraz transportu. Zakopane znamy jak własną kieszeń i nie ma dla nas rzeczy niemożliwych. Początkowo zajmowaliśmy się głównie transportem krajowym i międzynarodowym, później natomiast staliśmy się przedsiębiorstwem turystyczno-transportowym, organizującym sporo ciekawych realizacji, w tym fantastyczne wycieczki jednodniowe.",
    },
    {
      icon: <FaSearch className="text-4xl text-white" />,
      title: "Organizator Turystyki",
      description:
        "Nasza działalność jest zapisana w Rejestrze Organizatorów Turystyki i Pośredników Turystycznych Marszałka Województwa Małopolskiego pod numerem Z/54/2013. Posiadamy gwarancję ubezpieczeniową AXA, dlatego każda wyprawa z naszym biurem jest nie tylko pełna wrażeń, ale też zapewnia niezbędne bezpieczeństwo. Nasi Klienci doceniają nas, między innymi, za umiejętność dostosowania się do wymagań i potrzeb, kompleksowość oferowanych usług oraz elastyczność.",
    },
    {
      icon: <FaPeopleCarry className="text-4xl text-white" />,
      title: "Nasz Zespół",
      description:
        "Nasz zespół składa się z ludzi kreatywnych i pełnych energii, co gwarantuje organizację na najwyższym poziomie. Organizujemy kuligi, w tym te dostarczające największych emocji czyli kuligi wieczorne. Naszą kolejną wycieczką jest także spływ Dunajcem oraz wiele innnych wycieczek jednodniowych. Zakopane posiada mnóstwo atrakcji które chcieli byśmy Państwu pokazać, dlatego z nami na pewno nikt nie będzie się nudził. Oferujemy także najlepiej logistycznie zorganizowany przewóz osób po Zakopanem i nie tylko.",
    },
  ];

  const articles = [
    {
      title: "Spływ Dunajcem 2.5h",
      image: "/wycieczki/splyw.png",
      link: "/kuligi/goralski-koscielisko",
    },
    {
      title: "Chochołowskie Termy",
      image: "/wycieczki/termy/termy.png",
      link: "/wycieczki/chocholowskie-termy",
    },
    {
      title: "Spacer w Koronach Drzew",
      image: "/wycieczki/spacer-w-koronach-drzew/korony.png",
      link: "/wycieczki/spacer-w-koronach-drzew",
    },
    {
      title: "Jaskinia Bielańska",
      image: "/wycieczki/jaskinia.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Spływ Dunajcem 1.5h",
      image: "/wycieczki/splyw2.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Tajemnice Wieliczki",
      image: "/wycieczki/wieliczka.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Bilety na Kasprowy Wierch",
      image: "/wycieczki/kasprowy.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Wiedeń",
      image: "/wycieczki/wieden.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Budapeszt",
      image: "/wycieczki/budapeszt.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Zamek Orawski",
      image: "/wycieczki/zamek-orawski.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Świątynia Lodowa Hrebieniok",
      image: "/wycieczki/hrebieniok.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Zwiedzanie Krakowa",
      image: "/wycieczki/krakow.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Dookoła Tatr",
      image: "/wycieczki/tatry.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
    {
      title: "Rafting po Dunajcu",
      image: "/wycieczki/rafting.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
  ];
  return (
    <>
      <Header text="Wycieczki" />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Oferta Wiosna 2025" />
        <div className="grid grid-cols-2 gap-16 mt-20 justify-center items-center">
          {articles.map((article, index) => (
            <Card key={index} article={article} index={index} />
          ))}
        </div>
      </section>
      <section>
        <Services cards={cardsData} />
      </section>
    </>
  );
}
