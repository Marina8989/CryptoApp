const initialState = {
  globalList: [],
};

export const GET_GLOBAL_SUCCESS = "GET_GLOBAL_SUCCESS";
export const GET_GLOBAL_ERROR = "GET_GLOBAL_ERROR";

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_SUCCESS:
      return {
        ...state,
        globalList: action.payload,
      };
    case GET_GLOBAL_ERROR:
      return {
        ...state,
        globalList: action.payload,
      };
    default:
      return state;
  }
}

export default globalReducer;
