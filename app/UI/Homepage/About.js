import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 grid md:grid-cols-2 gap-16 2xl:gap-32 overflow-hidden">
      <div>
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
          Trio Travel - Twoje Biuro Podróży w Zakopanem na Niezapomniane
          Wycieczki.
        </h1>
        <p className="mt-10 text-2xl">
          Zakopane znamy jak własną kieszeń i nie ma dla nas rzeczy niemożliwych
        </p>
      </div>
      <div className="">
        <Image
          src={"/about/1.png"}
          width={100}
          height={100}
          layout="responsive"
          alt="1"
        />
      </div>

      <div className="">
        <Image
          src={"/about/2.png"}
          width={100}
          height={100}
          layout="responsive"
          alt="2"
        />
      </div>
      <div>
        <p className="text-xl md:text-2xl xl:text-3xl text-right">
          Trio Travel to biuro podróży posiadające duże{" "}
          <span className="font-semibold">doświadczenie </span> w organizacji
          wszelkich projektów turystycznych, imprez tematycznych oraz
          transportu.{" "}
        </p>
      </div>
    </section>
  );
}
