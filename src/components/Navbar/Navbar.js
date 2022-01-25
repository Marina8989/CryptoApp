import React from "react";
import NavbarInput from "../NavbarInput/NavbarInput.js";
import NavbarCurrency from "../NavbarCurrency/NavbarCurrency.js";
import {
  StyledMenu,
  MenuPortfolio,
  MenuCoins,
  StyledDiv,
} from "./Navbar.styles";
import Global from "../Global/Global.js";

function Navbar(props) {
  return (
    <>
      <StyledMenu>
        <StyledDiv className="menu-links">
          <MenuCoins to="/">Coins</MenuCoins>
          <MenuPortfolio to="/portfolio">Portfolio</MenuPortfolio>
        </StyledDiv>
        <NavbarInput />
        <NavbarCurrency
          handleClick={props.handleClick}
          handleCoinCurrency={props.handleCoinCurrency}
          currencyDefault={props.currencyDefault}
          currencyList={props.currencyList}
        />
      </StyledMenu>
      <Global currencyDefault={props.currencyDefault} />
    </>
  );
}

export default Navbar;
