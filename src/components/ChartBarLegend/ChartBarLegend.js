import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledLegend, LegendH4, StyledH5 } from "./ChartBarLegend.styles";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

function ChartBarLegend() {
  const [legend, setLegend] = useState([]);

  const getChartLegend = async () => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );

    const newList = [...legend, data[0]];
    setLegend(newList);
  };
  useEffect(() => {
    getChartLegend();
  }, []);

  return (
    <>
      {legend.map((item) => (
        <StyledLegend key={item}>
          <StyledH5>Volume 24h</StyledH5>
          <LegendH4>${(item.total_volume / 1000000000).toFixed(3)}B</LegendH4>
          <StyledH5>{today}</StyledH5>
        </StyledLegend>
      ))}
    </>
  );
}

export default ChartBarLegend;
