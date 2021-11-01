import React from 'react';
import NavbarInput from '../NavbarInput/NavbarInput.js';
import NavbarCurrency from '../NavbarCurrency/NavbarCurrency.js';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    render(){
      return(
        <div className='menu'>
          <div className='menu-links'>
             <Link to='/' className='menu-coins'>Coins</Link>
             <Link to='/portfolio' className='menu-portfolio'>Portfolio</Link>
          </div>
             <NavbarInput />
             <NavbarCurrency />
        </div>
     )
    }
}

export default Navbar;