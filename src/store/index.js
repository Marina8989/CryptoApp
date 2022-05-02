import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['portfolio']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);


