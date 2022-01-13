import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainApp from "./mainApp/mainAppReducer";
import global from "./global/globalReducer";
import coinPage from "./coinPage/coinPageReducer";

const reducers = combineReducers({
  mainApp,
  global,
  coinPage,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
