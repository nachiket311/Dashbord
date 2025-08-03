import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";

ChartJS.register(BarElement, Tooltip);

const BarChartAnalytic = ({ BarChartData, stacked }) => {
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
      <div className="xl:h-[30vh] lg:h-[35vh] sm:h-[45vh] w-full">
        <Bar options={options} data={BarChartData} />
      </div>
    );
  }

export default BarChartAnalytic;
