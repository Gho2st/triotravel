"use client";
import { useState, useEffect } from "react";
import Button from "./Buttons/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PromoModal() {
  const t = useTranslations("promoModal");

  // Stan do kontrolowania widoczności modala
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Otwieranie modala po załadowaniu strony z kontrolą sessionStorage
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("winterPromoModalShown");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("winterPromoModalShown", "true");
      }, 2000); // Modal pojawia się po 2 sekundach
      return () => clearTimeout(timer);
    }
  }, []);

  // Funkcja do zamykania modala
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Zamykanie modala po kliknięciu poza banerem
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Obsługa klawisza Esc do zamykania modala
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500/70 flex items-center justify-center z-50 p-4 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-3xl shadow-2xl max-w-lg w-full p-8 transform transition-all duration-500 scale-100 animate-bounce-in">
            {/* Przycisk zamykania */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-3 right-3 text-blue-900 hover:text-blue-600 text-2xl font-bold focus:outline-none"
              aria-label="Zamknij modal"
            >
              &times;
            </button>

            {/* Zawartość modala */}
            <div className="text-center">
              {/* Zdjęcie promocyjne */}
              <Image
                src="/kuligi/photos/4.webp"
                alt={t("alt")}
                width={500}
                height={400}
                priority
                className="w-full h-auto rounded-xl shadow-md mb-6"
              />
              {/* Tekst specjalnej oferty */}
              <h2 className="text-3xl font-bold text-blue-900 mb-4 font-['Arial', 'sans-serif'] drop-shadow-sm">
                {t("header")}
              </h2>
              <p className="text-lg text-gray-800 mb-6 font-semibold leading-relaxed">
                {t("text")} <br />
                <span className="font-bold text-blue-900">{t("text2")}</span>
              </p>
              {/* Przycisk przekierowania */}
              <Button
                text={t("button")}
                onClick={closeModal}
                link="/kuligi"
                className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-lg tracking-wide"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
