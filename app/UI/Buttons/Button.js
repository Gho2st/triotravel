import { Link } from "@/i18n/routing";

export default function Button({
  text,
  bgColor = "bg-customBlue",
  textColor = "text-white",
  link,
  onClick,
  type = "button", // domyślny typ przycisku
}) {
  const classes = `
  ${textColor} 
  2xl:text-lg 
  rounded-2xl 
  font-medium 
  // whitespace-nowrap 
  inline-flex                
  justify-center 
  items-center 
  gap-2 
  px-6 py-2                
  clip-custom 
  hover:clip-reverse 
  ${bgColor} 
  transition-all 
  duration-300 
  transform 
  hover:scale-105 
  hover:shadow-lg
`;

  // jeśli jest link, renderujemy Link
  if (link) {
    return (
      <Link href={link} onClick={onClick} className={classes}>
        {text}
      </Link>
    );
  }

  //  jeśli nie ma linka, ale jest akcja, renderujemy button
  return (
    <button onClick={onClick} type={type} className={classes}>
      {text}
    </button>
  );
}
