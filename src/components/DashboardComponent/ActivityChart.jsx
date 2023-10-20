import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { LinearScale, CategoryScale, BarElement } from "chart.js";
import { useData } from "../ActivityComponent/ActivityData";

const ActivityChart = () => {
    const {activityList} = useData()
  // Register the scales with Chart.js
  Chart.register(LinearScale, CategoryScale, BarElement);

  const data = {
    labels: ["Yoga","Running", "Cycling", "Swimming","Boxing"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 30, 40],
        backgroundColor: [
            "#BB83DF",
            "rgb(255, 99, 132)",
            "#ff9b05",
            "#80DFD6",
            "#EDE13D",
        ],
        hoverBackgroundColor: [
          "rgb(255, 0, 0)",
          "rgb(0, 0, 255)",
          "rgb(255, 255, 0)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Customized Chart Title",
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
      },
      legend: {
        display: true,
        position: "top",
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
