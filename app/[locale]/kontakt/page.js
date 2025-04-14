import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/LineHeader";
import Form from "./form";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <>
      <Header text={t("title")} />
      <section className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
        <LineHeader text={t("header")} />
        <p className="text-xl text-center md:w-3/4 mx-auto mt-10 md:mt-16">
          {t("text")}
        </p>
        <Form />
      </section>
    </>
  );
}
