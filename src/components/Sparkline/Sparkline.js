import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class Sparkline extends React.Component{
    state ={
        chartMarket: [],
        chartLabel: []
    }

    getChartInfo = async() => {
      const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
      const spark = data.sparkline_in_7d.map((el) => el[1])
    //   const label = data.prices.map(el => {
    //     return new Date(el[0]).getDate()
    //   })
      this.setState({chartMarket: spark})
    }
    componentDidMount(){
      this.getChartInfo();
    }
    render() {
      return(
        <div className='chart-line'> 
            <Line
               data={{
                 labels: this.state.chartLabel,
                 datasets: [
                 {
                  label: 'BTC',
                  data: this.state.chartMarket,
                  fill: true,
                  backgroundColor: 'rgb(23, 82, 34)',
                  borderColor: 'rgb(1,226,37)',
                  tension: 0.6
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

   
export default Sparkline