import React, { useState } from "react";
import Card from "./Card";
import BarChart from "./Charts/BarChartAnalytic.jsx";
import {
  DoughnutchartdataAnalyticDashbord,
  BarChartDataAnalyticDashbord,
} from "./Graphdata";
import DoughnutchatComponent from "./DoughnutchatComponent";
import Worldmap from "./Worldmap.jsx";

export default function AnalyticDashbord() {
  const DataTime = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "This month",
    "Last month",
  ];

  const piecharttable = [
    {
      title: "Social",
      revenue: "260",
      value: +35,
    },
    {
      title: "Search Engines",
      revenue: "125",
      value: -12,
    },
    {
      title: "Direct",
      revenue: "164",
      value: +46,
    },
  ];

  const CardData = [
    {
      title: "Visitors",
      timegap: "",
      value: "24.532",
      comparision: "+14",
      textcolor: "text-blue-600",
      background: "bg-blue-200",
      since: "Since last week",
    },
    {
      title: "Activity",
      timegap: "Annual",
      value: "63.200",
      comparision: "-12",
      since: "Since last week",
    },
    {
      title: "Real-Time",
      timegap: "Monthly",
      value: "1.320",
      comparision: "-18",
      since: "Since last week",
    },
    {
      title: "Bounce",
      timegap: "Annual",
      value: "12.364",
      comparision: "+27",
      since: "Since last week",
    },
  ];

  const trafficdata = [
    {
      Sourse: "Google",
      Users: "1023",
      Sessions: "1265",
      Bouncerate: "30",
      SessionDuration: "00:06:25",
    },
    {
      Sourse: "Direct",
      Users: "872",
      Sessions: "1077",
      Bouncerate: "63",
      SessionDuration: "00:09:18",
    },
    {
      Sourse: "Twitter",
      Users: "812",
      Sessions: "1003",
      Bouncerate: "28",
      SessionDuration: "00:05:56",
    },
    {
      Sourse: "GitHub",
      Users: "713",
      Sessions: "881",
      Bouncerate: "22",
      SessionDuration: "00:06:19",
    },
    {
      Sourse: "DuckDuckGo",
      Users: "693",
      Sessions: "856",
      Bouncerate: "56",
      SessionDuration: "00:09:12",
    },
    {
      Sourse: "Facebook",
      Users: "623",
      Sessions: "770",
      Bouncerate: "20",
      SessionDuration: "00:04:42",
    },
  ];

  const languagesdata = [
    {
      language: "en-us",
      user: 865,
      persentageuser: "w-[86.5px]",
    },
    {
      language: "en-gb",
      user: 240,
      persentageuser: "w-[24px]",
    },
    {
      language: "fr-fr",
      user: 220,
      persentageuser: "w-[22px]",
    },
    {
      language: "es-es",
      user: 162,
      persentageuser: "w-[16.2px]",
    },
    {
      language: "de-de",
      user: 86,
      persentageuser: "w-[8.6px]",
    },
    {
      language: "ru-ru",
      user: 32,
      persentageuser: "w-[3.2px]",
    },
  ];

  const [timeDatashowen, setTimeDatashowen] = useState("hidden");

  const handleTime = () => {
    timeDatashowen === "hidden"
      ? setTimeDatashowen("flex")
      : setTimeDatashowen("hidden");
  };

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Analytic Dashbord</p>
          <p className="pt-3">Welcome back, Lucy! We've missed you.</p>
        </div>
        <div className="h-full w-max flex justify-center items-center">
          <i className="fa-solid fa-arrows-rotate text-xl pr-3 text-blue-600"></i>
          <i className="fa-solid fa-list-ul text-xl pr-3 text-blue-600"></i>
          <div>
            <div
              className="h-5 w-max p-4 cursor-pointer rounded text-sm flex justify-center items-center bg-blue-600 text-white hover:bg-blue-900"
              onClick={handleTime}
            >
              Today: April 29
            </div>
            <div
              className={`h-max w-max ${timeDatashowen} flex-col justify-center items-center rounded cursor-pointer bg-white absolute`}
            >
              {DataTime.map((time, index) => (
                <div
                  className="h-5 w-full p-4 flex justify-center items-center border-b border-gray-300 hover:bg-gray-200"
                  key={index}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between items-center flex-wrap gap-3">
        <div
          className={`h-full xl:w-[30vw] lg:w-full flex justify-between items-center gap-3 mt-6 flex-wrap`}
        >
          <Card
            Data={CardData}
            height={"xl:h-[20vh]"}
            width={"xl:w-[47%] lg:w-[49%] sm:w-full "}
          />
        </div>
        <div className="xl:h-[40vh] lg:h-[50vh] xl:w-[58%] sm:w-full p-5 pb-5 rounded bg-white mt-6">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Mobile/Desktop</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="min-h-[30vh] w-full">
            <BarChart
              BarChartData={BarChartDataAnalyticDashbord}
              stacked={true}
            />
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row sm:flex-col sm:gap-5 justify-between items-center h-max  w-full mt-5">
        <div className="h-[410px] xl:w-[65%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Real Time</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-[320px] w-full">
            <Worldmap />
          </div>
        </div>
        <DoughnutchatComponent
          Doughnutchartdata={DoughnutchartdataAnalyticDashbord}
          piecharttable={piecharttable}
        />
      </div>
      <div className="flex xl:flex-row sm:flex-col sm:gap-5 justify-between items-center flex-wrap h-max w-full mt-5">
        <div className="h-[400px] xl:w-[32%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Languages</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-11 w-full flex justify-between items-center border-b border-gray-300">
            <div className="h-11 w-[80px] text-sm font-semibold flex justify-start items-center">
              Language
            </div>
            <div className="h-11 w-[80px] text-sm font-semibold flex justify-end items-center">
              Users
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-end items-center">
              Sessions
            </div>
          </div>
          {languagesdata.map((language, index) => (
            <div
              className="h-11 w-full flex justify-between items-center border-b border-gray-300"
              key={index}
            >
              <div className="h-11 w-[60px] text-sm flex justify-start items-center">
                {language.language}
              </div>
              <div className="h-11 w-[60px] text-sm flex justify-end items-center">
                {language.user}
              </div>
              <div className="h-11 w-[120px] text-sm flex justify-end items-center">
                <div className="h-5 w-[100px] rounded bg-gray-300 relative">
                  <div
                    className={`h-5 ${language.persentageuser} rounded absolute left-0 bg-blue-700`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[400px] xl:w-[65%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Latest Projects</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-11 w-full flex justify-between items-center border-b border-gray-300">
            <div className="h-11 w-[120px] text-sm font-semibold flex justify-start items-center">
              Sourse
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-end items-center">
              Users
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-end items-center">
              Sessions
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-end items-center">
              Bounce Rate
            </div>
            <div className="h-11 w-[200px] text-end text-sm font-semibold flex justify-end items-center">
              Avg. Session Duration
            </div>
          </div>
          {trafficdata.map((traffic, index) => (
            <div
              className="h-11 w-full flex justify-between items-center border-b border-gray-300"
              key={index}
            >
              <div className="h-11 w-[120px] text-sm flex justify-start items-center">
                {traffic.Sourse}
              </div>
              <div className="h-11 w-[160px] text-sm flex justify-end items-center">
                {traffic.Users}
              </div>
              <div className="h-11 w-[160px] text-sm flex justify-end items-center">
                {traffic.Sessions}
              </div>
              <div className="h-11 w-[160px] flex justify-end items-center">
                <div
                  className={`h-max w-max flex justify-center items-center px-2 rounded text-sm text-white ${(() => {
                    if (traffic.Bouncerate < "50") {
                      return "bg-green-600";
                    } else {
                      return "bg-red-600";
                    }
                  })()}`}
                >
                  {traffic.Bouncerate}%
                </div>
              </div>
              <div className="h-11 w-[200px] text-sm flex justify-end items-center">
                {traffic.SessionDuration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
