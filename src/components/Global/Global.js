import React from 'react';
import {RiArrowUpSFill} from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import axios from 'axios';

class Global extends React.Component{
    state={
        globalList: [],
    }
    getGlobalInfo = async(url) => {
       const {data} = await axios(url);
       const newList = [...this.state.globalList, data]
       this.setState({globalList: newList});
    }
    componentDidMount() {
       this.getGlobalInfo('https://api.coingecko.com/api/v3/global')
    }
    render(){
        return(
            <div>
                {this.state.globalList.map((item, index) => {
                    return(
                        <div key={index} className='global'>
                           <h6>Coins: {item.data.active_cryptocurrencies}</h6>
                           <h6>Exchange: {item.data.markets}</h6>
                           <h6><BsDot className='dot'/>{(item.data.total_volume.btc / 1000000).toFixed(2)}T <RiArrowUpSFill className='arrow-up'/></h6>
                           <h6><BsDot className='dot'/>{(item.data.total_volume.usd / 1000000000).toFixed(2)}B <RiArrowUpSFill className='arrow-up'/></h6>
                           <h6><FaBitcoin className='bicoin-icon' /> {(item.data.market_cap_percentage.btc).toFixed(2)}% <input type='range' className='input-range-global'/></h6>
                           <h6><FaEthereum className='ethereum-icon' /> {(item.data.market_cap_percentage.eth).toFixed(2)}% <input type='range' className='input-range-global'/></h6>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Global