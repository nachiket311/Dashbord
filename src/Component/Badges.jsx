import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const Badges = () => {
  const [isOn, setIsOn] = useState(true);
  const [display, setDisplay] = useState("flex");

  const toggleSwitch = () => (setIsOn(!isOn), isOn ? setDisplay("hidden") : setDisplay("flex"));

  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Badges</p>
          <Breadcrumb />
        </div>
      </div>

      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*icon Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Icon Badges</h4>
            <p>
              Examples of badges on icons containing text, using primary and
              secondary colors.
            </p>
            <div className="h-max w-full flex justify-start items-center gap-3">
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-3xl flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                  10
                </div>
              </div>
            </div>
          </div>
          {/*colored icon Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Colored Icon Badges
            </h4>
            <p>
              Examples of badges on icons containing text, using the available
              theme palette colors.
            </p>
            <div className="h-max w-full flex justify-start items-center gap-3">
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-3xl flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-green-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-3xl flex justify-center items-center bg-orange-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-red-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className="h-[20px] w-[20px] rounded-3xl flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Button Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Button Badges</h4>
            <p>
              Examples of badges on buttons containing text, using primary and
              secondary colors.
            </p>
            <div className="h-max w-full flex justify-start items-center gap-3">
              <div className="h-12 w-20 relative">
                <button className="h-max w-max p-2 px-3 absolute bottom-0 left-0 bg-blue-600 hover:bg-blue-800 rounded text-white flex justify-center items-center">
                  Button
                </button>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-red-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
              <div className="h-12 w-20 relative">
                <button className="h-max w-max p-2 px-3 absolute bottom-0 left-0 bg-blue-600 hover:bg-blue-800 rounded text-white flex justify-center items-center">
                  Button
                </button>
                <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-red-600 text-white text-sm absolute top-0 right-0">
                  4
                </div>
              </div>
            </div>
          </div>
          {/*icon Visibility*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Badge visibility
            </h4>
            <p>
              The visibility of badges can be controlled using the invisible
              property.
            </p>
            <div className="h-max w-full flex justify-start items-center gap-3">
              <div className="h-[40px] w-[40px] flex justify-center items-center relative">
                <i
                  className={`fa-solid fa-envelope text-xl cursor-pointer`}
                ></i>
                <div className={`h-[20px] w-[20px] rounded-full ${display} justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0`}>
                  4
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSwitch}
                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                  isOn ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isOn ? "translate-x-6" : ""
                  }`}
                ></span>
                
              </button>
              <span>{isOn ? "Show Badge" : "Hide Badge"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
