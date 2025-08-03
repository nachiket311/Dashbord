import React from "react";
import Breadcrumb from "../Breadcrumb";
import {
  BarChartDataProfile,
  Doughnutchartdata,
  Piechartdata,
} from "../Graphdata";
import LineGraph from "../LineGraph";
import DougnetGraph from "../DougnetGraph";
import BarChart from "../Charts/BarChart.jsx";
import PieChart from "./PieChart.jsx";

const Charts = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Charts</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex flex-col justify-between gap-5 mt-6">
        <div className="flex xl:flex-row sm:flex-col gap-3 h-max w-full">
          {/*Line Chart*/}
          <div className="h-max xl:w-[49%] sm:w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Line Chart</h4>
            <p>A line chart is a way of plotting data points on a line.</p>
            <div className="h-[400px] w-full">
              <LineGraph />
            </div>
          </div>
          {/*Bar Chart*/}
          <div className="h-max xl:w-[49%] sm:w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Bar Chart</h4>
            <p>
              A bar chart provides a way of showing data values represented as
              vertical bars.
            </p>
            <div className="h-[400px] w-full">
              <BarChart BarChartData={BarChartDataProfile} stacked={false} />
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row sm:flex-col gap-3 h-max w-full">
          {/*Doughnut Chart */}
          <div className="h-max xl:w-[49%] sm:w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Doughnut Chart</h4>
            <p>
              Doughnut charts are excellent at showing the relational
              proportions between data.
            </p>
            <div className="h-[400px] w-full flex justify-center items-center">
              <DougnetGraph Doughnutchartdata={Doughnutchartdata} />
            </div>
          </div>
          {/*Pie Chart */}
          <div className="h-max xl:w-[49%] sm:w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Pie Chart</h4>
            <p>
              Pie charts are excellent at showing the relational proportions
              between data.
            </p>
            <div className="h-[400px] w-full flex justify-center items-center">
              <PieChart Piechartdata={Piechartdata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
