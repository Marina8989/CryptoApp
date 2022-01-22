import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartBar, ChartLine, Table } from "components";
import { StyledDivWrap, StyledH3 } from "./CoinList.styles";
import { getCoinInfoList } from "store/coinList/coinListAction.js";

function CoinList(props) {
  useEffect(() => {
    props.getCoinInfoList(props.currencyDefault);
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
      <Table coinList={props.coinList} currencyDefault={props.currencyDefault} />
    </StyledDivWrap>
  );
}

const mapStateToProps = (state) => ({
  currencyDefault: state.mainApp.currencyDefault,
  coinList: state.coinList.coinList
})
const mapDispatchToProps = {
  getCoinInfoList
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
