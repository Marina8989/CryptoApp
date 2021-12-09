import React from "react";
import axios from "axios";
import {
  StyledLegend,
  StyledLegendH4,
  StyledH5,
} from "./ChartLineLegend.styles";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

class ChartLineLegend extends React.Component {
  state = {
    legend: [],
  };
  getChartLegend = async () => {
    const { data } = await axios(`${process.env.REACT_APP_MARKET_URL}`);
    const newList = [...this.state.legend, data[0]];
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
            <StyledLegend key={item}>
              <StyledH5>Price</StyledH5>
              <StyledLegendH4>
                ${(item.low_24h / 1000).toFixed(3)}K
              </StyledLegendH4>
              <StyledH5>{today}</StyledH5>
            </StyledLegend>
          );
        })}
      </>
    );
  }
}

export default ChartLineLegend;
