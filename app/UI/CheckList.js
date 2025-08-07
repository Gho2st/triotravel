import { FaCheck } from "react-icons/fa";

export default function CheckList({ title, items }) {
  return (
    <div className="mt-10">
      <span className="text-lg font-bold">{title}</span>
      <ul className="xl:text-lg flex flex-col gap-2 mt-10 text-left md:w-3/4 mx-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <FaCheck className="text-red-600 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
