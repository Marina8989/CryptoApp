const initialState = {
  coinList: [],
};

export const GET_COIN_INFO_LIST_SUCCESS = "GET_COIN_INFO_LIST_SUCCESS";
export const GET_COIN_INFO_LIST_ERROR = "GET_COIN_INFO_LIST_ERROR";

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_INFO_LIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
      };
    case GET_COIN_INFO_LIST_ERROR:
      return {
        ...state,
        coinList: action.payload,
      };
    default:
      return state;
  }
}

export default coinListReducer;
