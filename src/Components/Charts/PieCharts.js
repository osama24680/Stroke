import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import style from "./Charts.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ["Stable", "Stroke"],
  datasets: [
    {
      label: "Number of percentage",
      data: [86.1, 13.9],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: ["Smokers", "Non Smokers"],
  datasets: [
    {
      label: "Smoking with BMI who have a stroke",
      data: [40.5, 59.5],
      backgroundColor: [ "rgba(153, 102, 255, 0.2)","rgba(255, 99, 132, 0.2)",],
      borderColor: [ "rgba(153, 102, 255, 1)","rgba(255, 99, 132, 0.2)",],
      borderWidth: 1,
    },
  ],
};

// !************************************************************************************************

// !************************************************************************************************

function PieCharts() {
  return (
    <div className={style.PieCharts}>
      <Pie data={data1} />;
      <Pie data={data2} />;
    </div>
  );
}

export default PieCharts;
