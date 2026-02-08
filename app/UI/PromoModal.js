"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./Buttons/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PromoModal() {
  const t = useTranslations("promoModal");
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Zmieniono klucz, aby osoby, które widziały zimowy modal, zobaczyły też walentynkowy
    const hasSeenModal = sessionStorage.getItem("valentinePromoModalShown");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("valentinePromoModalShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePromoClick = () => {
    closeModal();
    // Dajemy czas na animację fade-out / scale (300–500 ms)
    setTimeout(() => {
      router.push("/kuligi/walentynkowy");
    }, 400);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-rose-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal-overlay"
      onClick={handleOutsideClick}
    >
      {/* Główny kontener modalu */}
      <div className="relative bg-gradient-to-br from-red-50 via-white to-rose-100 rounded-[2rem] shadow-[0_20px_50px_rgba(225,29,72,0.3)] max-w-lg w-full p-8 transform transition-all duration-500 scale-100 border-4 border-white">
        {/* Dekoracyjne serca */}
        <div className="absolute top-4 left-4 text-rose-200 opacity-50 animate-pulse text-2xl">
          ❤
        </div>
        <div className="absolute bottom-10 right-10 text-rose-300 opacity-40 animate-bounce text-3xl">
          ❤
        </div>

        {/* Przycisk zamykania (×) */}
        <button
          onClick={closeModal}
          className="absolute cursor-pointer top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors text-3xl font-light focus:outline-none"
          aria-label="Zamknij modal"
        >
          ×
        </button>

        <div className="text-center">
          {/* Zdjęcie */}
          <div className="relative inline-block mb-6 group">
            <Image
              src="/walentynki.svg"
              alt={t("alt")}
              width={500}
              height={400}
              priority
              className="w-full h-auto rounded-2xl shadow-inner border-2 border-rose-100"
            />
            <div className="absolute inset-0 rounded-2xl ring-4 ring-rose-500/10 transition-all duration-300 group-hover:ring-rose-500/20" />
          </div>

          {/* Nagłówek */}
          <h2 className="text-3xl font-extrabold text-rose-700 mb-4 tracking-tight">
            {t("header")}
          </h2>

          {/* Tekst oferty */}
          <div className="space-y-2 mb-8">
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              {t("text")}
            </p>
            <p className="text-xl font-bold text-red-600 drop-shadow-sm">
              {t("text2")}
            </p>
          </div>

          {/* Przycisk akcji – najważniejsza zmiana tutaj */}
          <Button
            text={t("button")}
            onClick={handlePromoClick}
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 font-bold py-4 px-12 rounded-full shadow-[0_10px_20px_rgba(225,29,72,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 text-lg"
          />
        </div>
      </div>
    </div>
  );
}
