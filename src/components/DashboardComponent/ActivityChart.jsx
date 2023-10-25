import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, Colors, scales } from "chart.js";
import { LinearScale, CategoryScale, BarElement } from "chart.js";
import { useData } from "../DashboardComponent/DashboardData";
import { Tooltip } from "chart.js";

const ActivityChart = () => {
  const { activityList } = useData();
  const {duration, running, swimming, boxing, cycling, yoga} = useData()

  Chart.register(LinearScale, CategoryScale, BarElement, Tooltip);

  function getRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      colors.push(randomColor);
    }
    return colors;
  }

  const data = {
    labels: ["Yoga", "Running", "Cycling", "Swimming", "Boxing"],
    datasets: [
      {
        label: "time(s)",
        data: [yoga.length, running.length, cycling.length, swimming.length, boxing.length, boxing.length],
        backgroundColor: [
          "#EB57A2",
          "#FFDB58",
          "#ff9b05",
          "#53D8B9",
          getRandomColors(1),
          getRandomColors(1),
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
                (value / total) * 100
              ).toFixed(10)}%`,
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
          size: 20,
        },
        bodyFont: {
          weight: 900,
          size: 20,
        },
      },
    },
    transitions: {
      resize: 20,
      show: false
    },
    Animation: {
      easing:"linear"
    },
    responsesive: false,
    responsiveAnimationDuration: 0,
    scales: {
      x: {
        ticks: {
          font: {
            size: 30,
            weight: 700,
          },
        },
      },
      y: {
        display:false,
        ticks: {
          font: {
            size: 20,
            weight: 800,
          },
        },
      },
    },
  };

  return (
    <div className="">
      <Bar data={data} options={options} width={"full"} />
    </div>
  );
};

export default ActivityChart;
