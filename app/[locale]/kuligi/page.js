import Card from "@/app/UI/Card";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import { useTranslations } from "next-intl";
export default function Kuligi() {
  const t = useTranslations("kuligi");
  const articles = [
    {
      title: t("cards.1"),
      image: "/kuligi/koscielisko.png",
      link: "/kuligi/goralski-koscielisko",
    },
    {
      title: t("cards.2"),
      image: "/kuligi/dolina.png",
      link: "/kuligi/dolina-chocholowska",
    },
    {
      title: t("cards.3"),
      image: "/kuligi/sylwestrowy.png",
      link: "/kuligi/wieczor-sylwestrowy",
    },
  ];
  return (
    <>
      <Header text={t("header")} />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <div className="md:w-3/4 mx-auto text-center">
          <p className="text-xl">
            <span className="font-bold">TrioTravel</span> {t("text")}
          </p>
          <h2 className="text-3xl font-medium my-20 leading-snug">
            {t("header2")}
          </h2>
        </div>
        {/* NAPIS Z LINIAMI PO BOKU */}
        <LineHeader text={t("header3")} />

        <div className="grid md:grid-cols-2 gap-16 mt-20 justify-center items-center">
          {articles.map((article, index) => (
            <Card key={index} article={article} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
