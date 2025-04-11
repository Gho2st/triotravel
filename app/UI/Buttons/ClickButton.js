'use client'
export default function ClickButton({
  text,
  bgColor = "bg-customBlue", // Domyślny kolor tła
  textColor = "text-white", // Domyślny kolor tekstu
  onClick, // Funkcja do obsługi kliknięcia
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} text-lg cursor-pointer rounded-2xl font-medium whitespace-nowrap flex justify-center items-center gap-2 p-4 clip-custom hover:clip-reverse transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
    >
      {text}
    </button>
  );
}
