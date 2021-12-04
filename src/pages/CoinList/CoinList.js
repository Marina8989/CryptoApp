import React from "react";
import axios from "axios";
import { ChartBar, ChartLine, Table } from "components";

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
      <div className="table">
        <h4 className="table-text">Overview</h4>
        <div className="charts">
          <div className="chart-display">
            <ChartLine
              chartMarket={this.chartMarket}
              chartLabel={this.chartLabel}
              currencyDefault={this.props.currencyDefault}
            />
          </div>
          <div className="chart-display">
            <ChartBar
              chartMarket={this.chartMarket}
              chartLabel={this.chartLabel}
              currencyDefault={this.props.currencyDefault}
            />
          </div>
        </div>
        <h4 className="table-text">Overview</h4>
        <Table
          coinList={this.state.coinList}
          currencyDefault={this.props.currencyDefault}
        />
      </div>
    );
  }
}

export default CoinList;
