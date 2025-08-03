import React, { useState } from "react";
import Card from "./Card";
import BarChart from "./Charts/BarChartSaas.jsx";
import { Doughnutchartdata, BarChartDataSaasDashbord } from "./Graphdata";
import DoughnutchatComponent from "./DoughnutchatComponent";
import IndiaMap from "./IndiaMap.jsx";

export default function SaasDashbord() {
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
      revenue: "54",
      value: +46,
    },
    {
      title: "Others",
      revenue: "146",
      value: +24,
    },
  ];

  const CardData = [
    {
      title: "income",
      timegap: "monthly",
      value: "$37.500",
      comparision: "+14",
      since: "Since last month",
    },
    {
      title: "Visitors",
      timegap: "Annual",
      value: "150.121",
      comparision: "-14",
      since: "Since last month",
    },
    {
      title: "Compeleted Orders",
      timegap: "Weekly",
      value: "12.432",
      comparision: "+24",
      since: "Since last month",
    },
    {
      title: "Pending Orders",
      timegap: "",
      value: "22",
      comparision: "-6",
      textcolor: "text-blue-600",
      background: "bg-blue-200",
      since: "Since last month",
    },
  ];

  const LatestProductdata = [
    {
      ProductName: "Aurora",
      LicenseType: "Single License",
      Technology: "React",
      OpenTickets: "12",
      Sales: "1205",
    },
    {
      ProductName: "Canary",
      LicenseType: "Single License",
      Technology: "React",
      OpenTickets: "1",
      Sales: "410",
    },
    {
      ProductName: "Eagle",
      LicenseType: "Extended License",
      Technology: "Angular",
      OpenTickets: "2",
      Sales: "108",
    },
    {
      ProductName: "Fireball",
      LicenseType: "Single License",
      Technology: "React",
      OpenTickets: "3",
      Sales: "360",
    },
    {
      ProductName: "Omega",
      LicenseType: "Single License",
      Technology: "Angular",
      OpenTickets: "6",
      Sales: "712",
    },
    {
      ProductName: "Yoda",
      LicenseType: "Extended License",
      Technology: "Angular",
      OpenTickets: "15",
      Sales: "1502",
    },
    {
      ProductName: "Zulu",
      LicenseType: "Extended License",
      Technology: "Angular",
      OpenTickets: "2",
      Sales: "480",
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
      <div className="h-max w-full flex justify-between items-center pb-4 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Saas Dashbord</p>
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
      <div
        className={`h-max w-full flex justify-between items-center gap-3 mt-6 flex-wrap`}
      >
        <Card Data={CardData} height={"h-36"} width={"sm:w-[99%] md:w-[47%] xl:w-[24%]"} />
      </div>
      <div className="flex xl:flex-row sm:flex-col justify-between items-center h-max w-full gap-5 mt-5">
        <div className="h-[410px] xl:w-[45%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Real Time</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-[320px] w-full">
            <IndiaMap/>
          </div>
        </div>
        <div className="h-[410px] xl:w-[53%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Sales / Revenue</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-max w-full">
            <BarChart
              BarChartData={BarChartDataSaasDashbord}
              stacked={true}
            />
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row sm:flex-col gap-5 justify-between items-center h-max w-full mt-5">
        <DoughnutchatComponent
          Doughnutchartdata={Doughnutchartdata}
          piecharttable={piecharttable}
        />
        <div className="h-[450px] xl:w-[65%] sm:w-full p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Latest Products</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-11 w-full flex justify-between items-center border-b border-gray-300">
            <div className="h-11 w-[220px] text-sm font-semibold flex justify-start items-center">
              Product Name
            </div>
            <div className="h-11 w-[300px] text-sm font-semibold flex justify-start items-center">
              Licence Type
            </div>
            <div className="h-11 w-[220px] text-sm font-semibold flex justify-start items-center">
              Technology
            </div>
            <div className="h-11 w-[220px] text-sm font-semibold flex justify-start items-center">
              Open Tickets
            </div>
            <div className="h-11 w-[100px] text-sm font-semibold flex justify-start items-center">
              Sales
            </div>
          </div>
          {LatestProductdata.map((LatestProduct, index) => (
            <div
              className="h-12 w-full flex justify-between items-center border-b border-gray-300"
              key={index}
            >
              <div className="h-12 w-[220px] text-sm flex justify-start items-center">
                {LatestProduct.ProductName}
              </div>
              <div className="h-12 w-[300px] text-sm flex justify-start items-center">
                {LatestProduct.LicenseType}
              </div>
              <div className="h-12 w-[220px] text-sm flex justify-start items-center">
                <div
                  className={`h-max w-max flex justify-center items-center px-2 rounded text-sm text-white ${
                    LatestProduct.Technology === "React"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                >
                  {LatestProduct.Technology}
                </div>
              </div>
              <div className="h-12 w-[220px] flex justify-start items-center">
                {LatestProduct.OpenTickets}
              </div>
              <div className="h-12 w-[100px] text-sm flex justify-start items-center">
                {LatestProduct.Sales}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
