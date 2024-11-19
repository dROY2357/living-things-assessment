import React, { useState, useEffect } from "react";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import chartDataLocal from "./data/lightson.new_energySaving_interview_qn_1213.json"; //local fetch JSON data

defaults.maintainAspectRatio = false;
defaults.responsive = true;
ChartJS.register(zoomPlugin);

const url = "http://localhost:8080/"; // API endpoint hosted locally at port 8080

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  const labelsForChart = chartData.map((data) =>
    new Date(data.createdAt.$date).toLocaleDateString()
  );

  const energyData = chartData.map((data) => data.total_kwh);

  return (
    <div className="chart-container">
      <h1 className="heading-chart">Chart Visualization</h1>
      <div className="chart-display">
        <Bar
          data={{
            labels: labelsForChart,
            datasets: [
              {
                label: "Energy Consumption",
                data: energyData,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              zoom: {
                zoom: {
                  wheel: { enabled: true },
                  pinch: { enabled: true },
                  mode: "x",
                },
                pan: {
                  enabled: true,
                  mode: "x",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
