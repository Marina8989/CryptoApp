import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { FaAdjust } from "react-icons/fa";
import { CoinList, CoinPage, Portfolio } from "pages";
import { Navbar } from "components";
import { findItem } from "store/mainApp/mainAppAction.js";
import "./index.css";

function App(props) {
  const handleCoinCurrency = (el) => {
    props.findItem(el);
  };
  return (
    <div>
      <div className="navbar">
        <FaAdjust onClick={props.handleSwitch} className="menu-icon" />
        <Navbar
          handleCoinCurrency={handleCoinCurrency}
          currencyDefault={props.currencyDefault}
          currencyList={props.currencyList}
        />
      </div>
      <div className="bg-main">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <CoinList currencyDefault={props.currencyDefault} />
            )}
          />
          <Route
            exact
            path="/portfolio"
            component={() => (
              <Portfolio currencyDefault={props.currencyDefault} />
            )}
          />
          <Route path="/coinPage/:id" component={CoinPage} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currencyDefault: state.mainApp.currencyDefault,
  currencyList: state.mainApp.currencyList,
});

const mapDispatchToProps = {
  findItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
