import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Sparkline(props) {
  const [chartMarket, setChartMarket] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const getChartInfo = async (coin, coinCurrency) => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${coinCurrency}&days=15&interval=daily`
    );
    const chartMarket = data.prices.map((el) => el[1]);
    const chartLabels = data.prices.map((el) => new Date(el[0]).getDate());
    setChartMarket(chartMarket);
    setChartLabels(chartLabels);
  };
  useEffect(() => {
    getChartInfo(props.item.toLowerCase(), props.currencyDefault.toLowerCase());
  }, []);
  return (
    <div className="chart-line">
      <Line
        data={{
          labels: chartLabels,
          datasets: [
            {
              label: props.currencyDefault,
              data: chartMarket,
              fill: false,
              backgroundColor: "rgba(53, 182, 34, .2)",
              borderColor: "rgb(241,180,37)",
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
              ticks: {
                display: false,
              },
            },
          },
        }}
        height={60}
        width={120}
      />
    </div>
  );
}

export default Sparkline;
