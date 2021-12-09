import React from "react";
import { Line } from "react-chartjs-2";

class Sparkline extends React.Component {
  state = {
    chartMarket: [],
    chartLabel: [],
  };
  render() {
    return (
      <div className="chart-line">
        <Line
          data={{
            labels: this.state.chartLabel,
            datasets: [
              {
                label: "BTC",
                data: this.state.chartMarket,
                fill: true,
                backgroundColor: "rgb(23, 82, 34)",
                borderColor: "rgb(1,226,37)",
                tension: 0.6,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                grid: {
                  display: false,
                  drawTicks: false,
                  borderWidth: 0,
                },
                ticks: {
                  display: false,
                },
              },
              x: {
                grid: {
                  display: false,
                  borderWidth: 0,
                },
              },
            },
          }}
          height={250}
          width={415}
        />
      </div>
    );
  }
}

export default Sparkline;
