import React from 'react';
import axios from 'axios';

const today = (new Date()).toString().split(' ').splice(1,3).join(' ');

class ChartLineLegend extends React.Component{
    state={
        legend: []
    }
    getChartLegend = async(url) => {
       const {data} = await axios(url);
       console.log(data);
       const newList = [...this.state.legend, data];
       this.setState({legend: newList});
    }
    componentDidMount() {
        this.getChartLegend('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
    }
    render() {
        return(
          <>
            {this.state.legend.map(item => {
                return (
                    <div key={item[0]} className='legend'>
                        <h5>{(item[0].symbol).toUpperCase()}</h5>
                        <h4>${(item[0].low_24h / 1000).toFixed(3)}K</h4>
                        <h5>{today}</h5>
                    </div>
                )
            })}
          </>
        )
    }
}

export default ChartLineLegend