import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
export default function Spacer() {
  const customItems = [
    "8 basenów whirpool z wodą termalną",
    "1 basen whirpool z wodą solankową,",
    "2 baseny wewnętrzne termalne ze stanowiskami do masażu,",
    "2 baseny zewnętrzne termalne z atrakcjami wodnymi (rwąca rzeka, dysze wodne, etc.),",
    "3 zjeżdżalnie (w tym jedna z zapadnią),",
    "basen pływacki o wymiarach 16x8 m z systemem monitoringu.",
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [
    "Rodzaj biletu",
    "HIT PAKIET czas 4 godziny (wstęp na strefę basenową i leczniczą, transport z miejsca zakwaterowania w obie strony GRATIS)",
  ];
  const tableRows = [
    ["Bilet normalny", "120 PLN"],
    [
      "Bilet ulgowy (do 10 lat, studencji do 26 roku życia, emeryci 65+) (do 10 lat)",
      "110 PLN",
    ],
  ];
  return (
    <>
      <Header text="Spacer w Koronach Drzew" />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/spacer-w-koronach-drzew/korony.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Odkryj Piękno Natury" />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto text-xl">
          Termy Chochołowskie to największy kompleks termalny na Podhalu. Duże
          baseny wewnętrzne i zewnętrzne łączna powierzchnia lustra wody to 3000
          m2. Kompleks posiada  plażę  trawiastą i piaszczystą gdzie, każdy
          znajdzie miejsce do upragnionego relaksu. W kompleksie znajdują się
          strefy basenowe jak i lecznicze.
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList
            title="W strefie basenowej znajdziecie:"
            items={customItems}
          />
        </div>
        <div className="mt-16 w-3/4 mx-auto">
          <Table headers={tableHeaders} rows={tableRows} />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            { url: "/wycieczki/termy/1.jpg", alt: "First image" },
            { url: "/wycieczki/termy/2.jpg", alt: "2 image" },
            { url: "/wycieczki/termy/3.jpg", alt: "3 image" },
            { url: "/wycieczki/termy/4.jpg", alt: "4 image" },
          ]}
        />
      </div>
    </>
  );
}
