import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { FaAdjust } from "react-icons/fa";

class NavbarHeader extends React.Component {
  state = {
    on: false,
  };

  handleSwitch = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
          <FaAdjust onClick={this.handleSwitch} className="menu-icon" />
        </div>
      </div>
    );
  }
}

export default NavbarHeader;
