import React from "react";
import NavbarInput from "../NavbarInput/NavbarInput.js";
import NavbarCurrency from "../NavbarCurrency/NavbarCurrency.js";
import {
  StyledMenu,
  StyledMenuPortfolio,
  StyledMenuCoins,
  StyledDiv,
} from "./Navbar.styles";
import Global from "../Global/Global.js";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <StyledMenu>
          <StyledDiv className="menu-links">
            <StyledMenuCoins to="/">Coins</StyledMenuCoins>
            <StyledMenuPortfolio to="/portfolio">Portfolio</StyledMenuPortfolio>
          </StyledDiv>
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
