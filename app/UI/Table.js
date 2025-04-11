export default function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xl font-semibold"
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
                  className="px-6 py-4 text-left text-lg text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
