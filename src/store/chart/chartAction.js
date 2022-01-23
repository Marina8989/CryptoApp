import axios from "axios";
import { GET_CHART_INFO } from "./chartReducer";

export const getChartInfo = (coinCurrency) => async (dispatch, getState) => {
  const { data } = await axios(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${coinCurrency}&days=30&interval=daily`
  );
  const marketVolume = data.total_volumes.map((el) => el[1]);
  const labelVolume = data.total_volumes.map((el) => new Date(el[0]).getDate());
  const marketPrices = data.prices.map((el) => el[1]);
  const labelPrices = data.prices.map((el) => new Date(el[0]).getDate());
  dispatch({
    type: GET_CHART_INFO,
    payload: { data, marketVolume, labelVolume, marketPrices, labelPrices },
  });
};
