import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainApp from "./mainApp/mainAppReducer";

const reducers = combineReducers({
  mainApp,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
