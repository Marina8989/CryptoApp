import React from "react";
import {Switch, Route} from 'react-router-dom';
import {FaAdjust} from 'react-icons/fa';
import CoinList from './pages/CoinList/CoinList';
import CoinPage from './pages/CoinPage/CoinPage';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';
import './index.css';

class App extends React.Component{
  // state = {
  //   on: false
  // }
  // handleSwitch = () => {
  //   this.setState({on: !this.state.on});
  // }
  render() {
    return (
      <div > 
          <div className='navbar'>
              <FaAdjust onClick={this.handleSwitch} className='menu-icon'/>
              <Navbar />
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