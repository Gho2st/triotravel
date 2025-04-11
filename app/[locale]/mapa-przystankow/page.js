import Header from "@/app/UI/Header";
import Image from "next/image";

export default function Map() {
  return (
    <>
      <Header text="Mapa Przystanków" />

      <section
        className="min-h-[100vh] "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("/mapa-przystankow/1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white text-xl w-3/4 mx-auto px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
          <h2 className="text-5xl mb-16  font-bold leading-snug">
            Miejsce Spotkań - Punkty odbioru na terenie Zakopanego i okolic
          </h2>
          <p>
            W Trio Travel dbamy o Twój komfort, dla tego oferujemy dogodne
            punkty odbioru na terenie Zakopanego i okolic. Nasza mapa
            przystanków obejmuje zarówno centrum Zakopanego, jak i pobliskie
            miejscowości, takie jak Kościelisko, Poronin, Murzasichle, Biały
            Dunajec czy Gliczarów.
          </p>
          <p className="mt-10">
            Sprawdź naszą mapę i wybierz punkt odbioru w pobliżu Twojego miejsca
            pobytu – od popularnych lokalizacji w Zakopanem, przez urokliwe
            okolice Tatrzańskiego Parku Narodowego, aż po malownicze wsie w
            regionie.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/3">
            <Image
              src="/mapa-przystankow/2.png"
              width={500}
              height={500}
              layout="responsive"
              alt="telefon w ręce z włączoną aplikację mapy"
            />
          </div>
          <div className="text-white mt-32">
            <h3 className="text-4xl font-bold">
              {" "}
              Dlaczego warto wybrać nasze punkty odbioru?
            </h3>
            <ul className="mt-16 text-xl flex flex-col gap-5">
              <li>
                Szeroki zasięg: Odbieramy Cię z wielu miejsc w Zakopanem i
                okolicach.
              </li>
              <li>
                Wygoda: Punkty są zlokalizowane w strategicznych miejscach,
                blisko popularnych tras i noclegów.
              </li>
              <li>
                Elastyczność: Jeśli masz pytania lub potrzebujesz indywidualnego
                podejścia, skontaktuj się z nami!
              </li>
            </ul>
            <p className="text-xl mt-16 font-bold w-2/3">
              Zapoznaj się z mapą i dołącz do nas w wybranym punkcie – czekamy,
              by wspólnie odkrywać piękno Tatr i Pienin!
            </p>
          </div>
        </div>
      </section>
      <div className="">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=10xF1NK7XYLSKAPftKi0IQ6fYeM3jtdVR"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </>
  );
}
