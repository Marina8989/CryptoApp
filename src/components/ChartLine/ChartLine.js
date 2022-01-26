import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import ChartLineLegend from "../ChartLineLegend/ChartLineLegend.js";
import { getChartInfo } from "store/chart/chartAction.js";

function ChartLine() {
  const dispatch = useDispatch();
  const currencyDefault = useSelector((state) => state.mainApp.currencyDefault);
  const chartMarket = useSelector((state) => state.chart.chartMarketPrices);
  const chartLabel = useSelector((state) => state.chart.chartLabelPrices);

  useEffect(() => {
    dispatch(getChartInfo(currencyDefault.toLowerCase()));
  }, []);
  return (
    <div className="chart-line">
      <ChartLineLegend />
      <Line
        data={{
          labels: chartLabel,
          datasets: [
            {
              label: currencyDefault,
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
