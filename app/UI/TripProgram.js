import { FaCheck } from "react-icons/fa";

export default function TripProgram({ items, title }) {
  return (
    <div>
      <h3 className="text-2xl xl:text-3xl text-center text-customBlue font-bold mt-16 mb-10 ">
        {title}
      </h3>
      <ul className={`text-lg flex flex-col gap-2 md:w-3/4 mx-auto `}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheck className="text-red-600 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
