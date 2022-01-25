const initialState = {
  chartMarket: [],
  chartLabel: [],
  chartMarketPrices: [],
  chartLabelPrices: [],
};

export const GET_CHART_INFO = "GET_CHART_INFO";

function chartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHART_INFO:
      return {
        ...state,
        chartMarket: action.payload.marketVolume,
        chartLabel: action.payload.labelVolume,
        chartMarketPrices: action.payload.marketPrices,
        chartLabelPrices: action.payload.labelPrices,
      };
    default:
      return state;
  }
}

export default chartReducer;
