import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import ChartLineLegend from "../ChartLineLegend/ChartLineLegend.js";

function ChartLine(props) {
  const [chartMarket, setChartMarket] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const getChartInfo = async (coinCurrency) => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${coinCurrency}&days=30&interval=daily`
    );
    const chartMarket = data.prices.map((el) => el[1]);
    const chartLabels = data.prices.map((el) => new Date(el[0]).getDate());
    setChartMarket(chartMarket);
    setChartLabels(chartLabels);
  };
  useEffect(() => {
    getChartInfo(props.currencyDefault.toLowerCase());
  }, []);
  return (
    <div className="chart-line">
      <ChartLineLegend />
      <Line
        data={{
          labels: chartLabels,
          datasets: [
            {
              label: props.currencyDefault,
              data: chartMarket,
              fill: true,
              backgroundColor: "rgba(23, 82, 34, .2)",
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

export default ChartLine;
