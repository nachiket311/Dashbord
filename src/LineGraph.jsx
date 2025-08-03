import React from "react";
import { Line } from "react-chartjs-2";
import { linechartdata } from "./Graphdata";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default function LineGraph() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    cubicInterpolationMode: "monotone",
  };

  return (
    <div className="h-[90%] w-full">
      <Line options={options} data={linechartdata} />
    </div>
  );
}
