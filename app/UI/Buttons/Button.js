import { Link } from "@/i18n/routing";

export default function Button({
  text,
  bgColor = "bg-customBlue", // Kolor tła
  textColor = "text-white", // Kolor tekstu
  link,
  onClick,
}) {
  return (
    <div>
      <button>
        <Link
          onClick={onClick}
          className={` ${textColor} text-lg rounded-2xl font-medium whitespace-nowrap flex justify-center items-center gap-2 p-4 clip-custom hover:clip-reverse ${bgColor} 
          transition-all duration-300 transform hover:scale-105 hover:shadow-lg`} // Animacja i efekty na hover
          href={link}
        >
          {text}
        </Link>
      </button>
    </div>
  );
}
