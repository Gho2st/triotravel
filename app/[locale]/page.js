import About from "../UI/Homepage/About";
import Cta from "../UI/Homepage/Cta";
import Hero from "../UI/Homepage/Hero";
import Offer from "../UI/Homepage/Offer";
import Why from "../UI/Homepage/Why";
import Services from "../UI/Homepage/Services";
import { FaBus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import Info from "../UI/Info";
import Reviews from "../UI/Reviews";
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

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Why />
      <Services cards={cardsData} />
      <Reviews />
      <Cta />
      <Info />
    </>
  );
}
