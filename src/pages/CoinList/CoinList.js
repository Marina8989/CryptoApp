import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChartBar, ChartLine, Table } from "components";
import { StyledDivWrap, StyledH3 } from "./CoinList.styles";

function CoinList(props) {
  const [coinList, setCoinList] = useState([]);

  const getCoinInfo = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currencyDefault}&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const newCoinList = [...coinList, data];
      setCoinList(newCoinList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoinInfo();
  }, []);
  return (
    <StyledDivWrap className="table">
      <StyledH3 className="table-text">Overview</StyledH3>
      <StyledDivWrap className="charts">
        <StyledDivWrap className="chart-display">
          <ChartLine
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={props.currencyDefault}
          />
        </StyledDivWrap>
        <StyledDivWrap className="chart-display">
          <ChartBar
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={props.currencyDefault}
          />
        </StyledDivWrap>
      </StyledDivWrap>
      <StyledH3 className="table-text">Overview</StyledH3>
      <Table coinList={coinList} currencyDefault={props.currencyDefault} />
    </StyledDivWrap>
  );
}

export default CoinList;
