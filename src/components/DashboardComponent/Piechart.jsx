import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";

const Piechart = () => {
  const getChartOptions = () => {
    return {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      // ... (rest of the chart options)
    };
  };

  const chartOptions = getChartOptions();

  if (
    document.getElementById("donut-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("donut-chart"),
      chartOptions
    );
    chart.render();
  }

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });

  return (
    <div className="max-w-sm h-full w-full bg-white rounded-lg shadow p-4 md:p-6 flex place-items-center">
      <div className="py-6" id="donut-chart">
        <ApexCharts
          options={getChartOptions()}
          series={chartOptions.series}
          type="pie"
        />
      </div>
      <div className="flex justify-between mb-3"></div>
    </div>
  );
};

export default Piechart;
