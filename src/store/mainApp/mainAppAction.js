import { FIND_ITEM_SUCCESS } from "./mainAppReducer";

export const findItem = (item) => (dispatch, getState) => {
  dispatch({
    type: FIND_ITEM_SUCCESS,
    payload: item,
  });
};
