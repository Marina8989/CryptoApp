import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { FaAdjust } from "react-icons/fa";
import { CoinList, CoinPage, Portfolio } from "pages";
import { Navbar } from "components";
import "./index.css";

function App(props) {
  const [currencyDefault, setCurrencyDefault] = useState("USD");
  const [currencyList, setCurrencyList] = useState([
    "USD",
    "EUR",
    "GBP",
    "ETH",
    "BTC",
  ]);

  const handleCoinCurrency = (el) => {
    const newVal = currencyList.find((item) => item === el);
    setCurrencyDefault(newVal);
  };
  return (
    <div>
      <div className="navbar">
        <FaAdjust onClick={props.handleSwitch} className="menu-icon" />
        <Navbar
          handleCoinCurrency={handleCoinCurrency}
          currencyDefault={currencyDefault}
          currencyList={currencyList}
        />
      </div>
      <div className="bg-main">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <CoinList currencyDefault={currencyDefault} />}
          />
          <Route
            exact
            path="/portfolio"
            component={() => <Portfolio currencyDefault={currencyDefault} />}
          />
          <Route path="/coinPage/:id" component={CoinPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
