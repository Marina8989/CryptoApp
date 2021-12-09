import React from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import {
  StyledInput,
  StyledForm,
  StyledDiv,
  StyledH5,
} from "./NavbbarInput.styles";

class NavbarInput extends React.Component {
  state = {
    searchTerm: "",
    list: [],
    isVisible: false,
  };
  getCoinName = async (coinName) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${coinName}`
      );
      this.setState({ list: data, isVisible: true });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    debounce(this.getCoinName, 2000)(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleLinkChange = () => {
    this.setState({ searchTerm: "", isVisible: false });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({ list: [] });
    }
  }

  render() {
    return (
      <StyledDiv>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </StyledForm>

        <StyledDiv>
          {this.state.isVisible && (
            <>
              {this.state.list.map((item) => (
                <Link
                  to={`/coinPage/${item.id}`}
                  list={this.state.list}
                  onClick={this.handleLinkChange}
                >
                  <StyledH5 key={item.id}>{item.name}</StyledH5>
                </Link>
              ))}
            </>
          )}
        </StyledDiv>
      </StyledDiv>
    );
  }
}

export default NavbarInput;
