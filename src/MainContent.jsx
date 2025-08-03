import React, { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import { Doughnutchartdata, BarChartDataDefaultDashbord } from "./Graphdata";
import DoughnutchatComponent from "./DoughnutchatComponent";
import BarChartd from "./Charts/BarChart";

export default function MainContent() {
  const [barThickness, setBarThickness] = useState(getResponsiveBarThickness());

  function getResponsiveBarThickness() {
    const width = window.innerWidth;
    if (width < 1280) return 12;
    return 5;
  }

  useEffect(() => {
    const handleResize = () => {
      setBarThickness(getResponsiveBarThickness());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = BarChartDataDefaultDashbord(barThickness);

  const DataTime = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "This month",
    "Last month",
  ];

  const CardData = [
    {
      title: "Sales Today",
      timegap: "Today",
      value: "2.532",
      comparision: "+26",
      since: "Since last month",
    },
    {
      title: "Visitors",
      timegap: "Annual",
      value: "170.212",
      comparision: "-14",
      since: "Since last month",
    },
    {
      title: "Total Earnings",
      timegap: "Monthly",
      value: "$ 24.300",
      comparision: "+18",
      since: "Since last month",
    },
    {
      title: "Pending Orders",
      timegap: "",
      value: "45",
      comparision: "-9",
      textcolor: "text-blue-600",
      background: "bg-blue-200",
      since: "Since last month",
    },
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

  const latestprojectdata = [
    {
      projectname: "Project Aurora",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "Done",
      assigneename: "James Dalton",
    },
    {
      projectname: "Project Eagle",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "In Progress",
      assigneename: "Tracy Mack",
    },
    {
      projectname: "Project Fireball",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "Done",
      assigneename: "Sallie Love",
    },
    {
      projectname: "Project Omega",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "Cancelled",
      assigneename: "Galend Jang",
    },
    {
      projectname: "Project Yoda",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "Done",
      assigneename: "Raymond Ennis",
    },
    {
      projectname: "Project Zulu",
      Startdate: "01/01/2023",
      enddate: "31/06/2023",
      state: "Done",
      assigneename: "Matthew Winters",
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
          <p className="text-3xl font-semibold">Default Dashbord</p>
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
        {CardData.map((item, index) => (
          <div
            className={`h-36 sm:w-[99%] md:w-[47%] xl:w-[24%]
           ${
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
        ))}
      </div>
      <div className="sm:flex-col sm:gap-6 flex xl:flex-row justify-between items-start h-max w-full mt-5">
        <div className="h-[450px] sm:w-full xl:w-[65%] p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Total revenue</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <LineGraph />
        </div>
        <DoughnutchatComponent
          Doughnutchartdata={Doughnutchartdata}
          piecharttable={piecharttable}
        />
      </div>
      <div className="flex xl:flex-row sm:flex-col sm:gap-6 justify-between items-center flex-wrap h-max w-full mt-5">
        <div className="xl:h-[400px] sm:h-[62vh] sm:w-full xl:w-[32%] p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Mobile/Desktop</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-max w-full">
            <BarChartd BarChartData={chartData} stacked={true} />
          </div>
        </div>
        <div className="xl:h-max sm:h-max sm:w-full xl:w-[65%] p-5 pb-5 rounded bg-white">
          <div className="h-max w-full flex justify-between items-center pb-5">
            <p className="text-lg">Latest Projects</p>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </div>
          <div className="h-11 w-full flex justify-between items-center border-b border-gray-300">
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
              Name
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
              Start Date
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
              End Date
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
              State
            </div>
            <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
              Assignee
            </div>
          </div>
          {latestprojectdata.map((project, index) => (
            <div
              className="h-11 w-full flex justify-between items-center border-b border-gray-300"
              key={index}
            >
              <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                {project.projectname}
              </div>
              <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                {project.Startdate}
              </div>
              <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                {project.enddate}
              </div>
              <div className="h-11 w-[160px] flex justify-start items-center">
                <div
                  className={`h-max w-max flex justify-center items-center px-2 rounded text-sm text-white ${(() => {
                    if (project.state === "Done") {
                      return "bg-green-600";
                    } else if (project.state === "In Progress") {
                      return "bg-orange-500";
                    } else {
                      return "bg-red-600";
                    }
                  })()}`}
                >
                  {project.state}
                </div>
              </div>
              <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                {project.assigneename}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
