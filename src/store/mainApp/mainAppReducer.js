const initialState = {
  currencyDefault: "USD",
  currencyList: ["USD", "EUR", "GBP", "ETH", "BTC"],
};

export const FIND_ITEM_SUCCESS = "FIND_ITEM_SUCCESS";

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FIND_ITEM_SUCCESS:
      return {
        ...state,
        currencyDefault: state.currencyList.find(
          (item) => item === action.payload
        ),
      };
    default:
      return state;
  }
}

export default appReducer;
