import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartBar, ChartLine, Table } from "components";
import { DivWrap, StyledH3 } from "./CoinList.styles";
import { getCoinInfoList } from "store/coinList/coinListAction.js";

function CoinList(props) {
  useEffect(() => {
    props.getCoinInfoList(props.currencyDefault);
  }, []);

  return (
    <DivWrap className="table">
      <StyledH3 className="table-text">Overview</StyledH3>
      <DivWrap className="charts">
        <DivWrap className="chart-display">
          <ChartLine
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={props.currencyDefault}
          />
        </DivWrap>
        <DivWrap className="chart-display">
          <ChartBar
            chartMarket={props.chartMarket}
            chartLabel={props.chartLabel}
            currencyDefault={props.currencyDefault}
          />
        </DivWrap>
      </DivWrap>
      <StyledH3 className="table-text">Overview</StyledH3>
      <Table
        coinList={props.coinList}
        currencyDefault={props.currencyDefault}
      />
    </DivWrap>
  );
}

const mapStateToProps = (state) => ({
  currencyDefault: state.mainApp.currencyDefault,
  coinList: state.coinList.coinList,
});
const mapDispatchToProps = {
  getCoinInfoList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
