import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Image from "next/image";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import TripProgram from "@/app/UI/TripProgram";
import BackgroundList from "@/app/UI/BackgroundList";
import { useTranslations } from "next-intl";

export default function Rafting() {
  const t = useTranslations("offer.tripslist.rafting-po-dunajcu");
  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
  ];
  const tripItems = [];

  // Przykładowe dane dla tabeli
  const tableHeaders = [t("table.header1"), t("table.header2")];
  const tableRows = [
    [t("table.1"), "160 PLN*"],
    [t("table.2"), "140 PLN*"],
    ["", t("table.additional")],
    [t("table.3"), "25PLN/23PLN"],
    [t("table.4"), "25PLN/23PLN"],
    [t("table.5"), "12LN/10PLN"],
  ];
  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px] ">
        <Image
          src="/wycieczki/rafting-po-dunajcu/rafting.png"
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
          <BackgroundList
            title={t("header3")}
            text={t("list.header")}
            items={customItems}
          />
        </div>
        <p className="text-2xl text-center mt-16 md:w-3/4 mx-auto font-medium">
          {t("info")}
        </p>
        <div className="mt-16">
          <Table
            headers={tableHeaders}
            rows={tableRows}
            text="* Cena obejmuje: Opiekę kierowcy, bilet na spływ, wstęp do PPN oraz ubezpieczenie NNW "
          />
        </div>
        <div className="mt-16">
          <TripProgram
            title={t("tripprogram.header") + " ok. 9-10h"}
            items={tripItems}
          />
        </div>
      </section>
      <div>
        <Gallery
          images={[
            {
              url: "/wycieczki/rafting-po-dunajcu/1.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/2.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/3.png",
              alt: "First image",
            },
            {
              url: "/wycieczki/rafting-po-dunajcu/4.png",
              alt: "First image",
            },
          ]}
        />
      </div>
    </>
  );
}
