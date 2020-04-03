import {
  CLEAR_GENERIC_LOADING,
  GET_NEWS_SUCCESS,
  GET_PROFILE_SUCCESS,
  GET_STOCKS_SUCCESS,
  SET_GENERIC_LOADING
} from "./constants";

const initialState = {
  profile: {},
  news: [],
  stocks: [],
  genericLoadingCalls: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {...state, profile: action.payload};
    case GET_STOCKS_SUCCESS:
      return {...state, stocks: action.payload};
    case GET_NEWS_SUCCESS:
      return {...state, news: action.payload};
    case SET_GENERIC_LOADING:
      return {...state, genericLoadingCalls: state.genericLoadingCalls + 1};
    case CLEAR_GENERIC_LOADING:
      return {...state, genericLoadingCalls: state.genericLoadingCalls - 1};
    default:
      return state
  }
}