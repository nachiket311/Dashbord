export const linechartdata = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Sales($)",
      data: [
        2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327,
      ],
      borderColor: "#2196F3",
      fill: false,
    },
    {
      label: "Orders",
      data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827],
      borderColor: "#808080",
      borderDash: [5, 5],
      fill: false,
    },
  ],
};

export const Piechartdata = {
  labels: ["Social", "Search Engines", "Direct", "Other"],
  datasets: [
    {
      label: "labels",
      data: [260, 125, 54, 146],
      backgroundColor: ["#0000FF", "#FF0000", "#FFA500", "#D3D3D3"],
    },
  ],
  CenterHead: "+27%",
  CenterBottom: "more sales",
};

export const Doughnutchartdata = {
  labels: ["Social", "Search Engines", "Direct", "Other"],
  datasets: [
    {
      label: "labels",
      data: [260, 125, 54, 146],
      backgroundColor: ["#0000FF", "#FF0000", "#FFA500", "#D3D3D3"],
      borderWidth: 5,
      borderColor: "#fff",
      cutout: "80%",
      hoverOffset: 4,
    },
  ],
  CenterHead: "+27%",
  CenterBottom: "more sales",
};

export const DoughnutchartdataAnalyticDashbord = {
  labels: ["Social", "Search Engines", "Direct"],
  datasets: [
    {
      label: "labels",
      data: [260, 125, 164],
      backgroundColor: ["#0000FF", "#FF0000", "#FFA500"],
      borderWidth: 5,
      borderColor: "#fff",
      cutout: "80%",
      hoverOffset: 4,
    },
  ],
  CenterHead: "+23%",
  CenterBottom: "new visitors",
};

export const BarChartDataDefaultDashbord = (barThickness) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Mobile",
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: "#0000FF",
      barThickness: barThickness,
    },
    {
      label: "Desktop",
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: "#ADD8E6",
      barThickness: barThickness,
      borderRadius: 5,
    },
  ],
});

export const BarChartDataAnalyticDashbord = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Mobile",
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: "#0000FF",
      barThickness: 9,
    },
    {
      label: "Desktop",
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: "#ADD8E6",
      barThickness: 9,
      borderRadius: 5,
    },
  ],
};

export const BarChartDataSaasDashbord = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: "#0000FF",
      barThickness: 9,
    },
    {
      label: "Revenue",
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: "#ADD8E6",
      barThickness: 9,
      borderRadius: 5,
    },
  ],
};

export const BarChartDataProfile = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: "#0000FF",
      barThickness: 9,
    },
    {
      label: "Revenue",
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: "#ADD8E6",
      barThickness: 9,
    },
  ],
};
