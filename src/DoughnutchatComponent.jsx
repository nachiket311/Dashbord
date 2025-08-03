import React from "react";
import DougnetGraph from "./DougnetGraph";

export default function DoughnutchatComponent({
  piecharttable,
  Doughnutchartdata,
}) {
  return (
    <div className="h-max sm:w-full xl:w-[33%] p-5 pb-5 rounded bg-white">
      <div className="h-max w-full flex justify-between items-center pb-5">
        <p className="text-lg">Weekly Sales</p>
        <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
      </div>
      <div className="h-[160px] w-full flex justify-center items-center relative">
        <div className="absolute flex flex-col justify-center items-center">
          <h2 className="font-normal text-xl">
            {Doughnutchartdata.CenterHead}
          </h2>
          <p className="text-sm">{Doughnutchartdata.CenterBottom}</p>
        </div>
        <DougnetGraph Doughnutchartdata={Doughnutchartdata} />
      </div>
      <div className="h-10 w-full border-b border-gray-200 flex justify-between items-center px-3">
        <p className="font-semibold text-sm">Title</p>
        <div className="h-10 w-[120px] flex justify-between items-center">
          <div className="h-10 w-[60px] flex justify-end items-center font-semibold text-sm">
            Revenue
          </div>
          <div className="h-10 w-[60px] flex justify-end items-center font-semibold text-sm">
            Value
          </div>
        </div>
      </div>
      {piecharttable.map((tabledata, index) => (
        <div
          className="h-10 w-full border-b border-gray-200 flex justify-between items-center px-3"
          key={index}
        >
          <p className="text-sm">{tabledata.title}</p>
          <div className="h-10 w-[120px] flex justify-between items-center">
            <p className="text-sm h-10 w-[60px] flex justify-end items-center">
              {tabledata.revenue}
            </p>
            <p
              className={`text-sm ${
                tabledata.value > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {tabledata.value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
