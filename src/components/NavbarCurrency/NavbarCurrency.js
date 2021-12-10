import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import {
  StyledMenuCurrency,
  StyledMenuCurrencyH4,
  StyledButton,
} from "./NavbarCurrency.styles";

class NavbarCurrency extends React.Component {
  state = {
    isVisible: false,
    currencyList: this.props.currencyList,
  };

  handleClick = () => {
    this.setState({ isVisible: true });
  };

  handleCoinCurrency = (el) => {
    this.setState({ isVisible: false });
    this.props.handleCoinCurrency(el);
  };
  render() {
    return (
      <StyledMenuCurrency>
        <StyledMenuCurrencyH4 onClick={this.handleClick}>
          {this.props.currencyDefault}
          <MdArrowDropDown className="menu-icon-arrow" />
        </StyledMenuCurrencyH4>
        {this.state.isVisible && (
          <>
            {this.state.currencyList.map((item, index) => (
              <StyledButton
                onClick={() => this.handleCoinCurrency(item)}
                key={index}
              >
                {item.toUpperCase()}
              </StyledButton>
            ))}
          </>
        )}
      </StyledMenuCurrency>
    );
  }
}

export default NavbarCurrency;
