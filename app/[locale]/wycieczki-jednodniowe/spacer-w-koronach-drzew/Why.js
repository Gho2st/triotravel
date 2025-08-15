import { CheckCircle } from "lucide-react";

export default function WhySpacer({ t }) {
  return (
    <div className="flex py-16 flex-col justify-center items-center text-center">
      <h3 className="text-3xl font-semibold text-gray-900">
        {t("why.header")}
      </h3>
      <div className="mt-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[t("why.1"), t("why.2"), t("why.3"), t("why.4")].map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-lg text-gray-800">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
