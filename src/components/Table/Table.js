import React from "react";
import { connect } from "react-redux";
import { RiArrowDownSFill } from "react-icons/ri";
import Sparkline from "../Sparkline/Sparkline.js";
import {
  TableRow,
  TableRange,
  TableSymbol,
  TableImage,
  StyledTable,
  StyledTHead,
  StyledTr,
  StyledTh,
  StyledTBody,
  StyledInput,
  StyledSpan,
  StyledCurrency,
  CurentPrice,
  StyledPercent,
} from "./Table.styles";

function priceModify(num1, num2, num3) {
  return (num1 / num2).toFixed(num3);
}
function numberModify(num) {
  return num.toFixed(2);
}
function inputModify(num1, num2) {
  return (num1 / 100000000).toFixed(2) - (num2 / 10000000000).toFixed(2);
}
function procentageColor(num) {
  if (num > 0) {
    return "green";
  } else {
    return "red";
  }
}

const Table = (props) => {
  return (
    <StyledTable>
      <StyledTHead>
        <StyledTr>
          <StyledTh>#</StyledTh>
          <StyledTh>
            Name <RiArrowDownSFill className="arrow-icon" />
          </StyledTh>
          <StyledTh>
            Price <RiArrowDownSFill className="arrow-icon" />
          </StyledTh>
          <StyledTh>1h%</StyledTh>
          <StyledTh>24h%</StyledTh>
          <StyledTh>7d%</StyledTh>
          <StyledTh>
            24hVolume <RiArrowDownSFill className="arrow-icon" />
            <br />
            Market Cap
          </StyledTh>
          <StyledTh>
            Circulating <RiArrowDownSFill className="arrow-icon" />
            <br />
            Total Supply
          </StyledTh>
          <StyledTh>
            Last 7d <RiArrowDownSFill className="arrow-icon" />
          </StyledTh>
        </StyledTr>
      </StyledTHead>
      <StyledTBody>
        {props.coinList.map((coin) =>
          coin.map((item, index) => (
            <StyledTr scope="row">
              <TableRow>{index + 1}</TableRow>
              <TableRow>
                <TableImage src={item.image} />
                <TableSymbol>
                  {item.name}
                  <StyledSpan>({item.symbol})</StyledSpan>
                </TableSymbol>
              </TableRow>
              <TableRow>
                <StyledCurrency>{props.currencyDefault}</StyledCurrency>
                <CurentPrice>
                  {priceModify(item.current_price, 1000, 3)}
                </CurentPrice>
              </TableRow>
              <TableRow
                className={procentageColor(
                  item.price_change_percentage_1h_in_currency
                )}
              >
                <StyledPercent>
                  {numberModify(item.price_change_percentage_1h_in_currency)}%
                </StyledPercent>
              </TableRow>
              <TableRow
                className={procentageColor(
                  item.price_change_percentage_24h_in_currency
                )}
              >
                <StyledPercent>
                  {numberModify(item.price_change_percentage_24h_in_currency)}%
                </StyledPercent>
              </TableRow>
              <TableRow
                className={procentageColor(
                  item.price_change_percentage_7d_in_currency
                )}
              >
                <StyledPercent>
                  {numberModify(item.price_change_percentage_7d_in_currency)}%
                </StyledPercent>
              </TableRow>
              <TableRow>
                <TableRange>
                  {priceModify(item.total_volume, 100000000, 2)}-
                  {priceModify(item.market_cap, 10000000000, 2)}
                </TableRange>
                <StyledInput
                  type="range"
                  value={inputModify(item.total_volume, item.market_cap)}
                />
              </TableRow>
              <TableRow>
                <TableRange>
                  {priceModify(item.circulating_supply, 100000000, 2)}-
                  {priceModify(item.total_supply, 10000000000, 2)}
                </TableRange>
                <br />
                <StyledInput
                  type="range"
                  value={inputModify(
                    item.circulating_supply,
                    item.total_supply
                  )}
                />
              </TableRow>
              <TableRow>
                <Sparkline
                  item={item.id}
                  currencyDefault={props.currencyDefault}
                />
              </TableRow>
            </StyledTr>
          ))
        )}
      </StyledTBody>
    </StyledTable>
  );
};
const mapStateToProps = (state) => ({
  currencyDefault: state.mainApp.currencyDefault,
  coinList: state.coinList.coinList,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
