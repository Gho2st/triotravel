import Image from "next/image";
import Button from "@/app/UI/Buttons/Button";
import { useTranslations } from "next-intl";

export default function Card({ article }) {
  const t = useTranslations("offer");

  return (
    <article className="flex flex-col gap-6 p-6 rounded-2xl shadow-2xl w-full max-w-4xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] h-full min-h-[450px]">
      <div className="w-full 2xl:w-2/3 aspect-[4/3]">
        <Image
          src={article.image}
          width={500}
          height={375}
          alt={article.title}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between 2xl:justify-center 2xl:gap-10 2xl:w-2/3 p-2 text-center h-full space-y-6">
        <h3 className="text-2xl 2xl:text-3xl font-semibold text-gray-800">
          {article.title}
        </h3>
        <p className="font-light">{article.p}</p>
        <div className="flex justify-center mt-auto">
          <Button
            text={t("button")}
            link={article.link}
            bgColor="bg-customBlue"
            textColor="text-white"
          />
        </div>
      </div>
    </article>
  );
}
