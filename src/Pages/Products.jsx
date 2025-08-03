import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb"; // Optional, keep/remove as needed
import ipadprosilver from "../assets/Apple-iPad-Pro-silver.jpg";
import ipadprospacegray from "../assets/Apple-iPad-Pro-Spacegray.jpg";
import iphone_blue from "../assets/Apple iPhone 15 Pro Max Blue Titanium.jpg";
import iphone_natural from "../assets/Apple iPhone 15 Pro Max Natural Titanium.jpg";
import iphone_white from "../assets/Apple iPhone 15 Pro Max White Titanium.jpg";
import macbook_silver from "../assets/Apple MacBook Pro 16 silver.jpg";
import macbook_black from "../assets/Apple MacBook Pro 16 Space Black.jpg";
import watch_midnight from "../assets/Apple Watch SE midnight.jpg";
import watch_silver from "../assets/Apple Watch SE silver.jpg";
import watch_starlight from "../assets/Apple Watch SE starlight.jpg";
import watch9_starlight from "../assets/Apple Watch Series 9 starlight.jpg";
import watch9_midnight from "../assets/Apple Watch Series 9 midnight.jpg";

const initialData = [
  {
    id: 1,
    image: ipadprosilver,
    name: "Apple iPad Pro",
    color: "Silver",
    price: 1399,
    stock: 48,
    category: "Tablets",
    rating: 4.6,
    reviews: 55,
  },
  {
    id: 2,
    image: ipadprospacegray,
    name: "Apple iPad Pro",
    color: "Space Gray",
    price: 1399,
    stock: 48,
    category: "Tablets",
    rating: 4.3,
    reviews: 25,
  },
  {
    id: 3,
    image: iphone_blue,
    name: "Apple iPhone 15 Pro Max",
    color: "Blue Titanium",
    price: 1499,
    stock: 38,
    category: "Smartphones",
    rating: 4.6,
    reviews: 40,
  },
  {
    id: 4,
    image: iphone_natural,
    name: "Apple iPhone 15 Pro Max",
    color: "Natural Titanium",
    price: 1499,
    stock: 30,
    category: "Smartphones",
    rating: 4.8,
    reviews: 50,
  },
  {
    id: 5,
    image: iphone_white,
    name: "Apple iPhone 15 Pro Max",
    color: "White Titanium",
    price: 1499,
    stock: 45,
    category: "Smartphones",
    rating: 4.9,
    reviews: 60,
  },
  {
    id: 6,
    image: macbook_silver,
    name: 'Apple MacBook Pro 16"',
    color: "Silver",
    price: 2399,
    stock: 55,
    category: "Notebooks",
    rating: 4.7,
    reviews: 45,
  },
  {
    id: 7,
    image: macbook_black,
    name: 'Apple MacBook Pro 16"',
    color: "Space Black",
    price: 2399,
    stock: 50,
    category: "Notebooks",
    rating: 4.4,
    reviews: 30,
  },
  {
    id: 8,
    image: watch_midnight,
    name: "Apple Watch SE",
    color: "Midnight",
    price: 299,
    stock: 49,
    category: "Smartwatches",
    rating: 4.7,
    reviews: 40,
  },
  {
    id: 9,
    image: watch_silver,
    name: "Apple Watch SE",
    color: "Silver",
    price: 299,
    stock: 30,
    category: "Smartwatches",
    rating: 4.7,
    reviews: 40,
  },
  {
    id: 10,
    image: watch_starlight,
    name: "Apple Watch SE",
    color: "Starlight",
    price: 299,
    stock: 54,
    category: "Smartwatches",
    rating: 4.5,
    reviews: 35,
  },
  {
    id: 11,
    image: watch9_midnight,
    name: "Apple Watch Series 9",
    color: "Midnight",
    price: 349,
    stock: 42,
    category: "Smartwatches",
    rating: 4.2,
    reviews: 20,
  },
  {
    id: 12,
    image: watch9_starlight,
    name: "Apple Watch Series 9",
    color: "Starlight",
    price: 349,
    stock: 54,
    category: "Smartwatches",
    rating: 4.5,
    reviews: 35,
  },
];

function Products() {
  const [selected, setSelected] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleAll = () => {
    const currentIds = paginatedData.map((item) => item.id);
    if (selected.length === currentIds.length) {
      setSelected([]);
    } else {
      setSelected(currentIds);
    }
  };

  const toggleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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

  const sortedData = [...initialData].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (typeof valA === "string") {
      return sortOrder === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
    return sortOrder === "asc" ? valA - valB : valB - valA;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Products</p>
          <Breadcrumb />
        </div>
      </div>
      {/* Table */}
      <div className="p-4 bg-white mt-6 w-full overflow-hidden overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="p-4">
                <input
                  type="checkbox"
                  checked={
                    selected.length === paginatedData.length &&
                    paginatedData.length > 0
                  }
                  onChange={toggleAll}
                />
              </th>
              <th
                className="p-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Item Name{" "}
                {sortKey === "name" && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
              </th>
              <th
                className="p-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort("price")}
              >
                Price {sortKey === "price" && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
              </th>
              <th
                className="p-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort("stock")}
              >
                Stock {sortKey === "stock" && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
              </th>
              <th
                className="p-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Category{" "}
                {sortKey === "category" && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
              </th>
              <th
                className="p-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort("rating")}
              >
                Rating{" "}
                {sortKey === "rating" && (sortOrder === "asc" ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />)}
              </th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-blue-50 transition duration-150"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggleOne(item.id)}
                  />
                </td>
                <td className="p-4 flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.color}</div>
                  </div>
                </td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">{item.stock}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-sm">
                    <i className="fa-solid fa-star text-orange-400" />
                    <span className="font-semibold">{item.rating}</span>
                    <span className="text-gray-500">
                      of {item.reviews} Reviews
                    </span>
                  </div>
                </td>
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
        <div className="mt-4 flex justify-end gap-3 items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="border rounded p-1"
            >
              {[6, 12, 18].map((size) => (
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
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
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

export default Products;
