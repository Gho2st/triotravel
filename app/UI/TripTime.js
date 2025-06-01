"use client";
import { useTranslations } from "next-intl";

export default function TripTime({
  availableDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
  showCallInfo = false, // opcjonalny prop
  isKasprowy = false, // <-- nowy parametr
}) {
  const t = useTranslations("triptime");

  // Pobierz dni skrócone i pełne z tłumaczeń
  const shortDays = t.raw("days"); // ["Pon", "Wt", ...]
  const fullDays = t.raw("fullDays"); // ["Poniedziałek", "Wtorek", ...]

  // Mapowanie skróconych dni na pełne
  const mappedAvailableDays = availableDays.map((short) => {
    const index = shortDays.indexOf(short);
    return index !== -1 ? fullDays[index] : short;
  });

  const getDescription = () => {
    if (isKasprowy) {
      return t("kasprowyDaily");
    } else if (availableDays.length === 7) {
      return t("daily");
    } else if (availableDays.length > 0) {
      return t("specificDays", { days: mappedAvailableDays.join(", ") });
    } else {
      return t("noDays");
    }
  };

  return (
    <section className="py-12 px-2 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-lg mt-16">
      <h2 className="text-3xl font-bold text-customBlue mb-6 sm:mb-8">
        {t("title")}
      </h2>

      <div className="flex justify-center gap-1 sm:gap-4 mb-6">
        {shortDays.map((day, i) => (
          <div
            key={day}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-sm sm:text-lg font-semibold transition-colors duration-200 ${
              availableDays.includes(day)
                ? "bg-customBlue text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            title={fullDays[i]} // podpowiedź po najechaniu
          >
            {day}
          </div>
        ))}
      </div>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
        {getDescription()}
      </p>

      {showCallInfo && (
        <p className=" text-gray-500 italic mt-10">{t("call")}</p>
      )}
    </section>
  );
}
