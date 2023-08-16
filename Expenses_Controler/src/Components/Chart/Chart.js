import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
  const valueArray = props.dataPoints.map(dataPoints => dataPoints.value);
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
