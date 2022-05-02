import axios from "axios";
import { GET_GLOBAL_SUCCESS, GET_GLOBAL_ERROR } from "./globalReducer.js";

export const getGlobalInfo = () => async (dispatch, getState) => {
  try {
    const { data } = await axios(`${process.env.REACT_APP_GLOBAL}`);
    dispatch({
      type: GET_GLOBAL_SUCCESS,
      payload: [data],
    });
  } catch (err) {
    dispatch({
      type: GET_GLOBAL_ERROR,
      payload: err,
    });
  }
};
