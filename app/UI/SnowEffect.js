// app/UI/SnowEffect.tsx  (nowy komponent klientowski)
"use client";

import { useEffect } from "react";

export default function SnowEffect() {
  useEffect(() => {
    // Tworzymy 50–80 płatków śniegu (wystarczy, wygląda gęsto, a jest super lekkie)
    const snowContainer = document.createElement("div");
    snowContainer.className = "fixed inset-0 pointer-events-none z-50";

    const snowCount = window.innerWidth < 768 ? 40 : 70; // mniej na mobile

    for (let i = 0; i < snowCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDelay = `${Math.random() * 10}s`;
      snowflake.style.opacity = Math.random() * 0.7 + 0.3;
      snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // 10–20s
      snowflake.innerHTML = "❄"; // albo '•' albo '✻' albo mały SVG
      snowContainer.appendChild(snowflake);
    }

    document.body.appendChild(snowContainer);

    return () => {
      document.body.removeChild(snowContainer);
    };
  }, []);

  return null;
}
