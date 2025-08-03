import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Dropdown({
  title,
  icon,
  option0,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  option11,
  option12,
  option13
}) {

  const [arrow, setArrow] = useState("down");
  const [showedData, setShowedData] = useState("hidden");

  const handlearrow = () => {
    arrow === "down" ? setArrow("up") : setArrow("down");
    showedData === "hidden" ? setShowedData("flex") : setShowedData("hidden");
  };

  const options = [option0, option1, option2, option3, option4, option5 , option6 , option7 , option8 , option9 , option10 , option11 , option12 , option13];

  return (
    <div className="w-full">
      <div
        className="h-max w-full pl-4 flex justify-between text-sm items-center bg-blue-950 hover:bg-blue-900 "
        onClick={handlearrow}
      >
        <div className="h-max flex justify-center items-center">
          <i className={`${icon} text-gray-400 text-lg p-2`}></i>
          <p className="text-white text-sm p-2">{title}</p>
        </div>
        <i
          className={`fa-solid fa-chevron-${arrow} text-gray-500 text-sm p-2 pr-8`}
        ></i>
      </div>
      <div className={`h-max ${showedData} flex-col `}>
        {options.map((option, index) =>
          option === undefined ? (
            ""
          ) : (
            <NavLink 
            to={option.pth} 
            className={({ isActive }) =>
                  [
                    "text-sm h-10 flex items-center w-full pl-16 transition-colors",
                    isActive
                      ? "bg-blue-900 text-white"
                      : "text-gray-400 bg-blue-950 hover:bg-blue-900",
                  ].join(" ")
                }
            key={index}>
              {option.val}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}
