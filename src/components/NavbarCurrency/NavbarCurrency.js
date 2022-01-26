import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import {
  MenuCurrency,
  MenuCurrencyH4,
  StyledButton,
} from "./NavbarCurrency.styles";
import { findItem } from "store/mainApp/mainAppAction.js";

function NavbarCurrency() {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.mainApp.currencyList);
  const currencyDefault = useSelector((state) => state.mainApp.currencyDefault);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleCoinCurrency = (el) => {
    setIsVisible(false);
    dispatch(findItem(el));
  };
  return (
    <MenuCurrency>
      <MenuCurrencyH4 onClick={handleClick}>
        {currencyDefault}
        <MdArrowDropDown className="menu-icon-arrow" />
      </MenuCurrencyH4>
      {isVisible && (
        <>
          {currencyList.map((item, index) => (
            <StyledButton onClick={() => handleCoinCurrency(item)} key={index}>
              {item.toUpperCase()}
            </StyledButton>
          ))}
        </>
      )}
    </MenuCurrency>
  );
}

export default NavbarCurrency;
