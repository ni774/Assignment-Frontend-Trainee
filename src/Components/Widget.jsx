import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import AddWidgetButton from "./AddWidgetButton";

// Register the required Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

function Widget({ title, data, searchKeywords }) {
  const chartRefs = useRef([]);
  console.log("empdata", data)
  // const [EmpData, setEpmData] = useState(data);
  // console.log("empdata", EmpData)
  /*=============filter featur================*/

  useEffect(() => {
    return () => {
      // Destroy all chart instances when the component unmounts
      chartRefs.current.forEach((chart) => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  const temData = {
    labels: ["black", "Blue", "Yellow"],
    chartType: "bar",
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(0, 0, 0)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="row flex flex-nowrap overflow-x-auto">
        {/* Array.from({ length: 10 }). */}
        {data.map((val, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[400px] h-[200px] border-2 border-[#CCCCCC] rounded-md m-2 bg-gray-50 overflow-y-hidden"
          >
            <div className="p-1 h-[190px] bg-white">
              {val.chartType == "doughnut" ? (
                <Doughnut
                  data={val}
                  ref={(chart) => {
                    // Save reference to the chart instance
                    if (chart) {
                      if (chartRefs.current[i]) {
                        chartRefs.current[i].destroy(); // Destroy previous instance
                      }
                      chartRefs.current[i] = chart.chartInstance;
                    }
                  }}
                />
              ) : (
                <Bar
                  data={val}
                  ref={(chart) => {
                    // Save reference to the chart instance
                    if (chart) {
                      if (chartRefs.current[i]) {
                        chartRefs.current[i].destroy(); // Destroy previous instance
                      }
                      chartRefs.current[i] = chart.chartInstance;
                    }
                  }}
                />
              )}
            </div>
          </div>
        ))}

        {/* add custom widget */}
        {searchKeywords.length === 0 ? (
          <div className="flex flex-shrink-0 w-[400px] h-[200px]  border-2 border-[#CCCCCC] rounded-md m-2 bg-gray-50">
            <span className="h-max m-auto">
              <AddWidgetButton />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Widget;
