import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import ChartBarLegend from "../ChartBarLegend/ChartBarLegend.js";
import { getChartInfo } from "store/chart/chartAction.js";

function ChartBar(props) {
  useEffect(() => {
    props.getChartInfo(props.currencyDefault.toLowerCase());
  }, []);
  return (
    <div className="chart-line">
      <ChartBarLegend />
      <Bar
        data={{
          labels: props.chartLabel,
          datasets: [
            {
              label: props.currencyDefault,
              data: props.chartMarket,
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

const mapStateToProps = (state) => ({
   currencyDefault: state.mainApp.currencyDefault,
   chartMarket: state.chart.chartMarket,
   chartLabel: state.chart.chartLabel
})
const mapDispatchToProps = {
  getChartInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartBar);
