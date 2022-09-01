import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function WeatherChart({ weatherData }) {
  let forecastMax = [...weatherData];
  forecastMax = forecastMax.splice(1, 7).map((m) => m.max_temp);

  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Max Temp",
        data: forecastMax,
        borderColor: "white",
        backgroundColor: "white",
      },
    ],
  };

  let min = Math.min(...forecastMax) - 5;
  let max = Math.max(...forecastMax) + 5;
  return (
    <div className="chart">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false,
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              min: min,
              max: max,
              display: false,
            },
          },
        }}
        data={data}
      />
    </div>
  );
}
