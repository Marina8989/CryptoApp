import axios from "axios";
import {
  GET_COIN_INFO_LIST_SUCCESS,
  GET_COIN_INFO_LIST_ERROR,
} from "./coinListReducer";

export const getCoinInfoList =
  (currencyDefault) => async (dispatch, getState) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyDefault}&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      dispatch({
        type: GET_COIN_INFO_LIST_SUCCESS,
        payload: [data],
      });
    } catch (err) {
      dispatch({
        type: GET_COIN_INFO_LIST_ERROR,
        payload: err,
      });
    }
  };
