import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import ChartBarLegend from "../ChartBarLegend/ChartBarLegend.js";

function ChartBar(props) {
  const [chartMarket, setChartMarket] = useState([]);
  const [chartLabel, setChartLabel] = useState([]);

  const getChartInfo = async (coinCurrency) => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${coinCurrency}&days=30&interval=daily`
    );
    const chartMarket = data.total_volumes.map((el) => el[1]);
    const chartLabel = data.total_volumes.map((el) =>
      new Date(el[0]).getDate()
    );
    setChartMarket(chartMarket);
    setChartLabel(chartLabel);
  };
  useEffect(() => {
    getChartInfo(props.currencyDefault.toLowerCase());
  }, []);

  return (
    <div className="chart-line">
      <ChartBarLegend />
      <Bar
        data={{
          labels: chartLabel,
          datasets: [
            {
              label: props.currencyDefault,
              data: chartMarket,
              fill: true,
              backgroundColor: "rgb(33,114,229)",
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

export default ChartBar;
