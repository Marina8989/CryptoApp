import React from "react";
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

class CoinPage extends React.Component {
  state = {
    coin: null,
    isVisible: false,
  };

  getCoinData = async (val) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${val}?localization=false`
      );
      this.setState({ coin: data, isVisible: true });
    } catch (err) {
      console.log(err);
      this.setState({ isVisible: false });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getCoinData(this.props.match.params.id);
    }
  }
  componentDidMount() {
    this.getCoinData(this.props.match.params.id);
  }
  render() {
    return (
      <StyledOuterDiv>
        <StyledH3>Your summary</StyledH3>
        {this.state.isVisible && (
          <StyledDivFlex>
            <StyledDivWrap>
              <StyledDiv>
                <StyledImg src={this.state.coin.image.small} />
                <StyledH3Text>
                  {this.state.coin.name} ({this.state.coin.symbol.toUpperCase()}
                  )
                </StyledH3Text>
              </StyledDiv>

              <StyledDivWeb>
                <StyledPar>
                  <StyledIcon /> {this.state.coin.links.homepage[0]}
                </StyledPar>
              </StyledDivWeb>
            </StyledDivWrap>
            <StyledDivWrap>
              <StyledDivProfit>
                <StyledH3Price>
                  $
                  {this.state.coin.market_data.current_price.usd.toFixed(2) /
                    1000}{" "}
                  <StyledSpan
                    className={
                      this.state.coin.market_data
                        .price_change_percentage_24h_in_currency.usd < 0
                        ? "red"
                        : "green"
                    }
                  >
                    {this.state.coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
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
                        ${this.state.coin.market_data.ath.usd.toFixed(2) / 1000}
                      </StyledSpan>
                    </StyledH4>
                    <StyledH6Day>{today}</StyledH6Day>
                  </StyledDivATH>
                  <StyledDivATL>
                    <StyledH4>
                      <RiArrowDownSFill className="red" /> All Time Low:{" "}
                      <StyledSpan>
                        ${this.state.coin.market_data.atl.usd}
                      </StyledSpan>
                    </StyledH4>
                    <StyledH6Day>{today}</StyledH6Day>
                  </StyledDivATL>
                </StyledDivWrap>
              </StyledDivProfit>
            </StyledDivWrap>
            <StyledThridDiv>
              <StyledH4>
                <StyledPlusIcon /> Market Cap: $
                {(
                  this.state.coin.market_data.market_cap.usd / 1000000000
                ).toFixed(2)}{" "}
                B
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Fully Diluted Valuation: $
                {(
                  this.state.coin.market_data.fully_diluted_valuation.usd /
                  1000000000000
                ).toFixed(2)}{" "}
                T
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Volume 24h: $
                {(
                  this.state.coin.market_data.total_volume.usd / 10000000000
                ).toFixed(2)}{" "}
                B
              </StyledH4>
              <StyledH4>
                <StyledPlusIcon /> Volume/Market: $
                {(
                  this.state.coin.market_data.market_cap.usd / 1000000000
                ).toFixed(2) -
                  (
                    this.state.coin.market_data.total_volume.usd / 10000000000
                  ).toFixed(2)}{" "}
                T
              </StyledH4>
              <StyledDivSeparate>
                <StyledH4>
                  <StyledPlusIcon /> Total Volume: $
                  {(
                    this.state.coin.market_data.total_volume.btc / 10000
                  ).toFixed(2)}{" "}
                  BTC
                </StyledH4>
                <StyledH4>
                  <StyledPlusIcon /> Circulating Supply: $
                  {this.state.coin.market_data.circulating_supply} BTC
                </StyledH4>
                <StyledH4>
                  <StyledPlusIcon /> Max Supply: $
                  {this.state.coin.market_data.circulating_supply} BTC
                </StyledH4>
                <StyledInput type="range" />
              </StyledDivSeparate>
            </StyledThridDiv>
          </StyledDivFlex>
        )}

        <StyledH3>Description</StyledH3>
        {this.state.isVisible && (
          <StyledDescription>
            {this.state.coin.description.en}
          </StyledDescription>
        )}
      </StyledOuterDiv>
    );
  }
}

export default CoinPage;
