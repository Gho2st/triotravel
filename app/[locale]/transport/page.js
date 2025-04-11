import Header from "@/app/UI/Header";
import Image from "next/image";
import Gallery from "@/app/UI/Slider";

export default function Transport() {
  return (
    <>
      <Header text="Transport" />
      <div className="md:w-2/5 mx-auto">
        <Image
          src={"/transport/bus.png"}
          width={500}
          height={500}
          layout="responsive"
          alt="bus ze śladem przejechanej trasy"
        />
      </div>
      <section>
        <p className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-10 md:pb-24 md:w-3/4 mx-auto  text-xl text-center">
          Trio Travel oferuje kompleksowy i świetnie zorganizowany przewóz osób.
          Zakopane to nie tylko jedyny teren, na którym działamy, zajmujemy się
          również transportem na terenie całego kraju i zagranicy. Nasze usługi
          obejmują transfery z oraz na lotniska, przewozy lokalne, a także
          obsługę konferencji, wesel i innych wszelkich typowych jak i
          nietypowych zleceń. 
        </p>
        <Gallery
          images={[
            { url: "/transport/1.png", alt: "First image" },
            { url: "/transport/2.png", alt: "2 image" },
            { url: "/transport/3.png", alt: "3 image" },
            { url: "/transport/4.png", alt: "4 image" },
          ]}
        />
        <div className="px-6 md:px-20 xl:px-32 2xl:px-44 pb-10 md:pb-24 md:w-3/4 mx-auto  text-xl text-center">
          <h2 className="text-3xl md:text-4xl leading-snug mt-8 md:mt-16">
            <span className="font-bold">Trio Travel </span> to{" "}
            <span className="font-bold">Twój sposób </span> na bezpieczne i
            komfortowe podróżowanie. Zapraszamy do kontaktu i wspólnych
            kilometrów!
          </h2>
          <p className="mt-10">
            Dokładamy wszelkich starań aby każde zlecenie było wykonane
            należycie i spełniało oczekiwania naszych Klientów. Priorytetem
            pracy zespołu jest zadowolenie Klienta oraz wysoka jakość
            świadczonych usług. Nasi kierowcy to doświadczeni pracownicy,
            zapewniający pełen profesjonalizm oraz odpowiednie umiejętności.
          </p>
          <p className="">
            Dzięki wieloletniemu doświadczeniu w transporcie, organizowany przez
            nas przewóz osób to komfortowa i bezpieczna podróż. Obowiązkowo
            zapewniamy terminowość oraz atrakcyjne ceny. Każdy zlecający ma inne
            oczekiwania i potrzeby, dlatego zawsze dopasowujemy nasze usługi do
            indywidualnych wymagań.
          </p>
          <p className="">
            Nasze pojazdy posiadają wszelkie niezbędne zezwolenia oraz pełne
            wyposażenie umożliwiające bezproblemowe wyjazdy zagraniczne, co
            gwarantuje bezpieczeństwo i wygodę podróżnych podczas każdej trasy.
          </p>
        </div>
      </section>
    </>
  );
}
