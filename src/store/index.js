import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainApp from "./mainApp/mainAppReducer";
import global from "./global/globalReducer";

const reducers = combineReducers({
  mainApp,
  global,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
