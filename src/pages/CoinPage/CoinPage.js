import React, { useState, useEffect } from "react";
import axios from "axios";
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

const today = new Date().toString();

function CoinPage(props) {
  const [coin, setCoin] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const getCoinData = async (val) => {
    console.log("val", val);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${val}?localization=false`
      );
      setCoin(data);
      setIsVisible(true);
    } catch (err) {
      console.log(err);
      setIsVisible(false);
    }
  };
  
  useEffect(() => {
    getCoinData(props.match.params.id)
  }, [props.match.params.id]);

  return (
    <StyledOuterDiv>
      <StyledH3>Your summary</StyledH3>
      {isVisible && (
        <StyledDivFlex>
          <StyledDivWrap>
            <StyledDiv>
              <StyledImg src={coin.image.small} />
              <StyledH3Text>
                {coin.name} ({coin.symbol.toUpperCase()})
              </StyledH3Text>
            </StyledDiv>

            <StyledDivWeb>
              <StyledPar>
                <StyledIcon /> {coin.links.homepage[0]}
              </StyledPar>
            </StyledDivWeb>
          </StyledDivWrap>
          <StyledDivWrap>
            <StyledDivProfit>
              <StyledH3Price>
                ${coin.market_data.current_price.usd.toFixed(2) / 1000}{" "}
                <StyledSpan
                  className={
                    coin.market_data.price_change_percentage_24h_in_currency
                      .usd < 0
                      ? "red"
                      : "green"
                  }
                >
                  {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
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
                      ${coin.market_data.ath.usd.toFixed(2) / 1000}
                    </StyledSpan>
                  </StyledH4>
                  <StyledH6Day>{today}</StyledH6Day>
                </StyledDivATH>
                <StyledDivATL>
                  <StyledH4>
                    <RiArrowDownSFill className="red" /> All Time Low:{" "}
                    <StyledSpan>${coin.market_data.atl.usd}</StyledSpan>
                  </StyledH4>
                  <StyledH6Day>{today}</StyledH6Day>
                </StyledDivATL>
              </StyledDivWrap>
            </StyledDivProfit>
          </StyledDivWrap>
          <StyledThridDiv>
            <StyledH4>
              <StyledPlusIcon /> Market Cap: $
              {(coin.market_data.market_cap.usd / 1000000000).toFixed(2)} B
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Fully Diluted Valuation: $
              {(
                coin.market_data.fully_diluted_valuation.usd / 1000000000000
              ).toFixed(2)}{" "}
              T
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Volume 24h: $
              {(coin.market_data.total_volume.usd / 10000000000).toFixed(2)} B
            </StyledH4>
            <StyledH4>
              <StyledPlusIcon /> Volume/Market: $
              {(coin.market_data.market_cap.usd / 1000000000).toFixed(2) -
                (coin.market_data.total_volume.usd / 10000000000).toFixed(
                  2
                )}{" "}
              T
            </StyledH4>
            <StyledDivSeparate>
              <StyledH4>
                <StyledPlusIcon /> Total Volume: $
                {(coin.market_data.total_volume.btc / 10000).toFixed(2)} BTC
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Circulating Supply: $
                {coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Max Supply: $
                {coin.market_data.circulating_supply} BTC
              </StyledH4>
              <StyledInput type="range" />
            </StyledDivSeparate>
          </StyledThridDiv>
        </StyledDivFlex>
      )}

      <StyledH3>Description</StyledH3>
      {isVisible && (
        <StyledDescription>{coin.description.en}</StyledDescription>
      )}
    </StyledOuterDiv>
  );
}

export default CoinPage;
