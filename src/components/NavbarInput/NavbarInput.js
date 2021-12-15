import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import {
  StyledInput,
  StyledForm,
  StyledDiv,
  StyledH5,
} from "./NavbbarInput.styles";

function NavbarInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const prevSearchTermRef = useRef();
  const prevSerachTerm = prevSearchTermRef.current;

  const getCoinName = async (coinName) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${coinName}`
      );
      setList(data);
      setIsVisible(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    debounce(getCoinName, 2000)(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLinkChange = () => {
    setSearchTerm("");
    setIsVisible(false);
  };
  useEffect(() => {
    prevSearchTermRef.current = searchTerm;
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== prevSerachTerm) {
      setList([]);
    }
  }, []);

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
        {isVisible && (
          <>
            {list.map((item) => (
              <Link
                to={`/coinPage/${item.id}`}
                list={list}
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

export default NavbarInput;
