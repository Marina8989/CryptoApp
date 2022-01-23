import React, { useState } from "react";
import { connect } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import {
  MenuCurrency,
  MenuCurrencyH4,
  StyledButton,
} from "./NavbarCurrency.styles";
import { findItem } from "store/mainApp/mainAppAction.js";

function NavbarCurrency(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleCoinCurrency = (el) => {
    setIsVisible(false);
    props.findItem(el);
  };
  return (
    <MenuCurrency>
      <MenuCurrencyH4 onClick={handleClick}>
        {props.currencyDefault}
        <MdArrowDropDown className="menu-icon-arrow" />
      </MenuCurrencyH4>
      {isVisible && (
        <>
          {props.currencyList.map((item, index) => (
            <StyledButton onClick={() => handleCoinCurrency(item)} key={index}>
              {item.toUpperCase()}
            </StyledButton>
          ))}
        </>
      )}
    </MenuCurrency>
  );
}
const mapStateToProps = (state) => ({
  currencyList: state.mainApp.currencyList,
  currencyDefault: state.mainApp.currencyDefault,
});

const mapDispatchToProps = {
  findItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCurrency);
