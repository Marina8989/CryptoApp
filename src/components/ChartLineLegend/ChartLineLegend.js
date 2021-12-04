import React from "react";
import axios from "axios";
import { StyledLegend, StyledLegendH4 } from "./ChartLineLegend.styles";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

class ChartLineLegend extends React.Component {
  state = {
    legend: [],
  };
  getChartLegend = async () => {
    const { data } = await axios(`${process.env.REACT_APP_MARKET_URL}`);
    const newList = [...this.state.legend, data];
    this.setState({ legend: newList });
  };
  componentDidMount() {
    this.getChartLegend();
  }
  render() {
    return (
      <>
        {this.state.legend.map((item) => {
          return (
            <StyledLegend key={0}>
              <h5>Price</h5>
              <StyledLegendH4>
                ${(item[0].low_24h / 1000).toFixed(3)}K
              </StyledLegendH4>
              <h5>{today}</h5>
            </StyledLegend>
          );
        })}
      </>
    );
  }
}

export default ChartLineLegend;
