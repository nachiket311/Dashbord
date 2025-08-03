import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenfade, setIsOpenfade] = useState(false);
  const [isOpenicon, setIsOpenicon] = useState(false);
  const [isOpenselected, setIsOpenSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("Show Some Love to Me!");

  const msg = [
    {
      id: 0,
      msg: "Show All Notification Content",
    },
    {
      id: 1,
      msg: "Hide Sensitive Notification Content",
    },
    {
      id: 2,
      msg: "Hide All Notification Content",
    },
  ];

  const handleSelect = (option) => {
    setSelectedId(option.id);
    setMessage(option.msg);
    setIsOpenSelected(false);
  };

  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Menus</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Simple Menu*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Simple Menu</h4>
            <p>Simple menu open over the anchor element by default</p>
            <div className="h-max w-max relative">
              <>
                <button
                  className="h-10 w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Open Menu
                </button>
              </>
              <div
                className={`absolute top-10 ${
                  isOpen ? "block" : "hidden"
                } h-max w-max rounded bg-white border border-gray-400`}
              >
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  Profile
                </div>
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  My Account
                </div>
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  Log Out
                </div>
              </div>
            </div>
          </div>
          {/*Transition Menu*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Transition Menu
            </h4>
            <p>Simple menu with different transition (fade)</p>
            <div className="h-max w-max relative">
              <>
                <button
                  className="h-10 w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800"
                  onClick={() => setIsOpenfade(!isOpenfade)}
                >
                  Open Menu
                </button>
              </>
              <div
                className={`absolute top-10 transition-all duration-300 ease-out transform ${
                  isOpenfade
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                } h-max w-max rounded bg-white shadow-lg border border-gray-400`}
              >
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  Profile
                </div>
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  My Account
                </div>
                <div className="h-max w-full flex justify-center items-center p-2 px-3 rounded font-semibold hover:bg-blue-50">
                  Log Out
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Icon Menu*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Icon Menu</h4>
            <p>Simple menu with icons</p>
            <div className="h-max w-max relative">
              <>
                <button
                  className="h-10 w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800"
                  onClick={() => setIsOpenicon(!isOpenicon)}
                >
                  Open Menu
                </button>
              </>
              <div
                className={`absolute top-10 ${
                  isOpenicon ? "block" : "hidden"
                } h-max w-max rounded bg-white border border-gray-400`}
              >
                <div className="h-max w-full flex justify-between items-center gap-10 p-3 px-3 rounded font-semibold hover:bg-blue-50">
                  <i className="fa-solid fa-paper-plane"></i>
                  <div className="w-[60%]">
                    <p className="text-start">Sent Email</p>
                  </div>
                </div>
                <div className="h-max w-full flex justify-between items-center gap-10 p-3 px-3 rounded font-semibold hover:bg-blue-50">
                  <i className="fa-solid fa-envelope-open"></i>
                  <div className="w-[60%]">
                    <p className="text-start">Draft</p>
                  </div>
                </div>
                <div className="h-max w-full flex justify-between items-center gap-10 p-3 px-3 rounded font-semibold hover:bg-blue-50">
                  <i className="fa-solid fa-inbox"></i>
                  <div className="w-[60%]">
                    <p className="text-start">Inbox</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Selected Menu*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Selected Menu</h4>
            <p>
              Selected menus attempt to vertically align the currently selected
              menu item with the anchor element.
            </p>

            <div className="h-max w-full relative">
              <div
                className="h-max w-full p-3 cursor-pointer hover:bg-blue-50"
                onClick={() => setIsOpenSelected(!isOpenselected)}
              >
                <p>When Device is Locked</p>
                <p className="text-gray-400 text-sm">{message}</p>
              </div>

              <div
                className={`absolute top-13 z-50 ${
                  isOpenselected ? "block" : "hidden"
                } h-max w-full rounded bg-white border border-gray-400`}
              >
                <div className="h-max w-full flex justify-start items-center p-2 px-3 bg-gray-200 text-sm font-medium">
                  Show Some Love to Me!
                </div>

                {msg.map((ms) => (
                  <div
                    key={ms.id}
                    className={`h-max w-full flex justify-start items-center p-2 px-3 rounded font-semibold text-sm cursor-pointer ${
                      selectedId === ms.id
                        ? "bg-blue-50 text-blue-700"
                        : "bg-white"
                    } hover:bg-blue-100`}
                    onClick={() => handleSelect(ms)}
                  >
                    {ms.msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
