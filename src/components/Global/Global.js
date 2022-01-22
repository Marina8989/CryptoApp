import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RiArrowUpSFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  StyledGlobal,
  StyledGlobalContainer,
  StyledInputRangeGlobal,
  StyledH4,
} from "./Global.styles";
import { getGlobalInfo } from "store/global/globalAction.js";

function modifyNumber(num1) {
  return (num1 / 100000000000).toFixed(2);
}

function Global(props) {
  useEffect(() => {
    props.getGlobalInfo();
  }, []);
  return (
    <StyledGlobalContainer>
      {props.global.map((item, index) => {
        return (
          <StyledGlobal key={index}>
            <StyledH4>Coins: {item.data.active_cryptocurrencies}</StyledH4>
            <StyledH4>Exchange: {item.data.markets}</StyledH4>
            <StyledH4>
              <BsDot className="dot" />
              {modifyNumber(
                item.data.total_volume[props.currencyDefault.toLowerCase()]
              )}
              T <RiArrowUpSFill className="arrow-up" />
            </StyledH4>
            <StyledH4>
              <BsDot className="dot" />
              {modifyNumber(
                item.data.total_market_cap[props.currencyDefault.toLowerCase()]
              )}
              B <RiArrowUpSFill className="arrow-up" />
            </StyledH4>
            <StyledH4>
              <FaBitcoin className="bicoin-icon" />{" "}
              {item.data.market_cap_percentage.btc.toFixed(2)}%{" "}
              <StyledInputRangeGlobal type="range" />
            </StyledH4>
            <StyledH4>
              <FaEthereum className="ethereum-icon" />{" "}
              {item.data.market_cap_percentage.eth.toFixed(2)}%{" "}
              <StyledInputRangeGlobal type="range" />
            </StyledH4>
          </StyledGlobal>
        );
      })}
    </StyledGlobalContainer>
  );
}

const mapStateToProps = (state) => ({
  global: state.global.globalList,
});
const mapDispatchToProps = {
  getGlobalInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Global);
