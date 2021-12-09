import React from "react";
import { Switch, Route } from "react-router-dom";
import { FaAdjust } from "react-icons/fa";
import { CoinList, CoinPage, Portfolio } from "pages";
import { Navbar } from "components";
import "./index.css";

class App extends React.Component {
  state = {
    currencyDefault: "USD",
    currencyList: ["USD", "EUR", "GBP", "ETH", "BTC"],
  };
  handleCoinCurrency = (el) => {
    const newVal = this.state.currencyList.find((item) => item === el);
    this.setState({ currencyDefault: newVal });
  };
  render() {
    return (
      <div>
        <div className="navbar">
          <FaAdjust onClick={this.handleSwitch} className="menu-icon" />
          <Navbar
            handleCoinCurrency={this.handleCoinCurrency}
            currencyDefault={this.state.currencyDefault}
            currencyList={this.state.currencyList}
          />
        </div>
        <div className="bg-main">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <CoinList currencyDefault={this.state.currencyDefault} />
              )}
            />
            <Route
              exact
              path="/portfolio"
              component={() => (
                <Portfolio currencyDefault={this.state.currencyDefault} />
              )}
            />
            <Route path="/coinPage/:id" component={CoinPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
