import React from "react";
import { debounce } from "lodash";
import axios from "axios";
import { AddAsset } from "components";
import {
  StyledDiv,
  StyledModalSection,
  StyledModalCoin,
  StyledModalInputText,
  StyledModalImg,
  StyledModalBtn,
  StyledModalBtnClose,
  StyledModalBtnSave,
  StyledDropdownModal,
  StyledDropdownModalButton,
  StyledContainer,
  StyledTextDisplay,
  StyledDisplayInfoContainer,
  StyledCoinInfoDisplay,
  StyledDataDisplay,
  StyledDisplayMarketPrice,
  StyledH5,
  StyledSpan,
  StyledDivWrap,
  StyledH2,
  StyledH5Wrap,
  StyledH4Wrap,
} from "./Portfolio.styles";
import "../../index.css";

class App extends React.Component {
  state = {
    searchValue: "",
    searchNumber: "",
    searchDate: "",
    coinNames: [],
    coin: null,
    isVisible: false,
  };

  getCoinNames = async (val) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${val}`
      );
      this.setState({ coinNames: data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
    debounce(this.getCoinNames, 2000)(e.target.value);
  };
  handleChangeNumber = (e) => {
    this.setState({ searchNumber: e.target.value });
  };
  handleChangeDate = (e) => {
    this.setState({ searchDate: e.target.value });
  };

  getCoinInfo = async (val) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${val}`
      );
      this.setState({ coin: data, coinNames: [], searchValue: val });
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (item) => {
    this.setState({ coinNames: [], searchValue: item });
  };

  handleAssetInfo = () => {
    this.getCoinInfo(this.state.searchValue);
    this.setState({ isVisible: false });
  };

  handleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <StyledDivWrap>
        <AddAsset handleVisibility={this.handleVisibility} />
        {this.state.isVisible && (
          <StyledDiv>
            <StyledH2>Select Coins</StyledH2>
            <StyledModalSection>
              <StyledModalCoin>
                <StyledModalImg
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png"
                  alt="logo"
                />
                <StyledH5Wrap>Bitcoin (BTC)</StyledH5Wrap>
              </StyledModalCoin>

              <StyledDivWrap>
                <StyledModalInputText
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Select Coins"
                  className="one"
                />
                <br />
                <StyledModalInputText
                  value={this.state.searchNumber}
                  onChange={this.handleChangeNumber}
                  type="number"
                  placeholder="Purchased Amount"
                />
                <br />
                <StyledModalInputText
                  value={this.state.searchDate}
                  onChange={this.handleChangeDate}
                  type="date"
                  placeholder="Purchased Date"
                />
                <br />
              </StyledDivWrap>
            </StyledModalSection>
            <>
              <StyledModalBtn>
                <StyledModalBtnClose onClick={this.handleClose}>
                  Close
                </StyledModalBtnClose>
                <StyledModalBtnSave onClick={this.handleAssetInfo}>
                  Save and Continue
                </StyledModalBtnSave>
              </StyledModalBtn>
            </>
          </StyledDiv>
        )}

        <>
          <StyledDropdownModal>
            {this.state.coinNames.map((coin) => (
              <StyledDivWrap>
                <StyledDropdownModalButton
                  onClick={() => this.handleClick(coin.id)}
                  key={coin.id}
                >
                  {coin.name}
                </StyledDropdownModalButton>
                <br />
                <br />
              </StyledDivWrap>
            ))}
          </StyledDropdownModal>
          <>
            {this.state.coin && (
              <StyledContainer>
                <StyledTextDisplay>Your statistics</StyledTextDisplay>
                <StyledDisplayInfoContainer>
                  <StyledCoinInfoDisplay>
                    <StyledModalImg src={this.state.coin.image.small} />
                    <StyledH5Wrap>
                      {this.state.coin.name} (
                      {this.state.coin.symbol.toUpperCase()})
                    </StyledH5Wrap>
                  </StyledCoinInfoDisplay>

                  <StyledDisplayMarketPrice>
                    <StyledDivWrap>
                      <StyledH4Wrap>Market price</StyledH4Wrap>
                      <StyledDataDisplay>
                        <StyledH5>
                          Current price:{" "}
                          <StyledSpan>
                            $
                            {(
                              this.state.coin.market_data.current_price[
                                this.props.currencyDefault.toLowerCase()
                              ] / 1000
                            ).toFixed(2)}
                          </StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Price change 24h:{" "}
                          <StyledSpan>
                            {(
                              this.state.coin.market_data.price_change_24h /
                              1000000
                            ).toFixed(2)}
                            %
                          </StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Market cap vs Volume:{" "}
                          <StyledSpan>
                            {(
                              this.state.coin.market_data.market_cap[
                                this.props.currencyDefault.toLowerCase()
                              ] /
                                100000000000 -
                              this.state.coin.market_data.current_price[
                                this.props.currencyDefault.toLowerCase()
                              ] /
                                100000000000
                            ).toFixed(2)}
                            %
                          </StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Circ supply vs Max supply:{" "}
                          <StyledSpan>
                            $
                            {(
                              this.state.coin.market_data.max_supply / 10000 -
                              this.state.coin.market_data.circulating_supply /
                                10000
                            ).toFixed(2)}
                          </StyledSpan>
                        </StyledH5>
                      </StyledDataDisplay>
                    </StyledDivWrap>

                    <StyledDivWrap>
                      <StyledH4Wrap>Your coin</StyledH4Wrap>
                      <StyledDataDisplay>
                        <StyledH5>
                          Current amount:{" "}
                          <StyledSpan>
                            {this.state.searchNumber <= 1
                              ? 1
                              : this.state.searchNumber}
                          </StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Amount Value:{" "}
                          <StyledSpan>
                            $
                            {(this.state.searchNumber <= 1
                              ? 1
                              : this.state.searchNumber) *
                              (
                                this.state.coin.market_data.current_price[
                                  this.props.currencyDefault.toLowerCase()
                                ] / 1000
                              ).toFixed(2)}
                          </StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Price change since purchase:{" "}
                          <StyledSpan>no data</StyledSpan>
                        </StyledH5>
                        <StyledH5>
                          Purchased date:{" "}
                          <StyledSpan>{this.state.searchDate}</StyledSpan>
                        </StyledH5>
                      </StyledDataDisplay>
                    </StyledDivWrap>
                  </StyledDisplayMarketPrice>
                </StyledDisplayInfoContainer>
              </StyledContainer>
            )}
          </>
        </>
      </StyledDivWrap>
    );
  }
}

export default App;
