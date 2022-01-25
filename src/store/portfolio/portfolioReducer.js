const initialState = {
  coinNames: [],
  coin: "",
};
export const GET_COIN_NAME_SUCCESS = "GET_COIN_NAME_SUCCESS";
export const GET_COIN_NAME_ERROR = "GET_COIN_NAME_ERROR";
export const GET_COIN_INFO_SUCCESS = "GET_COIN_INFO_SUCCESS";
export const GET_COIN_INFO_ERROR = "GET_COIN_INFO_ERROR";
export const RESET_COIN_NAMES = "RESET_COIN_NAMES";

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_NAME_SUCCESS:
      return {
        ...state,
        coinNames: action.payload,
      };
    case GET_COIN_NAME_ERROR:
      return {
        ...state,
        coinNames: action.payload,
      };
    case GET_COIN_INFO_SUCCESS:
      return {
        ...state,
        coin: action.payload,
        coinNames: [],
      };
    case GET_COIN_INFO_ERROR:
      return {
        ...state,
        coin: action.payload,
      };
    case RESET_COIN_NAMES:
      return {
        ...state,
        coinNames: [],
      };
    default:
      return state;
  }
}

export default portfolioReducer;
