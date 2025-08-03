import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { NavLink } from "react-router-dom";

const invoiceData = [
  {
    id: "#000112",
    name: "Anna Walley",
    email: "anna@walley.com",
    status: "Sent",
    amount: 530.0,
    date: "2023-01-02",
  },
  {
    id: "#000114",
    name: "Doris Fritz",
    email: "doris@fritz.com",
    status: "Void",
    amount: 209.0,
    date: "2023-02-13",
  },
  {
    id: "#000117",
    name: "Edward Adkins",
    email: "edward@adkins.com",
    status: "Paid",
    amount: 535.0,
    date: "2023-03-04",
  },
  {
    id: "#000115",
    name: "Edwin Baker",
    email: "edwin@baker.com",
    status: "Paid",
    amount: 678.0,
    date: "2023-02-17",
  },
  {
    id: "#000119",
    name: "Gordon Workman",
    email: "gordan@workman.com",
    status: "Sent",
    amount: 314.0,
    date: "2023-03-28",
  },
  {
    id: "#000113",
    name: "Jo Avery",
    email: "jo@avery.com",
    status: "Sent",
    amount: 864.0,
    date: "2023-01-23",
  },
  {
    id: "#000118",
    name: "Leigha Hyden",
    email: "leigha@hyden.com",
    status: "Paid",
    amount: 341.0,
    date: "2023-03-14",
  },
  {
    id: "#000116",
    name: "Maureen Gagnon",
    email: "maureen@gagnon.com",
    status: "Void",
    amount: 781.0,
    date: "2023-02-22",
  },
  {
    id: "#000121",
    name: "Maxine Thompson",
    email: "maxine@thompson.com",
    status: "Sent",
    amount: 273.0,
    date: "2023-05-31",
  },
  {
    id: "#000120",
    name: "Shawn Waddell",
    email: "shawn@waddell.com",
    status: "Sent",
    amount: 713.0,
    date: "2023-04-25",
  },
];

export default function Invoice() {
  const [data] = useState(invoiceData);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (!sortKey) return 0;
    if (typeof aVal === "string") {
      return sortOrder === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    } else {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }
  });

  const startIndex = (page - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const toggleSelectAll = () => {
    const allIds = paginatedData.map((d) => d.id);
    if (selectedIds.length === allIds.length) setSelectedIds([]);
    else setSelectedIds(allIds);
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Invoice</p>
          <Breadcrumb />
        </div>
      </div>

      <div className="p-6 mt-6 bg-white rounded-lg shadow w-full overflow-hidden overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Invoices</h2>
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left">
              <th className="p-3 w-[5%]">
                <input
                  type="checkbox"
                  checked={
                    selectedIds.length === paginatedData.length &&
                    paginatedData.length > 0
                  }
                  onChange={toggleSelectAll}
                />
              </th>
              <th
                className="p-3 w-[25%] cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Customer{" "}
                {sortKey === "name" &&
                  (sortOrder === "asc" ? (
                    <i className="fa-solid fa-angle-up" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  ))}
              </th>
              <th
                className="p-3 w-[10%] cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status{" "}
                {sortKey === "status" &&
                  (sortOrder === "asc" ? (
                    <i className="fa-solid fa-angle-up" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  ))}
              </th>
              <th
                className="p-3 w-[15%] cursor-pointer"
                onClick={() => handleSort("id")}
              >
                ID{" "}
                {sortKey === "id" &&
                  (sortOrder === "asc" ? (
                    <i className="fa-solid fa-angle-up" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  ))}
              </th>
              <th
                className="p-3 w-[15%] cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                Amount{" "}
                {sortKey === "amount" &&
                  (sortOrder === "asc" ? (
                    <i className="fa-solid fa-angle-up" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  ))}
              </th>
              <th
                className="p-3 w-[15%] cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Issue Date{" "}
                {sortKey === "date" &&
                  (sortOrder === "asc" ? (
                    <i className="fa-solid fa-angle-up" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  ))}
              </th>
              <th className="p-3 w-[15%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => toggleSelectOne(item.id)}
                  />
                </td>
                <td className="p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.email}</div>
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Sent"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3">{item.id}</td>
                <td className="p-3">${item.amount.toLocaleString()}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3 flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </button>
                  <NavLink
                    to={`/Pages/Invoice/Details/${item.id.replace("#", "")}`}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-end gap-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="border rounded px-2 py-1"
            >
              {[5, 10, 15].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-2 py-1  rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-angle-left" />
            </button>
            <button
              onClick={() =>
                setPage((p) =>
                  Math.min(Math.ceil(data.length / pageSize), p + 1)
                )
              }
              disabled={startIndex + pageSize >= data.length}
              className="px-2 py-1  rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
