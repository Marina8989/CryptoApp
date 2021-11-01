import React from 'react';
import {RiArrowDownSFill} from 'react-icons/ri';
//import axios from 'axios';

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
    <table>
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
                       <td className='table-row'>{index+1}</td>
                       <td className='table-row'><img src={item.image} className='table-image'/> {item.name} <span className='table-symbol'>({item.symbol})</span>
                       </td>
                       <td className='table-row'>{formatDollar(item.current_price, 20)}</td>
                       <td className={item.price_change_percentage_1h_in_currency > 0 ? 'green table-row' : 'red table-row'}>{formatPercent(item.price_change_percentage_1h_in_currency)}%</td>
                       <td className={item.price_change_percentage_24h_in_currency > 0 ? 'green table-row' : 'red table-row'}>{formatPercent(item.price_change_percentage_24h_in_currency)}%</td>
                       <td className={item.price_change_percentage_7d_in_currency > 0 ? 'green table-row' : 'red table-row'}>{formatPercent(item.price_change_percentage_7d_in_currency)}%</td>
                       <td className='table-row'>
                         <span className='table-range'>{formatDollar((item.total_volume/100000000), 4)} - ${formatDollar(item.market_cap), 12}</span>
                         <input type='range' />
                       </td>
                       <td className='table-row'>
                         <span className='table-range'>{formatDollar((item.circulating_supply/100000000), 4)} - {formatDollar((item.total_supply/1000000000),4)}</span><br />
                         <input type='range' />
                       </td>
                       <td className='table-row'>testtesttest</td>
                     </tr>
                 ))
              ))}
        </tbody>
    </table>
  )
}

export default Table