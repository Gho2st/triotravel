"use client";
import { useTranslations } from "next-intl";

export default function TripTime({
  availableDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"], // Domyślne dni w polskim formacie
  showCallInfo = false,
  isKasprowy = false,
  details = false,
}) {
  const t = useTranslations("triptime");

  const shortDays = t.raw("days");
  const fullDays = t.raw("fullDays");

  // Mapowania dni między językami (polski jako punkt odniesienia)
  const dayTranslations = {
    pl: {
      Pon: "Pon",
      Wt: "Wt",
      Śr: "Śr",
      Czw: "Czw",
      Pt: "Pt",
      Sob: "Sob",
      Nd: "Nd",
    },
    en: {
      Pon: "Mon",
      Wt: "Tue",
      Śr: "Wed",
      Czw: "Thu",
      Pt: "Fri",
      Sob: "Sat",
      Nd: "Sun",
    },
    ar: {
      Pon: "الإثنين",
      Wt: "الثلاثاء",
      Śr: "الأربعاء",
      Czw: "الخميس",
      Pt: "الجمعة",
      Sob: "السبت",
      Nd: "الأحد",
    },
    hu: {
      Pon: "H",
      Wt: "K",
      Śr: "Sze",
      Czw: "Cs",
      Pt: "P",
      Sob: "Szo",
      Nd: "V",
    },
  };

  // Określ język na podstawie shortDays
  const currentLocale = shortDays.includes("Mon")
    ? "en"
    : shortDays.includes("الإثنين")
    ? "ar"
    : shortDays.includes("H")
    ? "hu"
    : "pl";

  // Normalizuj availableDays do bieżącego języka
  const normalizedAvailableDays = availableDays.map((day) => {
    const polishDays = Object.keys(dayTranslations.pl);
    if (polishDays.includes(day)) {
      return dayTranslations[currentLocale][day] || day;
    }
    // Jeśli dzień nie jest w polskim formacie, spróbuj odwrotnego mapowania
    const reverseMap = Object.entries(dayTranslations[currentLocale]).find(
      ([, value]) => value === day
    );
    return reverseMap ? reverseMap[1] : day;
  });

  // Mapowanie skróconych dni na pełne
  const mappedAvailableDays = normalizedAvailableDays.map((short) => {
    const index = shortDays.indexOf(short);
    return index !== -1 ? fullDays[index] : short;
  });

  const getDescription = () => {
    if (isKasprowy) {
      return t("kasprowyDaily");
    } else if (normalizedAvailableDays.length === 7) {
      return t("daily");
    } else if (normalizedAvailableDays.length > 0) {
      return t("specificDays", { days: mappedAvailableDays.join(", ") });
    } else {
      return t("noDays");
    }
  };

  // Ustaw kierunek tekstu dla arabskiego (RTL)
  const isRTL = currentLocale === "ar";

  return (
    <section
      className="py-12 px-2 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-lg mt-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl font-bold text-customBlue mb-6 sm:mb-8">
        {t("title")}
      </h2>

      <div className="flex justify-center gap-1 sm:gap-4 mb-6">
        {shortDays.map((day, i) => (
          <div
            key={day}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-sm sm:text-lg font-semibold transition-colors duration-200 ${
              normalizedAvailableDays.includes(day)
                ? "bg-customBlue text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            title={fullDays[i]}
          >
            {day}
          </div>
        ))}
      </div>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
        {getDescription()}
      </p>

      {showCallInfo && (
        <p className="text-gray-500 italic mt-10">{t("call")}</p>
      )}

      {details && <p className="text-gray-500 italic mt-6">{details}</p>}
    </section>
  );
}
