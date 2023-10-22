import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import { LinearScale, CategoryScale, ArcElement } from "chart.js";
import { useData } from "../DashboardComponent/DashboardData";
import { Tooltip } from "chart.js";

const DurationChart = () => {
  const { activityList } = useData();
  const {duration} = useData()
  
  Chart.register(LinearScale, CategoryScale, ArcElement, Tooltip);

  const data = {
    labels: ["Yoga", "Running", "Cycling", "Swimming", "Boxing"],
    datasets: [
      {
        label:"minute(s)",
        data: [duration.yoga, duration.running, duration.cycling, duration.swimming, duration.boxing],
        backgroundColor: [
          "#EB57A2",
          "#FFDB58",
          "#ff9b05",
          "#53D8B9",
          "#4B9FC9",
        ],
        hoverOffset: 14,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        fullSize:true,
        position: "center",
        labels: {
          generateLabels: function (chart) {
            const data = chart.data.datasets[0].data;
            const total = data.reduce((acc, value) => acc + value, 0);
            
            return data.map((value, index) => ({
              text: `${chart.data.labels[index]} - ${(
                (value / total) * 100
              ).toFixed(2)}%`,
              class: 'bold-label',
            }));
            
          },
         
        },
      },
      tooltip: {
        callbacks: {
          
        },
        titleFont: {
          weight: 700 ,
          size: 20,
        },
        bodyFont: {
          weight: 700 ,
          size: 20,
        }
      },

    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      <div className="legend flex gap-3 mt-8 justify-center items-center">
      <div>
        {console.log(duration)}
        {/* {console.log(dataDuration.Running)} */}
      </div>
      </div>
    </div>
  );
};

export default DurationChart;
