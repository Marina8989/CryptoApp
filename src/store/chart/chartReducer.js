const initialState = {
    chartMarket: [],
    chartLabel: [],
    chartMarketPrices: [],
    chartLabelPrices: []
}

export const GET_CHART_INFO = "GET_CHART_INFO";

function chartReducer(state=initialState, action){
     switch(action.type){
        case GET_CHART_INFO:
            return{
                ...state,
                chartMarket: action.payload.total_volumes.map((el) => el[1]),
                chartLabel: action.payload.total_volumes.map((el) => new Date(el[0]).getDate()),
                chartMarketPrices: action.payload.prices.map((el) => el[1]),
                chartLabelPrices: action.payload.prices.map((el) => new Date(el[0]).getDate())
            } 
        default:
            return state;
     }
}

export default chartReducer;
