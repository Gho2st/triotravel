import Header2 from "./Header2";

export default function Table({ headers, rows, text }) {
  return (
    <div className="overflow-x-auto md:w-3/4 mx-auto">
      <Header2 />
      <table className="w-full table-auto border-collapse  bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-center text-xl font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-center text-lg text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {text && <p className="mt-8 text-center text-sm">{text}</p>}
    </div>
  );
}
