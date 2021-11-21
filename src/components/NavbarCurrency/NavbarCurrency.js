import React from 'react';
import {MdArrowDropDown} from 'react-icons/md';
import {StyledMenuCurrency, StyledMenuCurrencyH4} from './NavbarCurrency.styles';


class NavbarCurrency extends React.Component{
  render() {
    return(
      <StyledMenuCurrency>
        <StyledMenuCurrencyH4>USD <MdArrowDropDown className='menu-icon-arrow'/></StyledMenuCurrencyH4>
      </StyledMenuCurrency>
    )}
}

export default NavbarCurrency