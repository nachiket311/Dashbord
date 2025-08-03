import React, { useState } from "react";

const tableData = [
  { name: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Marshmallow", calories: 318, fat: 0, carbs: 81, protein: 2 },
  { name: "Gingerbread", calories: 356, fat: 16, carbs: 49, protein: 3.9 },
  { name: "Nougat", calories: 360, fat: 19, carbs: 9, protein: 37 },
  { name: "Jelly Bean", calories: 375, fat: 0, carbs: 94, protein: 0 },
  { name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0 },
  { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  { name: "Oreo", calories: 437, fat: 18, carbs: 63, protein: 4 },
  { name: "Donut", calories: 452, fat: 25, carbs: 51, protein: 4.9 },
  { name: "KitKat", calories: 518, fat: 26, carbs: 65, protein: 7 },
];

export default function ATable() {
  const [selected, setSelected] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [useMaxHeight, setUseMaxHeight] = useState(false);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    return sortOrder === "asc" ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
  });

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = sortedData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const toggleAll = () => {
    if (selected.length === currentData.length) {
      setSelected([]);
    } else {
      setSelected(currentData.map((item) => item.name));
    }
  };

  const toggleOne = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="p-6 bg-white w-full mx-auto">
      {selected.length > 0 && (
        <div className="mb-2 text-sm text-blue-700 font-medium">
          {selected.length} row{selected.length > 1 ? "s" : ""} selected
        </div>
      )}
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr className={`${useMaxHeight ? "h-1" : "h-12"} `}>
            <th className="pr-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={
                  selected.length > 0 && selected.length === currentData.length
                }
                onChange={toggleAll}
              />
            </th>
            {["name", "calories", "fat", "carbs", "protein"].map((key) => (
              <th
                key={key}
                className={`text-left ${
                  useMaxHeight ? "py-1" : "h-12 py-4"
                } cursor-pointer select-none`}
                onClick={() => handleSort(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {sortKey === key && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr
              key={item.name}
              className={`border-b border-gray-200 hover:bg-gray-50 ${
                useMaxHeight ? "h-1" : "h-12"
              }`}
            >
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={selected.includes(item.name)}
                  onChange={() => toggleOne(item.name)}
                />
              </td>
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                {item.name}
              </td>
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                {item.calories}
              </td>
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                {item.fat}
              </td>
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                {item.carbs}
              </td>
              <td className={`${useMaxHeight ? "py-1" : "h-12 py-4"}`}>
                {item.protein}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end gap-2 items-center mt-4">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border rounded px-2 py-1"
          >
            {[5, 10, 25].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <span>
            {indexOfFirst + 1}-{Math.min(indexOfLast, sortedData.length)} of{" "}
            {sortedData.length}
          </span>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-2 py-1 text-gray-600 disabled:opacity-30"
          >
            <i className="fa-solid fa-angle-left" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-2 py-1 text-gray-600 disabled:opacity-30"
          >
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>

      <div className="flex items-center mt-4 space-x-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            id="heightToggle"
            type="checkbox"
            checked={useMaxHeight}
            onChange={() => setUseMaxHeight((prev) => !prev)}
            className="sr-only peer"
          />
          {/* Thin background track */}
          <div className="w-12 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-400 transition-colors duration-300"></div>

          {/* Enlarged round knob */}
          <div className="absolute top-1/2 left-0.4 -translate-y-1/2 w-6 h-6 peer-checked:bg-blue-600 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-[1.5rem]"></div>
        </label>
        <span className="w-max">Dence Padding</span>
      </div>
    </div>
  );
}
