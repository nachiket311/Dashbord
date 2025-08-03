import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";

ChartJS.register(BarElement, Tooltip);

export default function BarChartdefault({ BarChartData, stacked }) {
  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked, 
          grid: { drawBorder: false, display: false },
        },
        y: {
          stacked, 
          beginAtZero: true,
          grid: { drawBorder: false, display: false },
        },
      },
    }),
    [stacked]
  );

  return (
    <div className="lg:p-2 sm:h-[45vh] w-full">
      <Bar options={options} data={BarChartData} />
    </div>
  );
}
