import Button from "@/app/UI/Buttons/Button";
import Header from "@/app/UI/Header";
import Link from "next/link";

export default function Rezerwacje() {
  return (
    <>
      <div className="">
        <section className="">
          <Header text="Kup Online" />
          <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 text-center text-xl w-3/4 mx-auto">
            <p className="mb-10">
              Rezerwację online można dokonać najpóźniej <span>24h</span> przed
              planowaną datą wycieczki. Najpóźniej <span>dzień</span> przed
              planowaną datą wycieczki możliwość rezerwacji telefonicznie
            </p>
            <span className="">telefon: +48 881 201 205</span>
            <div className="mt-16">
              <Button link="/mapa-przystankow" text="Mapa Przystanków" />
            </div>
          </div>
          <div className="w-3/4 h-196 bg-neutral-200 mx-auto">
            TU BEDZIE DROPLABS
          </div>
        </section>
      </div>
    </>
  );
}
