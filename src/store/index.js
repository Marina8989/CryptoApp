import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainApp from "./mainApp/mainAppReducer";
import global from "./global/globalReducer";
import coinPage from "./coinPage/coinPageReducer";
import portfolio from "./portfolio/portfolioReducer";
import coinList from "./coinList/coinListReducer";
import chart from "./chart/chartReducer";
import navSearch from "./navSearch/navSearchReducer";

const reducers = combineReducers({
  mainApp,
  global,
  coinPage,
  portfolio,
  coinList,
  chart,
  navSearch
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

