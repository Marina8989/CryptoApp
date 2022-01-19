import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { throttle } from "lodash";
import { Link } from "react-router-dom";
import {
  StyledInput,
  StyledForm,
  StyledDiv,
  StyledH5,
} from "./NavbbarInput.styles";
import { getCoinName, resetList, resetVisibility } from "../../store/navSearch/navSearchAction";

function NavbarInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const prevSearchTermRef = useRef();
  //const prevSearchTerm = prevSearchTermRef.current;

  const throttleRef = useRef(throttle(props.getCoinName, 1000));
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    throttleRef.current(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLinkChange = () => {
    setSearchTerm("");
    props.resetVisibility();
  };
  useEffect(() => {
    prevSearchTermRef.current = searchTerm;
  }, [searchTerm]);

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </StyledForm>

      <StyledDiv>
        {props.isListVisible && (
          <>
            {props.list.map((item) => (
              <Link
                to={`/coinPage/${item.id}`}
                list={props.list}
                onClick={handleLinkChange}
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

const mapStateToProps = (state) => ({
  list: state.navSearch.list,
  isListVisible: state.navSearch.isListVisible
})
const mapDispatchToProps = {
  getCoinName,
  resetList,
  resetVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarInput);
