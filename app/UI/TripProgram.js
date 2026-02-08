import { FaCheck } from "react-icons/fa";

export default function TripProgram({ items, title, info }) {
  return (
    <div className="px-4 md:px-0">
      <h3 className="text-xl md:text-2xl xl:text-3xl text-center text-customBlue font-bold mt-10 md:mt-16 mb-6 md:mb-10">
        {title}
      </h3>

      <ul className="flex flex-col gap-3 md:gap-4 w-full md:w-3/4 lg:w-2/3 mx-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 group">
            <div className="bg-red-50 p-1 rounded-md shrink-0 mt-0.5">
              <FaCheck className="text-red-600 text-[10px] md:text-xs" />
            </div>
            <span className="text-sm md:text-base lg:text-lg text-gray-700 leading-snug md:leading-normal">
              {item}
            </span>
          </li>
        ))}

        {info && (
          <li className="text-xs md:text-sm text-red-700 italic mt-2 pl-8 md:pl-10">
            {info}
          </li>
        )}
      </ul>
    </div>
  );
}
