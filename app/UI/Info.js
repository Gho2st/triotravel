import Image from "next/image";

export default function Info() {
  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      <h2 className="text-center uppercase text-3xl mb-20 font-bold">
        Regulamin Wyjazdów Trio Travel do pobrania
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-16">
        <div className="w-1/2 mx-auto md:mx-0 md:w-1/6">
          <Image
            src="/others/pfr.png"
            width={500}
            height={500}
            layout="responsive"
            alt="Logo Polskiego Funduszu Rozwoju"
          />
        </div>
        <p className="md:w-1/2 mt-10 md:mt-0 text-lg text-center md:text-left">
          {`Przedsiębiorca uzyskał subwencję finansową w ramach programu rządowego `}
          <span className="text-customRed ">
            {`„Tarcza Finansowa 2.0 Polskiego Funduszu Rozwoju dla Mikro, Małych i Średnich Firm”`}
          </span>
          {`, udzieloną przez PFR SA.`}
        </p>
      </div>
    </section>
  );
}
