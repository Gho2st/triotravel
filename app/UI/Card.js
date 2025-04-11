import Image from "next/image";
import Button from "@/app/UI/Buttons/Button";

export default function Card({ article, index }) {
  return (
    <article className="flex flex-col sm:flex-row gap-8 p-8 rounded-2xl shadow-2xl w-full max-w-4xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
      <div className="w-full sm:w-2/3 aspect-[4/3]">
        <Image
          src={article.image}
          width={500}
          height={375} // Matches 4:3 aspect ratio (500 * 3 / 4)
          alt={article.title}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between sm:w-2/3 p-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          {article.title}
        </h3>
        <div className="flex justify-center">
          <Button
            text="Wybierz"
            link={article.link}
            bgColor="bg-customBlue"
            textColor="text-white"
          />
        </div>
      </div>
    </article>
  );
}
