import React from "react";
import { NavLink } from "react-router-dom";

export default function Navitem({ title, icon, value, pth }) {
  return (
    <NavLink
      to={pth}
      className={({ isActive }) =>
        [
          "h-max w-full pl-4 flex justify-between items-center transition-colors",
          isActive
            ? "bg-blue-900 text-white"
            : "bg-blue-950 hover:bg-blue-900 text-white",
        ].join(" ")
      }
    >
      <div className="h-max flex justify-center items-center">
        <i className={`${icon} text-gray-400 text-lg p-2`}></i>
        <p className="text-sm p-2">{title}</p>
      </div>
      <div
        className={`px-1.5 rounded bg-blue-400 mr-7 text-white ${
          value === undefined ? "hidden" : "flex"
        } justify-center items-center text-sm`}
      >
        {value}
      </div>
    </NavLink>
  );
}
