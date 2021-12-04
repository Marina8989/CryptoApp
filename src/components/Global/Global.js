import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  StyledGlobal,
  StyledGlobalContainer,
  StyledInputRangeGlobal,
} from "./Global.styles";
import axios from "axios";

class Global extends React.Component {
  state = {
    globalList: [],
  };

  getGlobalInfo = async () => {
    const { data } = await axios(`${process.env.REACT_APP_GLOBAL}`);
    const newList = [...this.state.globalList, data];
    this.setState({ globalList: newList });
  };
  componentDidMount() {
    this.getGlobalInfo();
  }
  render() {
    return (
      <StyledGlobalContainer>
        {this.state.globalList.map((item, index) => {
          return (
            <StyledGlobal key={index}>
              <h6>Coins: {item.data.active_cryptocurrencies}</h6>
              <h6>Exchange: {item.data.markets}</h6>
              <h6>
                <BsDot className="dot" />
                {(
                  item.data.total_volume[
                    this.props.currencyDefault.toLowerCase()
                  ] / 10000000000
                ).toFixed(2)}
                T <RiArrowUpSFill className="arrow-up" />
              </h6>
              <h6>
                <BsDot className="dot" />
                {(
                  item.data.total_volume[
                    this.props.currencyDefault.toLowerCase()
                  ] / 100000000000
                ).toFixed(2)}
                B <RiArrowUpSFill className="arrow-up" />
              </h6>
              <h6>
                <FaBitcoin className="bicoin-icon" />{" "}
                {item.data.market_cap_percentage.btc.toFixed(2)}%{" "}
                <StyledInputRangeGlobal type="range" />
              </h6>
              <h6>
                <FaEthereum className="ethereum-icon" />{" "}
                {item.data.market_cap_percentage.eth.toFixed(2)}%{" "}
                <StyledInputRangeGlobal type="range" />
              </h6>
            </StyledGlobal>
          );
        })}
      </StyledGlobalContainer>
    );
  }
}

export default Global;
