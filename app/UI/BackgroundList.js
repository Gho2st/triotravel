export default function BackgroundList({
  title,
  items,
  bgColor = "bg-slate-100",
  textColor = "text-black",
  className = "",
}) {
  return (
    <div
      className={`inline-block text-center  ${bgColor} rounded-2xl p-4 py-10 md:p-10 mx-auto ${className}`}
    >
      <h3 className={`text-3xl mb-10 md:mb-16 font-medium ${textColor}`}>
        {title}
      </h3>
      <ul className={`text-lg flex flex-col gap-2 ${textColor}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
