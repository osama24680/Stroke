import React from "react";
import style from "./Charts.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsAge = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Age range withe the highest Number of stroke patients ",
    },
  },
};

export const optionsSmoking = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "How the Smoking affects on the stroke ",
    },
  },
};

const labelsAge = ["Youth (0 - 45)", "Adulthood (46 - 64)", "Old age (65 - )"];
const labelsSmoking = [
  "Never smoked",
  "Unknown ",
  "Formerly smoked ",
  "Smokers",
];
const ageData = [2800, 1400, 900];
const smokingData = [1800, 1300, 800,600];

export const dataAge = {
  labels: labelsAge,
  datasets: [
    {
      label: "Stroke Age",
      data: ageData,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const dataSmoking = {
  labels: labelsSmoking,
  datasets: [
    {
      label: "Stroke Smoking",
      data: smokingData,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function BarChart() {
  return (
    <div className={style.BarCharts}>
      <Bar options={optionsAge} data={dataAge} />;
      <Bar options={optionsSmoking} data={dataSmoking} />;
    </div>
  );
}
export default BarChart;
