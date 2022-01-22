import axios from "axios";
import { GET_CHART_INFO } from "./chartReducer";


export const getChartInfo = (coinCurrency) => async (dispatch, getState) => {
   const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${coinCurrency}&days=30&interval=daily`
   );

   dispatch({
       type: GET_CHART_INFO,
       payload: data
   })
}


