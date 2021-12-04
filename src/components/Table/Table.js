import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  TableRow,
  TableRange,
  TableSymbol,
  TableImage,
  StyledTable,
} from "./Table.styles";

const Table = ({ coinList, currencyDefault }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>#</th>
          <th>
            Name <RiArrowDownSFill className="arrow-icon" />
          </th>
          <th>
            Price <RiArrowDownSFill className="arrow-icon" />
          </th>
          <th>1h%</th>
          <th>24h%</th>
          <th>7d%</th>
          <th>
            24hVolume <RiArrowDownSFill className="arrow-icon" />
            <br />
            Market Cap
          </th>
          <th>
            Circulating <RiArrowDownSFill className="arrow-icon" />
            <br />
            Total Supply
          </th>
          <th>
            Last 7d <RiArrowDownSFill className="arrow-icon" />
          </th>
        </tr>
      </thead>
      <tbody>
        {coinList.map((coin) =>
          coin.map((item, index) => (
            <tr scope="row">
              <TableRow>{index + 1}</TableRow>
              <TableRow>
                <TableImage src={item.image} />
                <TableSymbol>
                  {item.name}({item.symbol})
                </TableSymbol>
              </TableRow>
              <TableRow>
                {currencyDefault}
                {item.current_price.toFixed(2)}
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_1h_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                {item.price_change_percentage_1h_in_currency.toFixed(2)}%
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_24h_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                {item.price_change_percentage_24h_in_currency.toFixed(2)}%
              </TableRow>
              <TableRow
                className={
                  item.price_change_percentage_7d_in_currency > 0
                    ? "green"
                    : "red"
                }
              >
                {item.price_change_percentage_7d_in_currency.toFixed(2)}%
              </TableRow>
              <TableRow>
                <TableRange>
                  {(item.total_volume / 100000000).toFixed(2)} -{" "}
                  {(item.market_cap / 10000000000).toFixed(2)}
                </TableRange>
                <input type="range" />
              </TableRow>
              <TableRow>
                <TableRange>
                  {(item.circulating_supply / 100000000).toFixed(2)} -{" "}
                  {(item.total_supply / 1000000000).toFixed(2)}
                </TableRange>
                <br />
                <input type="range" />
              </TableRow>
              <TableRow>testtesttesttesttest</TableRow>
            </tr>
          ))
        )}
      </tbody>
    </StyledTable>
  );
};

export default Table;
