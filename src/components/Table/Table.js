import React from 'react';
import {RiArrowDownSFill} from 'react-icons/ri';
import {TableRow, TableRange, TableSymbol, TableImage, StyledTable} from './Table.styles';

const Table = ({coinList}) => {
  const formatPercent = number =>
    `${new Number(number).toFixed(2)}`

let formatDollar = (number, maximumSignificantDigits) => 
  new Intl.NumberFormat(
    'en-US',
      {
        style: 'currency',
        currency: 'usd',
        maximumSignificantDigits
      }
  )
  .format(number)
  

return(
  <StyledTable>
    <thead>
      <tr>
        <th>#</th>
        <th>Name <RiArrowDownSFill className='arrow-icon'/></th>
        <th>Price <RiArrowDownSFill className='arrow-icon' /></th>
        <th>1h%</th>
        <th>24h%</th>
        <th>7d%</th>
        <th>24hVolume <RiArrowDownSFill className='arrow-icon' /><br/>Market Cap</th>
        <th>Circulating <RiArrowDownSFill className='arrow-icon' /><br/>Total Supply</th>
        <th>Last 7d <RiArrowDownSFill className='arrow-icon' /></th>
      </tr>
    </thead>
    <tbody>
      {coinList.map((coin) => (
        coin.map((item, index) => (
          <tr scope="row" >
            <TableRow>{index+1}</TableRow>
            <TableRow><TableImage src={item.image}/> {item.name} <TableSymbol>({item.symbol})</TableSymbol></TableRow>
            <TableRow>{formatDollar(item.current_price, 20)}</TableRow>
            <TableRow className={item.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red'}>{formatPercent(item.price_change_percentage_1h_in_currency)}%</TableRow>
            <TableRow className={item.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red'}>{formatPercent(item.price_change_percentage_24h_in_currency)}%</TableRow>
            <TableRow className={item.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red'}>{formatPercent(item.price_change_percentage_7d_in_currency)}%</TableRow>
            <TableRow>
              <TableRange>{formatDollar((item.total_volume/100000000), 4)} - ${formatDollar(item.market_cap), 12}</TableRange>
                <input type='range' />
            </TableRow>
            <TableRow>
              <TableRange>{formatDollar((item.circulating_supply/100000000), 4)} - {formatDollar((item.total_supply/1000000000),4)}</TableRange><br />
                <input type='range' />
              </TableRow>
            <TableRow>testtesttest</TableRow>
          </tr>
        ))
      ))}
    </tbody>
  </StyledTable>
 )
}

export default Table