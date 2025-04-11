import Header from "@/app/UI/Header";
import PartnerItem from "@/app/UI/PartnerItem";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("partners");

  // Tablica linków dla partnerów
  const partnerLinks = {
    skocznia: "https://muszyna.pl",
    wierszyki: "https://www.topkids-muszyna.pl/",
    oldstreet: "https://www.alpinasport.pl/",
    gorski: "https://www.dwkolejarz.pl/",
    elzbiecina: "https://20wszur.pl/",
    rentplanet: "https://20wszur.pl/",
    nosal: "https://trenerodadoz.pl/",
    klimatyczne: "https://activ-vital.pl/",
    patryk: "https://muszyna-domnawzgorzu.pl/",
  };
  return (
    <>
      <Header text="Nasi Partnerzy" />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <div className="mt-16 flex flex-col gap-32">
          {[
            "skocznia",
            "wierszyki",
            "oldstreet",
            "gorski",
            "elzbiecina",
            "rentplanet",
            "nosal",
            "klimatyczne",
            "patryk",
          ].map((partner, index) => (
            <PartnerItem
              key={partner} // zostaje dla reacta
              partner={partner}
              f={t}
              t={t.raw(partner)}
              index={index}
              link={partnerLinks[partner]} // Przekazujemy link
            />
          ))}
        </div>
      </section>
    </>
  );
}
