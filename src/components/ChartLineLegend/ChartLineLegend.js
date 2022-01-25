import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledLegend, LegendH4, StyledH5 } from "./ChartLineLegend.styles";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

function ChartLineLegend() {
  const [legend, setLegend] = useState([]);

  const getChartLegend = async () => {
    const { data } = await axios(`${process.env.REACT_APP_MARKET_URL}`);
    const newList = [...legend, data[0]];
    setLegend(newList);
  };
  useEffect(() => {
    getChartLegend();
  }, []);

  return (
    <>
      {legend.map((item) => {
        return (
          <StyledLegend key={item}>
            <StyledH5>Price</StyledH5>
            <LegendH4>${(item.low_24h / 1000).toFixed(3)}K</LegendH4>
            <StyledH5>{today}</StyledH5>
          </StyledLegend>
        );
      })}
    </>
  );
}

export default ChartLineLegend;
