const initialState = {
  coin: "",
  isVisible: false,
};
export const COIN_DATA_SUCCESS = "COIN_DATA_SUCCESS";
export const COIN_DATA_ERROR = "COIN_DATA_ERROR";

function coinPageReducer(state = initialState, action) {
  switch (action.type) {
    case COIN_DATA_SUCCESS:
      return {
        ...state,
        isVisible: true,
        coin: action.payload,
      };
    case COIN_DATA_ERROR:
      return {
        ...state,
        coin: action.payload,
        isVisible: false,
      };
    default:
      return state;
  }
}

export default coinPageReducer;
