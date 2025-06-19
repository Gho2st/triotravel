"use client";
import ClickButton from "@/app/UI/Buttons/ClickButton";
import { useState } from "react";
import { useTranslations } from "next-intl";
export default function BudapesztButtons() {
  const t = useTranslations("offer.tripslist.budapeszt");

  // Stany dla sekcji
  const [activeSection, setActiveSection] = useState(false); // Domyślnie false

  // Function to toggle active section
  const handleButtonClick = (section) => {
    setActiveSection((prev) => (prev === section ? false : section));
  };
  return (
    <>
      <div className="flex justify-center mt-16">
        <ClickButton
          onClick={() => handleButtonClick("warunki")}
          text={t("buttons.header")}
          bgColor={
            activeSection === "warunki" ? "bg-blue-700" : "bg-customBlue"
          }
        />
      </div>
      {activeSection === "warunki" && (
        <div className="text-center mt-10 md:w-3/4 mx-auto">
          <ul className="xl:text-lg mt-10">
            <li>{t("buttons.1")}</li>
            <li>{t("buttons.2")}</li>
            <li>{t("buttons.3")}</li>
            <li>{t("buttons.4")}</li>
          </ul>
        </div>
      )}
    </>
  );
}
