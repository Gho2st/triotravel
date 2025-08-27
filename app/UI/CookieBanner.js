"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [consent, setConsent] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Nowy stan ładowania
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem("cookieConsent");
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedConsent) {
        setConsent(savedConsent);
        if (savedPreferences) {
          setCookiePreferences(JSON.parse(savedPreferences));
        }
      }
    } catch (error) {
      console.error("Błąd podczas odczytu localStorage:", error);
    } finally {
      setIsLoading(false); // Zakończ ładowanie po odczycie
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = { necessary: true, analytics: true };
    setConsent("accepted");
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    window.dispatchEvent(new Event("storage"));
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const preferences = { necessary: true, analytics: false };
    setConsent("rejected");
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    window.dispatchEvent(new Event("storage"));
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const consentValue = cookiePreferences.analytics ? "accepted" : "rejected";
    setConsent(consentValue);
    localStorage.setItem("cookieConsent", consentValue);
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    window.dispatchEvent(new Event("storage"));
    setShowSettings(false);
  };

  const toggleAnalytics = () => {
    setCookiePreferences((prev) => ({
      ...prev,
      analytics: !prev.analytics,
    }));
  };

  // Nie renderuj nic, dopóki stan nie zostanie załadowany
  if (isLoading) return null;
  if (consent === "accepted" || consent === "rejected") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4 z-50 shadow-lg">
      <p className="text-sm text-center sm:text-left">
        Cześć! Używamy cookies (np. Google Analytics, Microsoft Clarity), aby
        Twoja wizyta na <strong>triotravel.pl</strong> była jeszcze lepsza – od
        personalizacji po analizę ruchu. Masz pełną kontrolę nad ustawieniami!{" "}
        <a
          href="/polityka-cookies"
          className="underline hover:text-blue-400 transition-colors"
        >
          Dowiedz się więcej
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAcceptAll}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Akceptuj wszystko
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Dostosuj
        </button>
        <button
          onClick={handleRejectAll}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Odrzuć
        </button>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full mx-4 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Ustawienia cookies</h2>
            <p className="text-sm text-gray-700 mb-6">
              Możesz wybrać, które cookies chcesz zaakceptować. Niezbędne
              cookies są zawsze włączone, aby strona działała prawidłowo.
            </p>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.necessary}
                    disabled
                    className="h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">
                    Niezbędne cookies (zawsze aktywne)
                  </span>
                </label>
                <p className="text-sm text-gray-600 ml-7 mt-1">
                  Zapewniają działanie strony, np. zapamiętywanie języka.
                </p>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={toggleAnalytics}
                    className="h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Analityczne cookies</span>
                </label>
                <p className="text-sm text-gray-600 ml-7 mt-1">
                  Pomagają nam analizować ruch i poprawiać UX (np. Google
                  Analytics, Microsoft Clarity).
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={handleSavePreferences}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Zapisz ustawienia
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
