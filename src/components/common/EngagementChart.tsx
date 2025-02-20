import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const EngagementChart: React.FC = () => {
  const generateRandomData = () => {
    return Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * 1000) + 100
    );
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 500,
      redrawOnParentResize: true, // Ensures smooth resizing
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false, // Prevents unwanted transitions causing layout shift
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: [
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
    },
    colors: ["black"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#E5E7EB",
    },
  };

  const chartSeries = [
    {
      name: "Engagement",
      data: generateRandomData(),
    },
  ];

  return (
    <div className="bg-white p-6 shadow-lg border-2 border-gray-300 w-6xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Viewers Engagement
      </h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default EngagementChart;
