import React from 'react';
import {MdArrowDropDown} from 'react-icons/md';


class NavbarCurrency extends React.Component{
    render() {
        return(
           <div className='menu-currency'>
             <h4>USD <MdArrowDropDown className='menu-icon-arrow'/></h4>
           </div>
        )
    }
}

export default NavbarCurrency