import Link from "next/link";
import Button from "../Buttons/Button";
import { useTranslations } from "next-intl";

export default function WhyTrips() {
  const t = useTranslations("offer.whytrips");
  const c = useTranslations("offer.cta");

  const cardCount = 6; // lub dynamicznie jeśli znasz liczbę z backendu
  const cards = Array.from({ length: cardCount }, (_, i) => {
    const index = i + 1;
    const card = {
      title: t(`cards.${index}.header`),
      text: t(`cards.${index}.text`),
    };

    if (index === 4) {
      card.link = t(`cards.${index}.link`, { fallback: null });
      card.linktext = t(`cards.${index}.linktext`, { fallback: null });
    }

    return card;
  });

  return (
    <section className="px-6 xl:px-24 pb-16 xl:py-20 bg-gradient-to-b from-white to-gray-50">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900">{t("header")}</h2>
        <p className="mt-10 text-lg text-gray-700">
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {cards.map((card, index) => (
          <article
            key={index}
            className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{card.text}</p>
            {card.link && (
              <div className="mt-4">
                <Link
                  href={card.link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  → {card.linktext}
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{c("header")}</h3>
        <p className="text-gray-700 text-lg mb-6">
          {c.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <Button text={c("button")} link="/rezerwacje" />
      </div>
    </section>
  );
}
