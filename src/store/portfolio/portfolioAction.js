import axios from "axios";
import {
  GET_COIN_NAME_SUCCESS,
  GET_COIN_NAME_ERROR,
  GET_COIN_INFO_ERROR,
  GET_COIN_INFO_SUCCESS,
  RESET_COIN_NAMES,
} from "./portfolioReducer";

export const getCoinNames = (val) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${val}`
    );

    dispatch({
      type: GET_COIN_NAME_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COIN_NAME_ERROR,
      payload: err,
    });
  }
};

export const getCoinInfo = (val) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${val}`
    );
    dispatch({
      type: GET_COIN_INFO_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COIN_INFO_ERROR,
      payload: err,
    });
  }
};

export const handleCoinNames = () => (dispatch, getState) => {
  dispatch({
    type: RESET_COIN_NAMES,
  });
};
