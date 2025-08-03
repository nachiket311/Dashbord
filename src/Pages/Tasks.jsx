import React from "react";
import Breadcrumb from "../Breadcrumb";
import Button from "../button/Button";
import LucyAvtar from "../assets/CassandraAvtar.jpg"
import MaleAvtar from "../assets/MaleAvtar.jpg";

const Tasks = () => {
  const backlogdata = [
    {
      topdiv: ["bg-green-600", "bg-orange-600"],
      heading: "Redesign The Home Page",
      urls: [
        LucyAvtar,
        MaleAvtar
      ],
      Comment: "2",
    },
    {
      topdiv: ["bg-green-600"],
      heading: "Upgrade dependencies to latest version",
      urls: [
        LucyAvtar
      ],
      Comment: "1",
    },
    {
      heading: "Google Adverd Best Practices",
      urls: [
        LucyAvtar,
        MaleAvtar
      ],
    },
    {
      topdiv: ["bg-green-600"],
      heading: "Improve site speed ",
      Comment: "3",
    },
    {
      topdiv: ["bg-blue-600"],
      heading: "Strip Payment Integration",
    },
  ];

  const inprogressdata = [
    {
      heading: "Google Adverd Best Practices",
      urls: [
        LucyAvtar,
        MaleAvtar
      ],
    },
    {
      topdiv: ["bg-blue-600"],
      heading: "Strip Payment Integration",
      urls: [
        LucyAvtar
      ],
    },
  ];

  const compeleteddata = [
    {
      topdiv: ["bg-green-600"],
      heading: "Improve site speed ",
      urls: [
        LucyAvtar,
        MaleAvtar
      ],
      Comment: "3",
    },
    {
      heading: "Google Adverd Best Practices",
      urls: [
        LucyAvtar
      ],
    },
    {
      topdiv: ["bg-green-600", "bg-orange-600"],
      heading: "Redesign The Home Page",
      Comment: "2",
    },
  ];

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Tasks</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full mt-6 flex xl:flex-row sm:flex-col justify-center items-start gap-5">
        <div className="h-max xl:w-[33%] sm:w-full rounded flex flex-col gap-3 p-4 bg-white">
          <div>
            <h2 className="font-semibold text-lg">Backlog</h2>
            <p>Nam pretium turpis et arcu. Duis arcu.</p>
          </div>
          {backlogdata.map((bg, i) => (
            <div
              key={i}
              className="h-max w-full p-4 flex flex-col gap-3 cursor-grab items-start border border-gray-300 rounded"
            >
              <div className="h-max flex gap-3">
                {bg.topdiv?.map((topd, ind) => (
                  <div key={ind} className={`h-2 w-10 rounded ${topd}`}></div>
                ))}
              </div>
              <h2 className="font-semibold text-lg">{bg.heading}</h2>
              <div className="h-max w-full flex justify-between items-end">
                <div className="flex -space-x-2">
                  {bg.urls?.map((url, index) => (
                    <img
                      key={index}
                      className={`h-10 w-10 rounded-full border-2 border-white ${
                        index === 0 ? "z-20" : "z-10"
                      }`}
                      src={url}
                      alt="Profile 1"
                    />
                  ))}
                  {i === 0 ? (
                    <div className="h-10 w-10 bg-gray-400 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                      +2
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className={`flex gap-2 ${
                    bg.Comment === undefined ? "invisible" : ""
                  }`}
                >
                  <p className="text-gray-500">{bg.Comment}</p>
                  <i className="fa-regular fa-comment text-xl text-gray-500"></i>
                </div>
              </div>
            </div>
          ))}
          <Button text={"+Add New Task"} />
        </div>

        <div className="h-max xl:w-[33%] sm:w-full rounded flex flex-col gap-3 p-4 bg-white">
          <div>
            <h2 className="font-semibold text-lg">In Progress</h2>
            <p>Curabitur ligula sapien, tincidunt non.</p>
          </div>
          {inprogressdata.map((ip, i) => (
            <div
              key={i}
              className="h-max w-full p-4 flex flex-col gap-3 cursor-grab items-start border border-gray-300 rounded"
            >
              <div className="h-max flex gap-3">
                {ip.topdiv?.map((topd, ind) => (
                  <div key={ind} className={`h-2 w-10 rounded ${topd}`}></div>
                ))}
              </div>
              <h2 className="font-semibold text-lg">{ip.heading}</h2>
              <div className="h-max w-full flex justify-between items-end">
                <div className="flex -space-x-2">
                  {ip.urls?.map((url, index) => (
                    <img
                      key={index}
                      className={`h-10 w-10 rounded-full border-2 border-white ${
                        index === 0 ? "z-20" : "z-10"
                      }`}
                      src={url}
                      alt="Profile 1"
                    />
                  ))}
                </div>

                <div
                  className={`flex gap-2 ${
                    ip.Comment === undefined ? "invisible" : ""
                  }`}
                >
                  <p className="text-gray-500">{ip.Comment}</p>
                  <i className="fa-regular fa-comment text-xl text-gray-500"></i>
                </div>
              </div>
            </div>
          ))}
          <Button text={"+Add New Task"} />
        </div>

        <div className="h-max xl:w-[33%] sm:w-full rounded flex flex-col gap-3 p-4 bg-white">
          <div>
            <h2 className="font-semibold text-lg">Completed</h2>
            <p>Aenean posuere, tortor sed cursus feugiat.</p>
          </div>
          {compeleteddata.map((cd, i) => (
            <div
              key={i}
              className="h-max w-full p-4 flex flex-col gap-3 cursor-grab items-start border border-gray-300 rounded"
            >
              <div className="h-max flex gap-3">
                {cd.topdiv?.map((topd, ind) => (
                  <div key={ind} className={`h-2 w-10 rounded ${topd}`}></div>
                ))}
              </div>
              <h2 className="font-semibold text-lg">{cd.heading}</h2>
              <div className="h-max w-full flex justify-between items-end">
                <div className="flex -space-x-2">
                  {cd.urls?.map((url, index) => (
                    <img
                      key={index}
                      className={`h-10 w-10 rounded-full border-2 border-white ${
                        index === 0 ? "z-20" : "z-10"
                      }`}
                      src={url}
                      alt="Profile 1"
                    />
                  ))}
                </div>

                <div
                  className={`flex gap-2 ${
                    cd.Comment === undefined ? "invisible" : ""
                  }`}
                >
                  <p className="text-gray-500">{cd.Comment}</p>
                  <i className="fa-regular fa-comment text-xl text-gray-500"></i>
                </div>
              </div>
            </div>
          ))}
          <Button text={"+Add New Task"} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
