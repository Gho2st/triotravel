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
    const hasSeenModal = sessionStorage.getItem("valentinePromoModalShown");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("valentinePromoModalShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handlePromoClick = () => {
    closeModal();
    setTimeout(() => {
      router.push("/kuligi/walentynkowy");
    }, 400);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-rose-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal-overlay"
      onClick={handleOutsideClick}
    >
      <div
        className="relative bg-gradient-to-br from-red-50 via-white to-rose-100 rounded-[2rem] shadow-[0_20px_50px_rgba(225,29,72,0.3)] 
                      max-w-lg w-full p-6 sm:p-8 transform transition-all duration-500 scale-100 border-4 border-white
                      max-h-[90vh] overflow-y-auto"
      >
        {/* Dekoracyjne serca - ukryte na bardzo małych ekranach dla czytelności */}
        <div className="hidden sm:block absolute top-4 left-4 text-rose-200 opacity-50 animate-pulse text-2xl">
          ❤
        </div>
        <div className="hidden sm:block absolute bottom-10 right-10 text-rose-300 opacity-40 animate-bounce text-3xl">
          ❤
        </div>

        <button
          onClick={closeModal}
          className="absolute cursor-pointer top-2 right-4 text-rose-400 hover:text-rose-600 transition-colors text-4xl font-light focus:outline-none z-10"
          aria-label="Zamknij"
        >
          ×
        </button>

        <div className="text-center">
          {/* Obrazek z ograniczoną wysokością na mobile */}
          <div className="relative inline-block mb-4 sm:mb-6 group w-full">
            <Image
              src="/walentynki.svg"
              alt={t("alt")}
              width={500}
              height={400}
              priority
              className="w-full h-auto max-h-[30vh] object-cover rounded-2xl shadow-inner border-2 border-rose-100"
            />
          </div>

          {/* Mniejszy font na mobile: text-2xl zamiast 3xl */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-700 mb-2 sm:mb-4 tracking-tight">
            {t("header")}
          </h2>

          <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
            <p className="text-sm sm:text-lg text-gray-700 font-medium leading-relaxed">
              {t("text")}
            </p>
            <p className="text-sm mt-2 sm:text-xl font-bold text-red-600 drop-shadow-sm">
              {t("text2")}
            </p>
          </div>

          <Button text={t("button")} onClick={handlePromoClick} />
        </div>
      </div>
    </div>
  );
}
