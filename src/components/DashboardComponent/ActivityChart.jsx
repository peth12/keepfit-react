import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, scales } from "chart.js";
import { LinearScale, CategoryScale, BarElement } from "chart.js";
import { useData } from "../ActivityComponent/ActivityData";
import { Tooltip } from "chart.js";

const ActivityChart = () => {
  const { activityList } = useData();

  Chart.register(LinearScale, CategoryScale, BarElement, Tooltip);

  const data = {
    labels: ["Yoga", "Running", "Cycling", "Swimming", "Boxing"],
    datasets: [
      {
        label: "minute(s)",
        data: [30, 20, 30, 40, 30],
        backgroundColor: [
          "#EB57A2",
          "#FFDB58",
          "#ff9b05",
          "#53D8B9",
          "#4B9FC9",
        ],
        hoverOffset: 16,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "center",
        labels: {
          generateLabels: function (chart) {
            const data = chart.data.datasets[0].data;
            const total = data.reduce((acc, value) => acc + value, 0);

            return data.map((value, index) => ({
              text: `${chart.data.labels[index]} - ${(
                (value / total) *
                100
              ).toFixed(2)}%`,
              class: "bold-label",
            }));
          },
        },
        fullSize: true,
      },
      tooltip: {
        callbacks: {},
        titleFont: {
          weight: 900,
          size: 40,
        },
        bodyFont: {
          weight: 900,
          size: 40,
        },
      },
    },
    animation: {
      tension: {
        duration: 2000,
        easing: "easeInQuart",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 30,
            weight: 900,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 30,
            weight: 900,
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
