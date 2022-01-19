import axios from "axios";
import { GET_COINNAME_SUCCCESS, GET_COINNAME_ERROR, RESET_COIN_LIST, RESET_VISIBILITY } from "./navSearchReducer";

export const getCoinName = (coinName) => async (dispatch, getState) => {
    console.log('here')
    
   try{
       const { data } = await axios(
         `https://crypto-app-server.herokuapp.com/coins/${coinName}`
       );
     dispatch({
         type: GET_COINNAME_SUCCCESS,
         payload: data
     })
   }catch(err){
      dispatch({
          type: GET_COINNAME_ERROR,
          payload: err
      })
   }
}

export const resetList = () => (dispatch, getState) => {
    dispatch({
        type: RESET_COIN_LIST
    })
}

export const resetVisibility = () => (dispatch, getState) => {
   dispatch({
       type: RESET_VISIBILITY
   })
}


