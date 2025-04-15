import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import FunFact from "@/app/UI/FunFact";
export default function SplywDluzszy() {
  const customItems = [
    "Rejs statkiem po Jeziorze Czorsztyńskim (Podczas rejsu statkiem spacerowym będziesz mógł podziwiać zaporę wodną, ruiny zamku Czorsztyńskiego, zamek Niedzica, skansen Czorsztyński oraz przepiękny górski krajobraz). Taki rejs to przygoda, która na długo zostanie w twojej pamięci!",
    "Zamek w Niedzicy -  gdzie więziono i torturowano Janosika.",
    "Zaporę Czorsztyńską wraz z spektakularnym malowidłem wykonanym w technice 3D",
    "Park Miniatur Podhala, Orawy i Spisza, park linowy.",
    "Wracając do Zakopanego zatrzymamy się w Dębnie, gdzie znajduje się zabytkowy drewniany Kościół z XV w wpisany na listę UNESCO - prelekcja z Panią kustosz ok. 20 min.",
  ];

  const tripItems = [
    "8:00 - Wyjazd z Zakopanego",
    "10:00 - Spływ Dunajcem do Szczawnicy (około 2,15 h)",
    "12:30 - Odbiór ze Szczawnicy i przejazd do Niedzicy",
    "13:00 - Czas wolny (2 h)",
    "15:00 - Przejazd do Dębna",
    "15:30 - Zwiedzanie Kościółka z Panią Kustosz (około 20 minut)",
    "16:00 - Wyjazd powrotny",
    "17:00 - Planowy przyjazd do Zakopanego",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = ["Rodzaj biletu", "Spływ Dunajcem 2.5h"];
  const tableRows = [
    ["Bilet normalny", "180 PLN*"],
    ["Bilet ulgowy (do 10 lat)", "160 PLN*"],
    ["Bilet ulgowy (do 3 lat)", "80 PLN*"],
  ];
  return (
    <>
      <Header text="Spływ Dunajcem 2.5h" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/splyw-dunajcem-dluzszy/splyw.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Spływ tratwami drewnianymi na rzece Dunajec w obliczu natury"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Co oferujemy?" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          Przygotowaliśmy dla Państwa szereg niezwykle ciekawych atrakcji, które
          z pewnością uczynią czas Państwa wypoczynku szalenie interesującym i
          niezapomnianym. Proponowany przez nas spływ Dunajcem z Zakopanego to
          rewelacyjny sposób na to, aby należycie nacieszyć się pięknymi
          krajobrazami, a zarazem wiele zwiedzić. Flisacy umilą go Państwu
          fascynującymi opowieściami i legendami związanymi z rzeką oraz jej
          okolicami. Poza spływem na drewnianej tratwie, skąd nacieszycie
          Państwo oczy widokiem otaczających Pienin, oferta obejmuje również
          możliwość zwiedzania zamku w Niedzicy, zapory na Dunajcu czy Parku
          Miniatur Podhala, Orawy i Spisza.  
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="Wycieczka w Pieniny: Spływ i Niedzica"
            text={
              <>
                Podczas wycieczki w Pieniny, poza główną atrakcją, którą jest
                spływ na drewnianych tratwach-odwiedzisz również Niedzicę, w
                której do wyboru masz <strong>jedną</strong> z atrakcji:
              </>
            }
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          Sezon flisacki trwa od 1 kwietnia do 31 października - świątek, piątek
          i niedziele. Zatem na wycieczkę zapraszamy codziennie!
        </p>
        <div className="mt-16 md:w-3/4 mx-auto">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: opiekę kierowcy podczas wycieczki oraz ubezpieczenie NNW"
          />
          <TripProgram
            title={
              <>
                Program wycieczki <br></br> (ok.8-9h):
              </>
            }
            items={tripItems}
          />
        </div>
      </section>
      <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <FunFact />
      </div>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/splyw-dunajcem-dluzszy/1.jpg",
              alt: "First image",
            },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/2.jpg", alt: "2 image" },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/3.jpg", alt: "3 image" },
            { url: "/wycieczki/splyw-dunajcem-dluzszy/4.jpg", alt: "4 image" },
          ]}
        />
      </div>
    </>
  );
}
