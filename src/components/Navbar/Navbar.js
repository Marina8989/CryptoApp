import React from 'react';
import {Link} from 'react-router-dom';
import NavbarInput from '../NavbarInput/NavbarInput.js';
import NavbarCurrency from '../NavbarCurrency/NavbarCurrency.js';
import {StyledMenu, StyledMenuPortfolio, StyledMenuCoins} from './Navbar.styles';
import Global from '../Global/Global.js';
import axios from 'axios'

class Navbar extends React.Component{
   state={
      globalList: [],
   }
getGlobalInfo = async() => {
   const {data} = await axios('https://api.coingecko.com/api/v3/global');
   const newList = [...this.state.globalList, data]
   this.setState({globalList: newList});
}
componentDidMount() {
   this.getGlobalInfo()
}
render(){
   return(
     <>
      <StyledMenu>
         <div className='menu-links'>
            <StyledMenuCoins to='/' >Coins</StyledMenuCoins>
            <StyledMenuPortfolio to='/portfolio'>Portfolio</StyledMenuPortfolio>
         </div>
            <NavbarInput />
            <NavbarCurrency />
      </StyledMenu>
      <Global coinList={this.state.coinList}/>
    </>
   )}
}

export default Navbar;