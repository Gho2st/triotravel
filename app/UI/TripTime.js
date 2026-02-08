"use client";
import { useTranslations } from "next-intl";

export default function TripTime({
  availableDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
  showCallInfo = false,
  isKasprowy = false,
  details = false,
}) {
  const t = useTranslations("triptime");

  const shortDays = t.raw("days");
  const fullDays = t.raw("fullDays");

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
    de: {
      Pon: "Mo",
      Wt: "Di",
      Śr: "Mi",
      Czw: "Do",
      Pt: "Fr",
      Sob: "Sa",
      Nd: "So",
    },
    es: {
      Pon: "Lun",
      Wt: "Mar",
      Śr: "Mié",
      Czw: "Jue",
      Pt: "Vie",
      Sob: "Sáb",
      Nd: "Dom",
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

  const currentLocale = shortDays.includes("Mon")
    ? "en"
    : shortDays.includes("Mo")
      ? "de"
      : shortDays.includes("Lun")
        ? "es"
        : shortDays.includes("الإثنين")
          ? "ar"
          : shortDays.includes("H")
            ? "hu"
            : "pl";

  const normalizedAvailableDays = availableDays.map((day) => {
    const polishDays = Object.keys(dayTranslations.pl);
    if (polishDays.includes(day)) {
      return dayTranslations[currentLocale][day] || day;
    }
    return day;
  });

  const mappedAvailableDays = normalizedAvailableDays.map((short) => {
    const index = shortDays.indexOf(short);
    return index !== -1 ? fullDays[index] : short;
  });

  const getDescription = () => {
    if (isKasprowy) return t("kasprowyDaily");
    if (normalizedAvailableDays.length === 7) return t("daily");
    return normalizedAvailableDays.length > 0
      ? t("specificDays", { days: mappedAvailableDays.join(", ") })
      : t("noDays");
  };

  return (
    <section
      className="py-10 md:py-16 px-4 text-center bg-gray-50 rounded-3xl mt-12 md:mt-16"
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
    >
      <h2 className="text-xl md:text-3xl font-bold text-customBlue mb-8">
        {t("title")}
      </h2>

      {/* Poprawiony kontener: elastyczny flex, który nie wymusza sztywnego gridu */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 max-w-full mx-auto">
        {shortDays.map((day, i) => {
          const isActive = normalizedAvailableDays.includes(day);
          return (
            <div
              key={day}
              className={`
                /* Dynamiczna wielkość: od 38px na bardzo małych do 48px na desktopie */
                w-[38px] h-[38px] xs:w-[42px] xs:h-[42px] sm:w-12 sm:h-12 
                flex items-center justify-center 
                rounded-xl sm:rounded-full /* Bardziej nowoczesny look z lekkim zaokrągleniem na mobile */
                text-[10px] xs:text-[11px] sm:text-base font-bold 
                transition-all duration-300 border-2
                ${
                  isActive
                    ? "bg-customBlue border-customBlue text-white shadow-lg scale-110"
                    : "bg-white border-gray-100 text-gray-300"
                }
              `}
              title={fullDays[i]}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto px-2">
        <p className="text-base md:text-xl text-gray-700 font-medium leading-relaxed">
          {getDescription()}
        </p>

        {showCallInfo && (
          <p className="text-xs md:text-base text-gray-400 italic mt-8 border-t border-gray-100 pt-6">
            {t("call")}
          </p>
        )}
      </div>
    </section>
  );
}
