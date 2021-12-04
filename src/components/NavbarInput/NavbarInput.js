import React from "react";
import axios from "axios";
import { debounce } from "lodash";
import { withRouter } from "react-router-dom";
import { StyledInput } from "./NavbbarInput.styles";

class NavbarInput extends React.Component {
  state = {
    searchInput: "",
    coinNames: [],
  };
  getCoinNames = async (val) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${val}`
      );

      this.setState({ coinNames: data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
    debounce(this.getCoinNames, 2000)(e.target.value);
  };

  render() {
    return (
      <div>
        <StyledInput
          type="text"
          placeholder="Search..."
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withRouter(NavbarInput);
