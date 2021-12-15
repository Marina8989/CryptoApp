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
