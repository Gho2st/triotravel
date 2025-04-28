import Header from "@/app/UI/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LineHeader from "@/app/UI/LineHeader";
import Button from "@/app/UI/Buttons/Button";

// Komponent pojedynczej karty
const FunFactCard = ({ header, text }) => (
  <div className="relative p-6 xl:p-10 bg-gradient-to-br from-blue-50 to-red-50 shadow-2xl rounded-2xl">
    <h3 className="font-bold font-serif text-lg md:text-xl 2xl:text-2xl mb-6">
      {header}
    </h3>
    <p className="md:text-lg leading-relaxed">{text}</p>
    <div className="absolute top-0 left-0 w-2 h-full bg-red-600 rounded-l-3xl"></div>
  </div>
);

export default function Ciekawostki() {
  const t = useTranslations(
    "offer.tripslist.splyw-dunajcem-dluzszy.funfact.more"
  );

  // Pobierz obiekt cards i przekształć go w tablicę
  const cardsObject = t.raw("cards") || {};
  const cards = Object.values(cardsObject);

  return (
    <>
      <Header text={t("header")} />
      <div className="flex md:w-3/4 mx-auto justify-center md:mt-16 h-[700px]">
        <Image
          src="/wycieczki/splyw-dunajcem-dluzszy/1.jpg"
          width={500}
          height={500}
          layout="responsive"
          className="object-cover"
          alt={t("alt.1")}
        />
      </div>
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header2")} />
        <p className="mt-10 md:mt-16 text-center md:w-3/4 mx-auto xl:text-xl">
          {t("text")}
        </p>
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-8 md:gap-12 xl:gap-16">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <FunFactCard key={index} header={card.header} text={card.text} />
            ))
          ) : (
            <p className="text-center">Brak dostępnych ciekawostek.</p>
          )}
        </div>
        {/* CTA */}
        <div className="text-center mt-16 md:mt-24 bg-customRed p-10 text-white rounded-2xl shadow-2xl">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
            {t("cta.header")}
          </h2>
          <p className="my-8 xl:my-12 font-medium md:text-lg xl:text-xl">
            {t("cta.text")}
          </p>
          <Button text={t("cta.button")} link="/rezerwacje" />
        </div>
      </section>
    </>
  );
}
