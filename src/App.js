import React from "react";
import CoinList from './pages/CoinList/CoinList';
import CoinPage from './pages/CoinPage/CoinPage';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import './index.css';
import {FaAdjust} from 'react-icons/fa';
//import axios from 'axios';
class App extends React.Component{
  state = {
    on: false
  }
  handleSwitch = () => {
    this.setState({on: !this.state.on});
  }
  render() {
    return (
      <div className={this.state.on ? 'main' : 'secondary'}> 
          <div className='navbar'>
              <Navbar />
              <FaAdjust onClick={this.handleSwitch} className='menu-icon'/>
          </div>
          <div className='bg-main'>
              <Switch>
                <Route exact path='/' component={CoinList} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/coinPage/:id' component={CoinPage} />
              </Switch>
          </div>
      </div>
    )
  }
}

export default App;