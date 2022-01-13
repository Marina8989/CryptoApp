import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {
  StyledDiv,
  StyledDivWeb,
  StyledOuterDiv,
  StyledH3,
  StyledImg,
  StyledH3Text,
  StyledPar,
  StyledIcon,
  StyledDivFlex,
  StyledSpan,
  StyledDivProfit,
  StyledThridDiv,
  StyledLayerIcon,
  StyledDivATH,
  StyledDivATL,
  StyledH3Price,
  StyledH6Day,
  StyledPlusIcon,
  StyledDivSeparate,
  StyledInput,
  StyledDescription,
  StyledH4,
  StyledDivWrap,
} from "./CoinPage.styles";
import { getCoinData } from "../../store/coinPage/coinPageAction.js";

const today = new Date().toString();

function CoinPage(props) {
  useEffect(() => {
    props.getCoinData(props.match.params.id);
  }, [props.match.params.id]);
  console.log("coinpage", props.coin);
  console.log("coin page", props.isVisible);
  return (
    <StyledOuterDiv>
      <StyledH3>Your summary</StyledH3>
      {props.isVisible && (
        <StyledDivFlex>
          <StyledDivWrap>
            <StyledDiv>
              <StyledImg src={props.coin.image.small} />
              <StyledH3Text>
                {props.coin.name} ({props.coin.symbol.toUpperCase()})
              </StyledH3Text>
            </StyledDiv>

            <StyledDivWeb>
              <StyledPar>
                <StyledIcon /> {props.coin.links.homepage[0]}
              </StyledPar>
            </StyledDivWeb>
          </StyledDivWrap>
          <StyledDivWrap>
            <StyledDivProfit>
              <StyledH3Price>
                ${props.coin.market_data.current_price.usd.toFixed(2) / 1000}{" "}
                <StyledSpan
                  className={
                    props.coin.market_data
                      .price_change_percentage_24h_in_currency.usd < 0
                      ? "red"
                      : "green"
                  }
                >
                  {props.coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </StyledSpan>
              </StyledH3Price>
              <StyledDivWrap>
                <StyledLayerIcon />
              </StyledDivWrap>
              <StyledDivWrap>
                <StyledDivATH>
                  <StyledH4>
                    <RiArrowUpSFill className="green" /> All Time High:{" "}
                    <StyledSpan>
                      ${props.coin.market_data.ath.usd.toFixed(2) / 1000}
                    </StyledSpan>
                  </StyledH4>
                  <StyledH6Day>{today}</StyledH6Day>
                </StyledDivATH>
                <StyledDivATL>
                  <StyledH4>
                    <RiArrowDownSFill className="red" /> All Time Low:{" "}
                    <StyledSpan>${props.coin.market_data.atl.usd}</StyledSpan>
                  </StyledH4>
                  <StyledH6Day>{today}</StyledH6Day>
                </StyledDivATL>
              </StyledDivWrap>
            </StyledDivProfit>
          </StyledDivWrap>
          <StyledThridDiv>
            <StyledH4>
              <StyledPlusIcon /> Market Cap: $
              {(props.coin.market_data.market_cap.usd / 1000000000).toFixed(2)}{" "}
              B
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Fully Diluted Valuation: $
              {(
                props.coin.market_data.fully_diluted_valuation.usd /
                1000000000000
              ).toFixed(2)}{" "}
              T
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Volume 24h: $
              {(props.coin.market_data.total_volume.usd / 10000000000).toFixed(
                2
              )}{" "}
              B
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Volume/Market: $
              {(props.coin.market_data.market_cap.usd / 1000000000).toFixed(2) -
                (props.coin.market_data.total_volume.usd / 10000000000).toFixed(
                  2
                )}{" "}
              T
            </StyledH4>
            <StyledDivSeparate>
              <StyledH4>
                <StyledPlusIcon /> Total Volume: $
                {(props.coin.market_data.total_volume.btc / 10000).toFixed(2)}{" "}
                BTC
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Circulating Supply: $
                {props.coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Max Supply: $
                {props.coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledInput type="range" />
            </StyledDivSeparate>
          </StyledThridDiv>
        </StyledDivFlex>
      )}

      <StyledH3>Description</StyledH3>
      {props.isVisible && (
        <StyledDescription>{props.coin.description.en}</StyledDescription>
      )}
    </StyledOuterDiv>
  );
}

const mapStateToProps = (state) => ({
  coin: state.coinPage.coin,
  isVisible: state.coinPage.isVisible,
});

const mapDispatchToProps = {
  getCoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
