import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {
  StyledDiv,
  DivWeb,
  OuterDiv,
  StyledH3,
  StyledImg,
  H3Text,
  StyledPar,
  StyledIcon,
  DivFlex,
  StyledSpan,
  DivProfit,
  ThridDiv,
  LayerIcon,
  DivATH,
  DivATL,
  H3Price,
  H6Day,
  PlusIcon,
  DivSeparate,
  StyledInput,
  StyledDescription,
  StyledH4,
  DivWrap,
} from "./CoinPage.styles";
import { getCoinData } from "store/coinPage/coinPageAction.js";

const today = new Date().toString();

function CoinPage(props) {
  useEffect(() => {
    props.getCoinData(props.match.params.id);
  }, [props.match.params.id]);
  return (
    <OuterDiv>
      <StyledH3>Your summary</StyledH3>
      {props.isVisible && (
        <DivFlex>
          <DivWrap>
            <StyledDiv>
              <StyledImg src={props.coin.image.small} />
              <H3Text>
                {props.coin.name} ({props.coin.symbol.toUpperCase()})
              </H3Text>
            </StyledDiv>

            <DivWeb>
              <StyledPar>
                <StyledIcon /> {props.coin.links.homepage[0]}
              </StyledPar>
            </DivWeb>
          </DivWrap>
          <DivWrap>
            <DivProfit>
              <H3Price>
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
              </H3Price>
              <DivWrap>
                <LayerIcon />
              </DivWrap>
              <DivWrap>
                <DivATH>
                  <StyledH4>
                    <RiArrowUpSFill className="green" /> All Time High:{" "}
                    <StyledSpan>
                      ${props.coin.market_data.ath.usd.toFixed(2) / 1000}
                    </StyledSpan>
                  </StyledH4>
                  <H6Day>{today}</H6Day>
                </DivATH>
                <DivATL>
                  <StyledH4>
                    <RiArrowDownSFill className="red" /> All Time Low:{" "}
                    <StyledSpan>${props.coin.market_data.atl.usd}</StyledSpan>
                  </StyledH4>
                  <H6Day>{today}</H6Day>
                </DivATL>
              </DivWrap>
            </DivProfit>
          </DivWrap>
          <ThridDiv>
            <StyledH4>
              <PlusIcon /> Market Cap: $
              {(props.coin.market_data.market_cap.usd / 1000000000).toFixed(2)}{" "}
              B
            </StyledH4>
            <StyledH4>
              <PlusIcon /> Fully Diluted Valuation: $
              {(
                props.coin.market_data.fully_diluted_valuation.usd /
                1000000000000
              ).toFixed(2)}{" "}
              T
            </StyledH4>
            <StyledH4>
              <PlusIcon /> Volume 24h: $
              {(props.coin.market_data.total_volume.usd / 10000000000).toFixed(
                2
              )}{" "}
              B
            </StyledH4>
            <StyledH4>
              <PlusIcon /> Volume/Market: $
              {(props.coin.market_data.market_cap.usd / 1000000000).toFixed(2) -
                (props.coin.market_data.total_volume.usd / 10000000000).toFixed(
                  2
                )}{" "}
              T
            </StyledH4>
            <DivSeparate>
              <StyledH4>
                <PlusIcon /> Total Volume: $
                {(props.coin.market_data.total_volume.btc / 10000).toFixed(2)}{" "}
                BTC
              </StyledH4>
              <StyledH4>
                <PlusIcon /> Circulating Supply: $
                {props.coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledH4>
                <PlusIcon /> Max Supply: $
                {props.coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledInput type="range" />
            </DivSeparate>
          </ThridDiv>
        </DivFlex>
      )}

      <StyledH3>Description</StyledH3>
      {props.isVisible && (
        <StyledDescription>{props.coin.description.en}</StyledDescription>
      )}
    </OuterDiv>
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
