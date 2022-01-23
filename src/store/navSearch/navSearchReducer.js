const initialState = {
  list: [],
  isListVisible: false,
};
export const GET_COINNAME_SUCCCESS = "GET_COINNAME_SUCCCESS";
export const GET_COINNAME_ERROR = "GET_COINNAME_ERROR";
export const RESET_COIN_LIST = "RESET_COIN_LIST";
export const RESET_VISIBILITY = "RESET_VISIBILITY";

function navSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINNAME_SUCCCESS:
      return {
        ...state,
        list: action.payload,
        isListVisible: true,
      };
    case RESET_COIN_LIST:
      return {
        ...state,
        list: [],
      };
    case RESET_VISIBILITY:
      return {
        ...state,
        isListVisible: false,
      };
    case GET_COINNAME_ERROR:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}

export default navSearchReducer;
