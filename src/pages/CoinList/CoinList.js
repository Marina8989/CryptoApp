import React from 'react';
import Table from '../../components/Table/Table';
import ChartBar from '../../components/ChartBar/ChartBar';
import ChartLine from '../../components/ChartLine/ChartLine';
import axios from 'axios';
class CoinList extends React.Component{
  state={
    coinList:[]
  }
getCoinInfo = async() => {
  try{
    const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d');
    const newCoinList = [...this.state.coinList, data];
    this.setState({coinList: newCoinList}) 
  }catch(err){
    console.log(err);
  }
}
componentDidMount() {
  this.getCoinInfo();
}
render() {
  return (
    <div className='table'>
      <h4 className='table-text'>Overview</h4>
        <div className='charts'>
          <div className='chart-display'>
            <ChartLine chartMarket={this.chartMarket} chartLabel={this.chartLabel} />
          </div>
          <div className='chart-display'>
            <ChartBar chartMarket={this.chartMarket} chartLabel={this.chartLabel}/> 
          </div>
        </div>
      <h4 className='table-text'>Overview</h4>
      <Table coinList={this.state.coinList}/>
    </div>
  )}
}

export default CoinList;

