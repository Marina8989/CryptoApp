import React from "react";
import axios from "axios";
import { ChartBar, ChartLine, Table } from "components";
import { StyledDivWrap, StyledH3 } from "./CoinList.styles";

class CoinList extends React.Component {
  state = {
    coinList: [],
  };

  getCoinInfo = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currencyDefault}&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const newCoinList = [...this.state.coinList, data];
      this.setState({ coinList: newCoinList });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currencyDefault !== this.props.currencyDefault) {
      this.getCoinInfo();
    }
  }
  componentDidMount() {
    this.getCoinInfo();
  }
  render() {
    return (
      <StyledDivWrap className="table">
        <StyledH3 className="table-text">Overview</StyledH3>
        <StyledDivWrap className="charts">
          <StyledDivWrap className="chart-display">
            <ChartLine
              chartMarket={this.chartMarket}
              chartLabel={this.chartLabel}
              currencyDefault={this.props.currencyDefault}
            />
          </StyledDivWrap>
          <StyledDivWrap className="chart-display">
            <ChartBar
              chartMarket={this.chartMarket}
              chartLabel={this.chartLabel}
              currencyDefault={this.props.currencyDefault}
            />
          </StyledDivWrap>
        </StyledDivWrap>
        <StyledH3 className="table-text">Overview</StyledH3>
        <Table
          coinList={this.state.coinList}
          currencyDefault={this.props.currencyDefault}
        />
      </StyledDivWrap>
    );
  }
}

export default CoinList;
