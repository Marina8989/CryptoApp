import React, { useState } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { AddAsset } from "components";
import {
  getCoinNames,
  getCoinInfo,
  handleCoinNames,
} from "store/portfolio/portfolioAction.js";
import {
  StyledDiv,
  ModalSection,
  ModalCoin,
  ModalInputText,
  ModalImg,
  ModalBtn,
  ModalBtnClose,
  ModalBtnSave,
  DropdownModal,
  DropdownModalButton,
  StyledContainer,
  TextDisplay,
  DisplayInfoContainer,
  CoinInfoDisplay,
  DataDisplay,
  DisplayMarketPrice,
  StyledH5,
  StyledSpan,
  DivWrap,
  StyledH2,
  StyledH5Wrap,
  StyledH4Wrap,
} from "./Portfolio.styles";


function Portfolio(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounce(props.getCoinNames, 2000)(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleChangeDate = (e) => {
    setSearchDate(e.target.value);
  };

  const handleClick = (searchValue) => {
    props.handleCoinNames();
    setSearchValue(searchValue);
  };
  const handleAssetInfo = () => {
    props.getCoinInfo(searchValue);
    setIsVisible(false);
  };
  const handleVisibility = () => {
    setIsVisible(!isVisible);
    setSearchValue("");
    setSearchNumber("");
    setSearchDate("");
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <DivWrap>
      <AddAsset handleVisibility={handleVisibility} />
      {isVisible && (
        <StyledDiv>
          <StyledH2>Select Coins</StyledH2>
          <ModalSection>
            <ModalCoin>
              <ModalImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png"
                alt="logo"
              />
              <StyledH5Wrap>Bitcoin (BTC)</StyledH5Wrap>
            </ModalCoin>

            <DivWrap>
              <ModalInputText
                value={searchValue}
                onChange={handleChange}
                type="text"
                placeholder="Select Coins"
                className="one"
              />
              <br />
              <ModalInputText
                value={searchNumber}
                onChange={handleChangeNumber}
                type="number"
                placeholder="Purchased Amount"
              />
              <br />
              <ModalInputText
                value={searchDate}
                onChange={handleChangeDate}
                type="date"
                placeholder="Purchased Date"
              />
              <br />
            </DivWrap>
          </ModalSection>
          <>
            <ModalBtn>
              <ModalBtnClose onClick={handleClose}>Close</ModalBtnClose>
              <ModalBtnSave onClick={handleAssetInfo}>
                Save and Continue
              </ModalBtnSave>
            </ModalBtn>
          </>
        </StyledDiv>
      )}

      <>
        <DropdownModal>
          {props.coinNames.map((coin) => (
            <DivWrap>
              <DropdownModalButton
                onClick={() => handleClick(coin.id)}
                key={coin.id}
              >
                {coin.name}
              </DropdownModalButton>
              <br />
              <br />
            </DivWrap>
          ))}
        </DropdownModal>
        <>
          {props.coin && (
            <StyledContainer>
              <TextDisplay>Your statistics</TextDisplay>
              <DisplayInfoContainer>
                <CoinInfoDisplay>
                  <ModalImg src={props.coin.image.small} />
                  <StyledH5Wrap>
                    {props.coin.name} ({props.coin.symbol.toUpperCase()})
                  </StyledH5Wrap>
                </CoinInfoDisplay>

                <DisplayMarketPrice>
                  <DivWrap>
                    <StyledH4Wrap>Market price</StyledH4Wrap>
                    <DataDisplay>
                      <StyledH5>
                        Current price:{" "}
                        <StyledSpan>
                          $
                          {(
                            props.coin.market_data.current_price[
                              props.currencyDefault.toLowerCase()
                            ] / 1000
                          ).toFixed(2)}
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Price change 24h:{" "}
                        <StyledSpan>
                          {(
                            props.coin.market_data.price_change_24h / 1000000
                          ).toFixed(2)}
                          %
                        </StyledSpan>
                      </StyledH5>
                      <StyledH5>
                        Market cap vs Volume:{" "}
                        <StyledSpan>
                          {(
                            props.coin.market_data.market_cap[
                              props.currencyDefault.toLowerCase()
                            ] /
                              100000000000 -
                            props.coin.market_data.current_price[
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
                            props.coin.market_data.max_supply / 10000 -
                            props.coin.market_data.circulating_supply / 10000
                          ).toFixed(2)}
                        </StyledSpan>
                      </StyledH5>
                    </DataDisplay>
                  </DivWrap>

                  <DivWrap>
                    <StyledH4Wrap>Your coin</StyledH4Wrap>
                    <DataDisplay>
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
                              props.coin.market_data.current_price[
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
                    </DataDisplay>
                  </DivWrap>
                </DisplayMarketPrice>
              </DisplayInfoContainer>
            </StyledContainer>
          )}
        </>
      </>
    </DivWrap>
  );
}

const mapStateToProps = (state) => ({
  coinNames: state.portfolio.coinNames,
  coin: state.portfolio.coin,
});

const mapDispatchToProps = {
  getCoinNames,
  getCoinInfo,
  handleCoinNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
