"use client";
import { useState, useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function Analytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    // Funkcja sprawdzająca zgodę
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent") === "accepted";
      const analytics = JSON.parse(
        localStorage.getItem("cookiePreferences") || "{}"
      ).analytics;
      setShouldLoadAnalytics(consent && analytics);
    };

    // Sprawdź zgodę przy pierwszym renderowaniu
    checkConsent();

    // Dodaj nasłuchiwanie zmian w localStorage (dla dynamicznych aktualizacji)
    window.addEventListener("storage", checkConsent);

    // Opcjonalnie: nasłuchuj zmian w tej samej karcie
    const interval = setInterval(checkConsent, 500); // Sprawdzaj co 0.5s

    return () => {
      window.removeEventListener("storage", checkConsent);
      clearInterval(interval);
    };
  }, []);

  return shouldLoadAnalytics ? (
    <>
      {console.log("Ładowanie GTM i Clarity")} {/* Debug */}
      <GoogleTagManager gtmId="GTM-M8ZVL5X6" />
      <Script id="microsoft-clarity-analytics" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "se6dbhfcmd");
        `}
      </Script>
    </>
  ) : null;
}
