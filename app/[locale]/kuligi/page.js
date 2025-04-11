import Button from "@/app/UI/Buttons/Button";
import Card from "@/app/UI/Card";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";

export default function Kuligi() {
  const articles = [
    {
      title: "Góralski Kulig Kościelisko",
      image: "/kuligi/koscielisko.png",
      link: "/kuligi/goralski-koscielisko",
    },
    {
      title: "Kulig Dolina Chochołowska",
      image: "/kuligi/dolina.png",
      link: "/kuligi/dolina-chocholowska",
    },
    {
      title: "Kulig w Wieczór Sylwestrowy",
      image: "/kuligi/sylwestrowy.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
  ];
  return (
    <>
      <Header text="Kuligi" />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <div className="w-3/4 mx-auto text-center">
          <p className="text-xl">
            <span className="font-bold">TrioTravel</span> organizuje jedyne w
            swoim rodzaju kuligi. Zakopane posiada wiele niezwykle urokliwych
            miejsc, do których z pewnością warto zaliczyć Dolinę Kościeliska. W
            ramach kuligów przewidzianych jest wiele atrakcji takich jak np.
            <span className="font-bold">prawdziwa biesiada góralska.</span>{" "}
            Kuligi organizowane są przez cały rok. Nasze biuro podróży zapewnia
            odbiór busem z miejsca, w którym jesteście zakwaterowani,
            poczęstunek w iście góralskim stylu. Cały pobyt jest umilany przez
            <span className="font-bold"> rytm muzyki kapeli góralskiej.</span>
          </p>
          <h2 className="text-3xl font-medium my-20 leading-snug">
            Zobacz Zakopane z tej najpiękniejszej strony i udaj się z Nami na
            niezapomniany kulig!
          </h2>
        </div>
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text=" Kuligi" />

        <div className="grid grid-cols-2 gap-16 mt-20 justify-center items-center">
          {articles.map((article, index) => (
            <Card key={index} article={article} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
