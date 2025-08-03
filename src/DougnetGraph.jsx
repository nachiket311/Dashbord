import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Tooltip, ArcElement);

export default function DougnetGraph({ Doughnutchartdata }) {
  const options = {
    responsive: true,
  };

  return <Doughnut options={options} data={Doughnutchartdata} />;
}
