import React, { useState } from "react";
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

function Portfolio(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [coinNames, setCoinNames] = useState([]);
  const [coin, setCoin] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const getCoinNames = async (val) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${val}`
      );
      setCoinNames(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounce(getCoinNames, 2000)(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleChangeDate = (e) => {
    setSearchDate(e.target.value);
  };

  const getCoinInfo = async (val) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${val}`
      );
      setCoin(data);
      setCoinNames([]);
      setSearchValue(val);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (item) => {
    setCoinNames([]);
    setSearchValue(item);
  };

  const handleAssetInfo = () => {
    getCoinInfo(searchValue);
    setIsVisible(false);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <StyledDivWrap>
      <AddAsset handleVisibility={handleVisibility} />
      {isVisible && (
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
                value={searchValue}
                onChange={handleChange}
                type="text"
                placeholder="Select Coins"
                className="one"
              />
              <br />
              <StyledModalInputText
                value={searchNumber}
                onChange={handleChangeNumber}
                type="number"
                placeholder="Purchased Amount"
              />
              <br />
              <StyledModalInputText
                value={searchDate}
                onChange={handleChangeDate}
                type="date"
                placeholder="Purchased Date"
              />
              <br />
            </StyledDivWrap>
          </StyledModalSection>
          <>
            <StyledModalBtn>
              <StyledModalBtnClose onClick={handleClose}>
                Close
              </StyledModalBtnClose>
              <StyledModalBtnSave onClick={handleAssetInfo}>
                Save and Continue
              </StyledModalBtnSave>
            </StyledModalBtn>
          </>
        </StyledDiv>
      )}

      <>
        <StyledDropdownModal>
          {coinNames.map((coin) => (
            <StyledDivWrap>
              <StyledDropdownModalButton
                onClick={() => handleClick(coin.id)}
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
          {coin && (
            <StyledContainer>
              <StyledTextDisplay>Your statistics</StyledTextDisplay>
              <StyledDisplayInfoContainer>
                <StyledCoinInfoDisplay>
                  <StyledModalImg src={coin.image.small} />
                  <StyledH5Wrap>
                    {coin.name} ({coin.symbol.toUpperCase()})
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
                            coin.market_data.current_price[
                              props.currencyDefault.toLowerCase()
                            ] / 1000
                          ).toFixed(2)}
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Price change 24h:{" "}
                        <StyledSpan>
                          {(
                            coin.market_data.price_change_24h / 1000000
                          ).toFixed(2)}
                          %
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Market cap vs Volume:{" "}
                        <StyledSpan>
                          {(
                            coin.market_data.market_cap[
                              props.currencyDefault.toLowerCase()
                            ] /
                              100000000000 -
                            coin.market_data.current_price[
                              props.currencyDefault.toLowerCase()
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
                            coin.market_data.max_supply / 10000 -
                            coin.market_data.circulating_supply / 10000
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
                          {searchNumber <= 1 ? 1 : searchNumber}
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Amount Value:{" "}
                        <StyledSpan>
                          $
                          {(searchNumber <= 1 ? 1 : searchNumber) *
                            (
                              coin.market_data.current_price[
                                props.currencyDefault.toLowerCase()
                              ] / 1000
                            ).toFixed(2)}
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Price change since purchase:{" "}
                        <StyledSpan>no data</StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Purchased date: <StyledSpan>{searchDate}</StyledSpan>
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

export default Portfolio;
