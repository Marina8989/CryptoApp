import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import ChartBarLegend from "../ChartBarLegend/ChartBarLegend.js";
import { getChartInfo } from "store/chart/chartAction.js";

function ChartBar() {
  const dispatch = useDispatch();
  const currencyDefault = useSelector((state) => state.mainApp.currencyDefault);
  const chartMarket = useSelector((state) => state.chart.chartMarket);
  const chartLabel = useSelector((state) => state.chart.chartLabel)

  useEffect(() => {
    dispatch(getChartInfo(currencyDefault.toLowerCase()));
  }, []);
  return (
    <div className="chart-line">
      <ChartBarLegend />
      <Bar
        data={{
          labels: chartLabel,
          datasets: [
            {
              label: currencyDefault,
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
