export default function Why() {
  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      <h2 className="md:w-2/3 text-4xl mb-20 pt-20">
        Dlaczego wycieczkę najlepiej wybrać u{" "}
        <span className="font-bold"> Trio Travel? </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10 text-center pb-20">
        <div className="p-6 py-10 shadow-2xl rounded-3xl md:w-1/3">
          <h3 className="text-2xl mb-10 font-medium">
            Lokalna wiedza i specjalizacja
          </h3>
          <p>
            Trio Travel to biuro z Zakopanego, które zna Tatry i Pieniny jak
            mało kto. Specjalizują się w wycieczkach jednodniowych, spływach
            Dunajcem, kuligach czy raftingu, co gwarantuje dobrze zaplanowane
            trasy i atrakcje oparte na ich doświadczeniu w regionie.
          </p>
        </div>
        <div className="p-6 py-10 shadow-2xl rounded-3xl md:w-1/3 ">
          <h3 className="text-2xl mb-10 font-medium">Kompleksowa Oferta</h3>
          <p>
            Od wycieczek po lokalne atrakcje, jak kuligi czy spływy – Trio
            Travel oferuje szeroki wachlarz usług w jednym miejscu. To idealne
            rozwiązanie dla tych, którzy chcą w pełni wykorzystać czas w górach.
          </p>
        </div>
        <div className="p-6 py-10 shadow-2xl rounded-3xl md:w-1/3">
          <h3 className="text-2xl mb-10 font-medium">
            Elastyczność i personalizacja
          </h3>
          <p>
            Firma stawia na dostosowanie oferty do potrzeb klienta. Niezależnie
            od tego, czy szukasz spokojnej wycieczki, czy aktywnego wypoczynku,
            Trio Travel zapewnia elastyczność, by spełnić Twoje oczekiwania.
          </p>
        </div>
      </div>
    </section>
  );
}
