import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { FaAdjust } from "react-icons/fa";
import { StyledDiv } from "./NavbarHeader.styles";

function NavbarHeader() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <StyledDiv>
      <StyledDiv className="navbar">
        <Navbar />
        <FaAdjust onClick={handleSwitch} className="menu-icon" />
      </StyledDiv>
    </StyledDiv>
  );
}

export default NavbarHeader;

// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import { FaAdjust } from "react-icons/fa";
// import { StyledDiv } from "./NavbarHeader.styles";

// class NavbarHeader extends React.Component {
//   state = {
//     on: false,
//   };

//   handleSwitch = () => {
//     this.setState({ on: !this.state.on });
//   };
//   render() {
//     return (
//       <StyledDiv>
//         <StyledDiv className="navbar">
//           <Navbar />
//           <FaAdjust onClick={this.handleSwitch} className="menu-icon" />
//         </StyledDiv>
//       </StyledDiv>
//     );
//   }
// }

// export default NavbarHeader;
