import React from "react";
import NavbarInput from "../NavbarInput/NavbarInput.js";
import NavbarCurrency from "../NavbarCurrency/NavbarCurrency.js";
import {
  StyledMenu,
  StyledMenuPortfolio,
  StyledMenuCoins,
} from "./Navbar.styles";
import Global from "../Global/Global.js";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <StyledMenu>
          <div className="menu-links">
            <StyledMenuCoins to="/">Coins</StyledMenuCoins>
            <StyledMenuPortfolio to="/portfolio">Portfolio</StyledMenuPortfolio>
          </div>
          <NavbarInput />
          <NavbarCurrency
            handleClick={this.handleClick}
            handleCoinCurrency={this.props.handleCoinCurrency}
            currencyDefault={this.props.currencyDefault}
            currencyList={this.props.currencyList}
          />
        </StyledMenu>
        <Global currencyDefault={this.props.currencyDefault} />
      </>
    );
  }
}

export default Navbar;
