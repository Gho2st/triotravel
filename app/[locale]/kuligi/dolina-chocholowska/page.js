import Header from "@/app/UI/Header";
import Table from "@/app/UI/Table";
import Gallery from "@/app/UI/Slider";
import LineHeader from "@/app/UI/LineHeader";
import BackgroundList from "@/app/UI/BackgroundList";
import { useTranslations } from "next-intl";

export default function Dolina() {
  const t = useTranslations("kuligi.dolina");
  // Przykładowe dane dla tabeli
  const tableHeaders = [
    t("table.header1"),
    t("table.header2"),
    t("table.header3"),
  ];
  const tableRows = [
    [t("table.3"), "199 PLN", "219 PLN"],
    [t("table.4"), "179 PLN", "199PLN"],
  ];

  const customItems = [
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
  ];
  return (
    <>
      <Header text={t("header")} />
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
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        {/* more text */}
        <div className="flex justify-center mt-16">
          <BackgroundList
            title={t("header3")}
            items={customItems}
            className="shadow-lg"
          />
        </div>
        {/* GODZINY I CENNIK */}
        <div className="mt-20 text-center">
          <h3 className="text-xl xl:text-2xl md:w-3/4 mx-auto  mb-10 font-semibold">
            {t("info")}
          </h3>
          <h4 className=" mb-10 text-lg font-medium">{t("header4")}</h4>
          <Table headers={tableHeaders} rows={tableRows} />
          <div className="mt-10">
            <span className="text-lg font-bold">{t("table.header4")}</span>

            <ul className="xl:text-lg flex md:w-3/4 mx-auto flex-col gap-2 mt-10">
              <li>{t("table.list.1")}</li>
              <li>{t("table.list.2")}</li>
              <li>{t("table.list.3")}</li>
              <li>{t("table.list.4")}</li>
              <li>{t("table.list.5")}</li>
              <li>{t("table.list.6")}</li>
              <li>{t("table.list.7")}</li>
              <li>{t("table.list.8")}</li>
            </ul>
          </div>
        </div>
      </section>
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
    </>
  );
}
