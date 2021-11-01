import React from 'react';
import ChartBarLegend from '../ChartBarLegend/ChartBarLegend.js'
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class ChartBar extends React.Component{
    state ={
        chartMarket: [],
        chartLabel: []
    }
    getChartInfo = async(url) => {
      const {data} = await axios(url)
      const market = data.total_volumes.map((el) => el[1])
      const label = data.total_volumes.map(el => {
        return new Date(el[0]).getDate()
      })
      this.setState({chartMarket: market, chartLabel: label})
    }
    componentDidMount(){
      this.getChartInfo('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily');
    }
    render() {
      return(
        <div className='chart-line'> 
        <ChartBarLegend />
            <Bar
               data={{
                 labels: this.state.chartLabel,
                 datasets: [
                 {
                  label: 'BTC',
                  data: this.state.chartMarket,
                  fill: true,
                  backgroundColor: 'rgb(33,114,229)',

            }
        ]
    }}
               options={{
        plugins: {
            legend:{
                display: false,
            }
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                    borderWidth: 0
                },
                ticks: {
                    display: false,
                }
            },
            x:{
                grid: {
                    display: false,
                    borderWidth: 0
                }
            }
        }
    }}
               height={250}
               width={415}
            />
        </div>
    )
}
    }


export default ChartBar