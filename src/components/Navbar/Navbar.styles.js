import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 6rem 0.8rem 4.3rem;
  background: rgb(25, 27, 31);
  border-radius: 7px;
`;

export const StyledMenuPortfolio = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  color: white;
`;

export const StyledMenuCoins = styled(Link)`
  background: var(--light-grey);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
`;
