import React from "react";
import { Pie } from "react-chartjs-2";
// import { Doughnutchartdata } from "./Graphdata";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Tooltip, ArcElement);

const PieChart = ({ Piechartdata }) => {
  const options = {
    responsive: true,
  };

  return <Pie options={options} data={Piechartdata} />;
};

export default PieChart;
