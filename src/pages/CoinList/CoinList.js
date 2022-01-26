import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartBar, ChartLine, Table } from "components";
import { DivWrap, StyledH3 } from "./CoinList.styles";
import { getCoinInfoList } from "store/coinList/coinListAction.js";

function CoinList(props) {
   const dispatch = useDispatch();
   const currencyDefault = useSelector((state) => state.mainApp.currencyDefault);
   const coinList = useSelector((state) => state.coinList.coinList);

  useEffect(() => {
    dispatch(getCoinInfoList(currencyDefault));
  }, []);

  return (
    <DivWrap className="table">
      <StyledH3 className="table-text">Overview</StyledH3>
      <DivWrap className="charts">
        <DivWrap className="chart-display">
          <ChartLine
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={currencyDefault}
          />
        </DivWrap>
        <DivWrap className="chart-display">
          <ChartBar
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={currencyDefault}
          />
        </DivWrap>
      </DivWrap>
      <StyledH3 className="table-text">Overview</StyledH3>
      <Table
        coinList={coinList}
        currencyDefault={currencyDefault}
      />
    </DivWrap>
  );
}

export default CoinList;
