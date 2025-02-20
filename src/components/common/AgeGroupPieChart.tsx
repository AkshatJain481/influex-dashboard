// AgeGroupPieChart.tsx
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const AgeGroupPieChart = () => {
  const pieChartOptions: ApexOptions = {
    labels: ["0-18", "18-35", "35-60", "60+"],
    chart: {
      type: "donut",
      redrawOnParentResize: true,
    },
    colors: ["#6366F1", "#F59E0B", "#10B981", "#EF4444"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            fontSize: "12px",
          },
        },
      },
    ],
  };

  const pieChartSeries = [
    Math.floor(Math.random() * 100) + 10,
    Math.floor(Math.random() * 100) + 10,
    Math.floor(Math.random() * 100) + 10,
    Math.floor(Math.random() * 100) + 10,
  ];

  return (
    <div className="w-sm bg-white p-6 shadow-lg border-2 border-gray-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-24">
        Age Group Distribution
      </h2>
      <div className="h-full my-auto">
        <Chart
          options={pieChartOptions}
          series={pieChartSeries}
          type="donut"
          height={350}
        />
      </div>
    </div>
  );
};

export default AgeGroupPieChart;
