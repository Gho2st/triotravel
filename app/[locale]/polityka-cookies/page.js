import Header from "@/app/UI/Header";

export default function PolitykaCookies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header text="Polityka Cookies" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Na stronie <strong>triotravel.pl</strong> stosujemy pliki cookies,
            aby zapewnić najlepsze doświadczenie użytkownika, wspierać
            funkcjonalność strony oraz analizować ruch. Poniżej wyjaśniamy,
            jakie cookies stosujemy, w jakim celu i jak możesz nimi zarządzać.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jakie cookies stosujemy?
          </h2>
          <ul className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Niezbędne cookies</strong>: Umożliwiają działanie strony,
              np. zapamiętują Twoje ustawienia językowe (poprzez Next-Intl) lub
              umożliwiają korzystanie z funkcji rezerwacji online. Te cookies są
              niezbędne i nie wymagają Twojej zgody.
            </li>
            <li>
              <strong>Analityczne cookies</strong>:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Google Analytics 4 (via Google Tag Manager)</strong>:
                  Używamy do analizy ruchu na stronie, np. liczby odwiedzin,
                  czasu spędzonego na stronie czy źródeł odwiedzin. Dane są
                  przekazywane do Google (USA) w celu optymalizacji strony.
                </li>
                <li>
                  <strong>Microsoft Clarity</strong>: Używamy do tworzenia map
                  ciepła i anonimowych nagrań sesji, co pomaga nam zrozumieć,
                  jak użytkownicy korzystają ze strony, i poprawić jej
                  użyteczność. Dane są anonimizowane i przekazywane do Microsoft
                  (USA).
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Dodatkowe narzędzia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Korzystamy również z <strong>Google Search Console</strong>, które
            nie używa cookies, ale pomaga nam monitorować wydajność strony w
            wynikach wyszukiwania Google, np. analizować słowa kluczowe i
            poprawiać SEO.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jak zarządzać cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Przy pierwszej wizycie na naszej stronie wyświetlamy baner cookies,
            który pozwala Ci:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Zaakceptować wszystkie cookies.</li>
            <li>Odrzucić cookies analityczne.</li>
            <li>
              Dostosować ustawienia, wybierając, na które kategorie cookies
              wyrażasz zgodę.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Możesz także zarządzać cookies w ustawieniach swojej przeglądarki.
            Oto instrukcje dla popularnych przeglądarek:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jak długo przechowujemy cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Czas przechowywania cookies zależy od ich rodzaju:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Niezbędne cookies</strong>: Zazwyczaj wygasają po
              zakończeniu sesji lub w krótkim czasie (np. kilka dni).
            </li>
            <li>
              <strong>Analityczne cookies</strong>: Mogą być przechowywane do 2
              lat (np. Google Analytics 4).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jeśli masz pytania dotyczące naszej polityki cookies lub
            przetwarzania danych, skontaktuj się z nami:{" "}
            <a
              href="mailto:biuro@triotravel.eu"
              className="text-blue-600 hover:underline"
            >
              biuro@triotravel.eu
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
