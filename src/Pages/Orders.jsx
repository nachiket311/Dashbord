import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
const ordersData = [
  {
    id: "#000253",
    product: "Salt & Pepper Grinder",
    date: "2023-01-02",
    total: 32.0,
    status: "Shipped",
    method: "Visa",
  },
  {
    id: "#000254",
    product: "Backpack",
    date: "2023-01-04",
    total: 130.0,
    status: "Shipped",
    method: "PayPal",
  },
  {
    id: "#000255",
    product: "Pocket Speaker",
    date: "2023-01-04",
    total: 80.0,
    status: "Cancelled",
    method: "Mastercard",
  },
  {
    id: "#000256",
    product: "Glass Teapot",
    date: "2023-01-08",
    total: 45.0,
    status: "Shipped",
    method: "Visa",
  },
  {
    id: "#000257",
    product: "Unbreakable Water Bottle",
    date: "2023-01-09",
    total: 40.0,
    status: "Shipped",
    method: "PayPal",
  },
  {
    id: "#000258",
    product: "Spoon Saver",
    date: "2023-01-14",
    total: 15.0,
    status: "Shipped",
    method: "Mastercard",
  },
  {
    id: "#000259",
    product: "Hip Flash",
    date: "2023-01-16",
    total: 25.0,
    status: "Processing",
    method: "Visa",
  },
  {
    id: "#000260",
    product: "Woven Slippers",
    date: "2023-01-22",
    total: 20.0,
    status: "Shipped",
    method: "PayPal",
  },
  {
    id: "#000261",
    product: "Womens Watch",
    date: "2023-01-22",
    total: 65.0,
    status: "Cancelled",
    method: "Visa",
  },
  {
    id: "#000262",
    product: "Over-Ear Headphones",
    date: "2023-01-23",
    total: 210.0,
    status: "Shipped",
    method: "Mastercard",
  },
];

const statusColor = {
  Shipped: "bg-green-500",
  Cancelled: "bg-red-500",
  Processing: "bg-orange-500",
};

export default function Orders() {
  const [selected, setSelected] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const toggleAll = () => {
    if (selected.length === currentOrders.length) {
      setSelected([]);
    } else {
      setSelected(currentOrders.map((o) => o.id));
    }
  };

  const toggleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...ordersData].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    return sortOrder === "asc" ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
  });

  // Pagination Logic
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentOrders = sortedData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Orders</p>
          <Breadcrumb />
        </div>
      </div>

      {/* Table */}
      <div className="p-4 bg-white mt-6 w-full overflow-hidden overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr className="min-h-[56px]">
              <th className="p-4 align-middle">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      selected.length > 0 &&
                      selected.length === currentOrders.length
                    }
                    onChange={toggleAll}
                  />
                </div>
              </th>
              {["id", "product", "date", "total", "status", "method"].map(
                (key) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="cursor-pointer p-4 text-left capitalize font-semibold"
                  >
                    {key === "id"
                      ? "Order ID"
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                    {sortKey === key && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
                  </th>
                )
              )}
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-blue-50 border-b border-gray-200 min-h-[56px] transition-colors duration-150"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(order.id)}
                    onChange={() => toggleOne(order.id)}
                  />
                </td>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.product}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">${order.total.toFixed(2)}</td>
                <td className="p-4">
                  <span
                    className={`text-white px-2 py-1 rounded text-sm ${
                      statusColor[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">{order.method}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition">
                      <i className="fa-solid fa-envelope-open-text"></i>
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
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
              {indexOfFirst + 1}–{Math.min(indexOfLast, sortedData.length)} of{" "}
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
      </div>
    </div>
  );
}
