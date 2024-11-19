// import React, { useEffect, useRef } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import zoomPlugin from "chartjs-plugin-zoom";
// import "./Chart.css";

// ChartJS.register(...registerables, zoomPlugin);

// const ChartComponent = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Sample Data
//     const labels = Array.from({ length: 50 }, (_, i) => `Label ${i + 1}`);
//     const data = Array.from({ length: 50 }, () => Math.random() * 100);

//     // Chart Configuration
//     const ctx = chartRef.current.getContext("2d");
//     new ChartJS(ctx, {
//       type: "bar", // Chart Type
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Energy Consumption",
//             data: data,
//             backgroundColor: "rgba(0, 200, 200, 0.5)",
//             borderColor: "rgba(0, 200, 200, 1)",
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           zoom: {
//             zoom: {
//               wheel: { enabled: true }, // Enable zooming via mouse wheel
//               pinch: { enabled: true }, // Enable zooming via pinch
//               mode: "x", // Only zoom the X-axis
//             },
//             pan: {
//               enabled: true, // Enable panning
//               mode: "x", // Only pan horizontally
//             },
//           },
//         },
//         scales: {
//           x: {
//             min: 0, // Set initial zoom start (first data point)
//             max: 10, // Set initial zoom end (e.g., 10 labels visible)
//             ticks: {
//               autoSkip: false, // Show all labels
//             },
//           },
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div style={{ overflowX: "auto", border: "1px solid #ccc", width: "100%" }}>
//       <canvas ref={chartRef} style={{ minWidth: "1500px", height: "400px" }} />
//     </div>
//   );
// };

// export default ChartComponent;
