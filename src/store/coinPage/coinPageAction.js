import axios from "axios";
import { COIN_DATA_SUCCESS, COIN_DATA_ERROR } from "./coinPageReducer";

export const getCoinData = (val) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${val}?localization=false`
    );
    dispatch({
      type: COIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COIN_DATA_ERROR,
      payload: err,
    });
  }
};
