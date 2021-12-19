import React from "react";
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
  StyledCurentPrice,
  StyledPercent,
} from "./Table.styles";

const Table = ({ coinList, currencyDefault }) => {
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
        {coinList.map((coin) =>
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
                <StyledCurrency>{currencyDefault}</StyledCurrency>
                <StyledCurentPrice>
                  {(item.current_price / 1000).toFixed(3)}
                </StyledCurentPrice>
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_1h_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                <StyledPercent>
                  {item.price_change_percentage_1h_in_currency.toFixed(2)}%
                </StyledPercent>
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_24h_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                <StyledPercent>
                  {item.price_change_percentage_24h_in_currency.toFixed(2)}%
                </StyledPercent>
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_7d_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                <StyledPercent>
                  {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                </StyledPercent>
              </TableRow>
              <TableRow>
                <TableRange>
                  {(item.total_volume / 100000000).toFixed(2)} -{" "}
                  {(item.market_cap / 10000000000).toFixed(2)}
                </TableRange>
                <StyledInput
                  type="range"
                  value={
                    (item.total_volume / 100000000).toFixed(2) -
                    (item.market_cap / 10000000000).toFixed(2)
                  }
                />
              </TableRow>
              <TableRow>
                <TableRange>
                  {(item.circulating_supply / 100000000).toFixed(2)} -{" "}
                  {(item.total_supply / 1000000000).toFixed(2)}
                </TableRange>
                <br />
                <StyledInput
                  type="range"
                  value={
                    (item.circulating_supply / 100000000).toFixed(2) -
                    (item.total_supply / 1000000000).toFixed(2)
                  }
                />
              </TableRow>
              <TableRow>
                <Sparkline item={item.id} currencyDefault={currencyDefault} />
              </TableRow>
            </StyledTr>
          ))
        )}
      </StyledTBody>
    </StyledTable>
  );
};

export default Table;
