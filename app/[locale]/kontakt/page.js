import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Form from "./form";

export default function Contact() {
  return (
    <>
      <Header text="Kontakt" />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text="Skontaktuj się z nami!" />
        <p className="text-xl text-center md:w-3/4 mx-auto mt-10 md:mt-16">
          Masz pytania? Chcesz zaplanować wymarzoną podróż? Napisz do Nas lub
          zadzwoń — z przyjemnością pomożemy!
        </p>
        <Form />
      </section>
    </>
  );
}
