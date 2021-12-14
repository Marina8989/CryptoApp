import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import {
  StyledMenuCurrency,
  StyledMenuCurrencyH4,
  StyledButton,
} from "./NavbarCurrency.styles";

function NavbarCurrency(props){
  const [isVisible, setIsVisible] = useState(false);
  const [currencyList, setCurrencyList] = useState(props.currencyList);
  // state = {
  //   isVisible: false,
  //   currencyList: this.props.currencyList,
  // };

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleCoinCurrency = (el) => {
    setIsVisible(false);
    props.handleCoinCurrency(el);
  };
    return (
      <StyledMenuCurrency>
        <StyledMenuCurrencyH4 onClick={handleClick}>
          {props.currencyDefault}
          <MdArrowDropDown className="menu-icon-arrow" />
        </StyledMenuCurrencyH4>
        {isVisible && (
          <>
            {currencyList.map((item, index) => (
              <StyledButton
                onClick={() => handleCoinCurrency(item)}
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


export default NavbarCurrency;






















// import React from "react";
// import { MdArrowDropDown } from "react-icons/md";
// import {
//   StyledMenuCurrency,
//   StyledMenuCurrencyH4,
//   StyledButton,
// } from "./NavbarCurrency.styles";

// class NavbarCurrency extends React.Component {
//   state = {
//     isVisible: false,
//     currencyList: this.props.currencyList,
//   };

//   handleClick = () => {
//     this.setState({ isVisible: true });
//   };

//   handleCoinCurrency = (el) => {
//     this.setState({ isVisible: false });
//     this.props.handleCoinCurrency(el);
//   };
//   render() {
//     return (
//       <StyledMenuCurrency>
//         <StyledMenuCurrencyH4 onClick={this.handleClick}>
//           {this.props.currencyDefault}
//           <MdArrowDropDown className="menu-icon-arrow" />
//         </StyledMenuCurrencyH4>
//         {this.state.isVisible && (
//           <>
//             {this.state.currencyList.map((item, index) => (
//               <StyledButton
//                 onClick={() => this.handleCoinCurrency(item)}
//                 key={index}
//               >
//                 {item.toUpperCase()}
//               </StyledButton>
//             ))}
//           </>
//         )}
//       </StyledMenuCurrency>
//     );
//   }
// }

// export default NavbarCurrency;
