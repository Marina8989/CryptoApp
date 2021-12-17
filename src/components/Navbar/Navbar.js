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

function Navbar(props){
    return (
      <>
        <StyledMenu>
          <StyledDiv className="menu-links">
            <StyledMenuCoins to="/">Coins</StyledMenuCoins>
            <StyledMenuPortfolio to="/portfolio">Portfolio</StyledMenuPortfolio>
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
