import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const Alerts = () => {
  const Simple = [
    {
      type: "Error",
      icon: <i className="fa-solid fa-circle-exclamation"></i>,
    },
    {
      type: "Warning",
      icon: <i className="fa-solid fa-triangle-exclamation"></i>,
    },
    {
      type: "Info",
      icon: <i className="fa-solid fa-circle-info"></i>,
    },
    {
      type: "Success",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
  ];

  const [display, setDisplay] = useState("flex");

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Alerts</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Simple Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Simple Alerts</h4>
            <p>
              The alert offers four severity levels that set a distinctive icon
              and color.
            </p>
            {Simple.map((SimAlert, i) => (
              <div
                className={`h-12 w-full ${
                  SimAlert.type === "Error"
                    ? "bg-red-100 text-red-700"
                    : SimAlert.type === "Warning"
                    ? "bg-yellow-100 text-yellow-700"
                    : SimAlert.type === "Info"
                    ? "bg-blue-100 text-blue-700"
                    : SimAlert.type === "Success"
                    ? "bg-green-100  text-green-700"
                    : ""
                } rounded flex justify-start items-center p-4 gap-5`}
                key={i}
              >
                {
                  <>
                    <p>{SimAlert.icon}</p>
                    <p>This is an {SimAlert.type} alert — check it out!</p>
                  </>
                }
              </div>
            ))}
          </div>
          {/*Outline Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Outline Alerts</h4>
            <p>Two additional variants are available - outlined, and filled:</p>
            {Simple.map((SimAlert, i) => (
              <div
                className={`h-12 w-full ${
                  SimAlert.type === "Error"
                    ? "border border-red-600 text-red-700"
                    : SimAlert.type === "Warning"
                    ? "border border-yellow-600 text-yellow-700"
                    : SimAlert.type === "Info"
                    ? "border border-blue-600 text-blue-700"
                    : SimAlert.type === "Success"
                    ? "border border-green-600  text-green-700"
                    : ""
                } rounded flex justify-start items-center p-4 gap-5`}
                key={i}
              >
                {
                  <>
                    <p>{SimAlert.icon}</p>
                    <p>This is an {SimAlert.type} alert — check it out!</p>
                  </>
                }
              </div>
            ))}
          </div>
          {/*Filled Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Filled Alerts</h4>
            <p>Two additional variants are available - outlined, and filled:</p>
            {Simple.map((SimAlert, i) => (
              <div
                className={`h-12 w-full ${
                  SimAlert.type === "Error"
                    ? "bg-red-600"
                    : SimAlert.type === "Warning"
                    ? "bg-yellow-600"
                    : SimAlert.type === "Info"
                    ? "bg-blue-600"
                    : SimAlert.type === "Success"
                    ? "bg-green-600"
                    : ""
                } rounded text-white flex justify-start items-center p-4 gap-5`}
                key={i}
              >
                {
                  <>
                    <p>{SimAlert.icon}</p>
                    <p>This is an {SimAlert.type} alert — check it out!</p>
                  </>
                }
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm:w-full">
          {/*Advanced Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Advanced Alerts
            </h4>
            <p>
              You can use the AlertTitle component to display a formatted title
              above the content.
            </p>
            {Simple.map((SimAlert, i) => (
              <div
                className={`h-max w-full ${
                  SimAlert.type === "Error"
                    ? "bg-red-100 text-red-700"
                    : SimAlert.type === "Warning"
                    ? "bg-yellow-100 text-yellow-700"
                    : SimAlert.type === "Info"
                    ? "bg-blue-100 text-blue-700"
                    : SimAlert.type === "Success"
                    ? "bg-green-100  text-green-700"
                    : ""
                } rounded flex justify-start items-start p-4 gap-3`}
                key={i}
              >
                {
                  <>
                    <p>{SimAlert.icon}</p>
                    <div className="flex flex-col gap-1">
                      <p>{SimAlert.type}</p>
                      <p>This is an {SimAlert.type} alert — check it out!</p>
                    </div>
                  </>
                }
              </div>
            ))}
          </div>
          {/*Action Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Action Alerts</h4>
            <p>
              An alert can have an action, such as a close or undo button. It is
              rendered after the message, at the end of the alert.
            </p>
            <div className="h-12 w-full flex justify-between items-center p-4 bg-green-100 text-green-700 rounded">
              <div className="h-max w-full flex gap-3 items-center">
                <i className="fa-solid fa-circle-check"></i>
                <p>This is an Success alert — check it out!</p>
              </div>
              <button className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-100">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="h-12 w-full flex justify-between items-center p-4 bg-green-100 text-green-700 rounded">
              <div className="h-max w-full flex gap-3 items-center">
                <i className="fa-solid fa-circle-check"></i>
                <p>This is an Success alert — check it out!</p>
              </div>
              <button className="p-2 flex justify-center items-center rounded hover:bg-gray-100">
                Undo
              </button>
            </div>
          </div>
          {/*Transition Alerts*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Transition</h4>
            <p>
              You can use a transition component such as Collapse to transition
              the appearance of the alert.
            </p>
            <div
              className={`h-12 ${display} w-full justify-between items-center p-4 bg-green-100 text-green-700 rounded`}
            >
              <div className="h-max w-full flex gap-3 items-center">
                <i className="fa-solid fa-circle-check"></i>
                <p>Close me!</p>
              </div>
              <button
                className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-100"
                onClick={() => setDisplay("hidden")}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <button
              onClick={() => setDisplay("flex")}
              disabled={display === "flex"}
              className="h-max w-max p-2 flex justify-center items-center text-blue-600 border border-blue-600 rounded hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Re-Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
