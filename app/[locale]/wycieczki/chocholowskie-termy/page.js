import BackgroundList from "@/app/UI/BackgroundList";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import { useTranslations } from "next-intl";
export default function Termy() {
  const t = useTranslations("offer.tripslist.termy");
  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
  ];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), , "120 PLN"],
    [t("table.2"), , "110 PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/termy/termy.png"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt="Basen termalny pełen wody na tle budynku Term Chochołowskich"
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t("text")}
        </p>
        <div className="flex justify-center mt-16">
          <BackgroundList title={t("header3")} items={customItems} />
        </div>
        <div className="mt-16">
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
