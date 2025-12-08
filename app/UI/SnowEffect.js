"use client";

import { useEffect } from "react";

export default function SnowEffect() {
  useEffect(() => {
    const snowContainer = document.createElement("div");
    snowContainer.className =
      "fixed inset-0 pointer-events-none z-50 overflow-hidden"; // Dodano overflow-hidden, żeby nie robić scrollbara

    const snowCount = window.innerWidth < 768 ? 40 : 80;

    for (let i = 0; i < snowCount; i++) {
      const snowflake = document.createElement("div");

      // Losujemy czas trwania animacji (np. 10s - 20s)
      const duration = Math.random() * 10 + 10;

      // KLUCZOWA ZMIANA:
      // Ustawiamy delay wyłącznie na ujemny, bazując na długości trwania animacji.
      // Dzięki temu płatek startuje w losowym punkcie swojej trasy (góra, środek, dół).
      const delay = Math.random() * -duration;

      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.opacity = `${Math.random() * 0.7 + 0.3}`;

      // Opcjonalnie: losowa wielkość dla lepszego efektu głębi
      const size = Math.random() * 10 + 10; // px
      snowflake.style.fontSize = `${size}px`;

      snowflake.innerHTML = "❄";
      snowContainer.appendChild(snowflake);
    }

    document.body.appendChild(snowContainer);

    return () => {
      // Bezpieczne usuwanie (sprawdzenie czy body nadal zawiera ten element)
      if (document.body.contains(snowContainer)) {
        document.body.removeChild(snowContainer);
      }
    };
  }, []);

  return null;
}
