export default function BackgroundList({
  title,
  items,
  text,
  bgColor = "bg-slate-100",
  textColor = "text-black",
  className = "",
}) {
  return (
    <div
      className={`inline-block text-center  ${bgColor} rounded-2xl p-4 py-10 md:p-10 mx-auto ${className}`}
    >
      <h3
        className={`text-2xl mb-8 md:mb-12 font-medium leading-snug ${textColor}`}
      >
        {title}
      </h3>
      {text && (
        <p className="mb-8 md:mb-10 text-xl font-medium text-customBlue">
          {text}
        </p>
      )}
      <ul className={`text-lg flex flex-col gap-8 ${textColor}`}>
        {items.map((item, index) => (
          <li className="" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
