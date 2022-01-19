import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import ChartLineLegend from "../ChartLineLegend/ChartLineLegend.js";
import { getChartInfo } from "../../store/chart/chartAction.js";


function ChartLine(props) {
  useEffect(() => {
    props.getChartInfo(props.currencyDefault.toLowerCase());
  }, []);
  return (
    <div className="chart-line">
      <ChartLineLegend />
      <Line
        data={{
          labels: props.chartLabel,
          datasets: [
            {
              label: props.currencyDefault,
              data: props.chartMarket,
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

const mapStateToProps = (state) => ({
   currencyDefault: state.mainApp.currencyDefault,
   chartMarket: state.chart.chartMarketPrices,
   chartLabel: state.chart.chartLabelPrices
})
const mapDispatchToProps = {
  getChartInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartLine);
