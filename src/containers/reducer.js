import {GET_PROFILE_SUCCESS, GET_STOCKS_SUCCESS} from "./constants";

const initialState = {
  profile: {},
  news: {},
  stocks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {...state, profile: action.payload};
    case GET_STOCKS_SUCCESS:
      return {...state, stocks: action.payload};
    default:
      return state
  }
}