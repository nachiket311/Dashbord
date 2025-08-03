import React from "react";

export default function Card({ Data, containerwidth, height, width }) {
  return Data.map((item, index) => (
    <div
      className={`${height} ${width} ${
        item.background === undefined ? "bg-white" : item.background
      } flex justify-evenly items-start flex-col rounded-md`}
      key={index}
    >
      <div className="h-max w-full flex justify-between items-center p-3">
        <p className={`text-lg ${item.textcolor}`}>{item.title}</p>
        <div className="h-max w-max px-1 text-sm text-white bg-blue-600 rounded">
          {item.timegap}
        </div>
      </div>
      <p className={`text-2xl px-4 ${item.textcolor}`}>{item.value}</p>
      <div className=" p-3 flex">
        <div
          className={`h-max w-max ${
            item.comparision < 0 ? "bg-red-200" : "bg-green-200"
          } rounded ${
            item.comparision < 0 ? "text-red-600" : "text-green-600"
          }  mr-2`}
        >
          {item.comparision}%
        </div>
        <p className={`text-sm ${item.textcolor}`}>{item.since}</p>
      </div>
    </div>
  ));
}
