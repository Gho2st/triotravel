"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const t = useTranslations("polityka-cookies.banner");
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    ad_Storage: "denied",
    analytics_Storage: "denied",
  });

  // Sprawdzenie istniejącej zgody i inicjalizacja Clarity oraz GTM
  useEffect(() => {
    console.log("CookieConsent: Checking localStorage for clarityConsent");
    const storedConsent = localStorage.getItem("clarityConsent");
    if (storedConsent) {
      console.log("CookieConsent: Found stored consent:", storedConsent);
      const parsedConsent = JSON.parse(storedConsent);
      setConsent(parsedConsent);
      sendClarityConsent(parsedConsent);
      handleGTMConsent(parsedConsent);
      setShowBanner(false);
    } else {
      console.log("CookieConsent: No stored consent, showing banner");
      setShowBanner(true);
    }

    // Debugowanie ładowania Clarity
    const checkClarity = setInterval(() => {
      if (typeof window !== "undefined" && window.clarity) {
        console.log("CookieConsent: Clarity script loaded");
        clearInterval(checkClarity);
        if (storedConsent) {
          sendClarityConsent(JSON.parse(storedConsent));
        }
      }
    }, 1000);

    return () => clearInterval(checkClarity);
  }, []);

  // Funkcja wysyłająca zgodę do Clarity
  const sendClarityConsent = (consentState) => {
    if (typeof window !== "undefined" && window.clarity) {
      console.log("CookieConsent: Sending consent to Clarity:", consentState);
      window.clarity("consentv2", {
        ad_Storage: consentState.ad_Storage,
        analytics_Storage: consentState.analytics_Storage,
      });
      if (
        consentState.ad_Storage === "denied" &&
        consentState.analytics_Storage === "denied"
      ) {
        console.log(
          "CookieConsent: Both consents denied, erasing Clarity cookies"
        );
        window.clarity("consent", false);
      }
      // Sprawdź status zgody Clarity po krótkim opóźnieniu
      setTimeout(() => {
        window.clarity(
          "metadata",
          (d, upgrade, consent) => {
            console.log(
              "CookieConsent: Clarity consent status after send:",
              consent
            );
          },
          false,
          true,
          true
        );
      }, 500);
    } else {
      console.log("CookieConsent: Clarity not loaded or window undefined");
    }
  };

  // Funkcja obsługująca zgodę dla GTM
  const handleGTMConsent = (consentState) => {
    if (typeof window !== "undefined") {
      if (consentState.analytics_Storage === "granted") {
        console.log("CookieConsent: Loading GTM script");
        // Usuń istniejący skrypt GTM, jeśli istnieje
        const existingScript = document.getElementById("gtm-script");
        if (existingScript) {
          existingScript.remove();
        }
        // Dodaj skrypt GTM
        const script = document.createElement("script");
        script.id = "gtm-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-M8ZVL5X6`;
        document.head.appendChild(script);

        // Inicjalizacja GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        console.log("CookieConsent: GTM initialized");
      } else {
        console.log(
          "CookieConsent: Analytics consent denied, removing GTM script"
        );
        // Usuń skrypt GTM, jeśli istnieje
        const existingScript = document.getElementById("gtm-script");
        if (existingScript) {
          existingScript.remove();
        }
        // Wyczyść dataLayer, jeśli istnieje
        if (window.dataLayer) {
          window.dataLayer = [];
        }
      }
    }
  };

  // Zapis zgody i aktualizacja Clarity oraz GTM
  const saveConsent = (newConsent) => {
    console.log("CookieConsent: Saving consent:", newConsent);
    setConsent(newConsent);
    localStorage.setItem("clarityConsent", JSON.stringify(newConsent));
    sendClarityConsent(newConsent);
    handleGTMConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Obsługa przycisku "Zaakceptuj wszystkie"
  const handleAcceptAll = () => {
    const newConsent = {
      ad_Storage: "granted",
      analytics_Storage: "granted",
    };
    saveConsent(newConsent);
  };

  // Obsługa przycisku "Odrzuć wszystkie"
  const handleRejectAll = () => {
    const newConsent = {
      ad_Storage: "denied",
      analytics_Storage: "denied",
    };
    saveConsent(newConsent);
  };

  // Obsługa zapisu ustawień niestandardowych
  const handleSaveSettings = () => {
    saveConsent(consent);
  };

  // Przełączanie zgód
  const toggleConsent = (key) => {
    setConsent((prev) => ({
      ...prev,
      [key]: prev[key] === "granted" ? "denied" : "granted",
    }));
  };

  if (!showBanner) {
    console.log("CookieConsent: Banner hidden due to showBanner being false");
    return null;
  }

  console.log("CookieConsent: Rendering banner");
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-6 z-50 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">{t("header")}</h2>
        <p className="mb-6 text-sm">{t("text")}</p>
        {showSettings && (
          <div className="mb-6 flex flex-col gap-4">
            <h3 className="text-lg font-medium">{t("settings.header")}</h3>
            <p className="text-sm mb-4">{t("settings.text")}</p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={consent.analytics_Storage === "granted"}
                onChange={() => toggleConsent("analytics_Storage")}
                className="h-5 w-5"
              />
              {t("settings.analytics.label")}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={consent.ad_Storage === "granted"}
                onChange={() => toggleConsent("ad_Storage")}
                className="h-5 w-5"
              />
              {t("settings.advertising.label")}
            </label>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSaveSettings}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                {t("settings.buttons.save")}
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                {t("settings.buttons.cancel")}
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAcceptAll}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            {t("buttons.acceptAll")}
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            {t("buttons.rejectAll")}
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            {t("buttons.customize")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
