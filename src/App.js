import React from "react";
import CoinList from './pages/CoinList/CoinList';
import CoinPage from './pages/CoinPage/CoinPage';
import Portfolio from './pages/Portfolio/Portfolio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">CoinList</Link>
            </li>
            <li>
              <Link to="/coinPage">CoinPage</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/coinPage">
            <CoinPage />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <CoinList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

