import {
    CLEAR_GENERIC_LOADING,
    GET_PROFILE,
    GET_PROFILE_ERROR,
    GET_PROFILE_SUCCESS,
    GET_STOCKS,
    GET_STOCKS_ERROR,
    GET_STOCKS_SUCCESS, SET_GENERIC_LOADING
} from "./constants";

export const getProfile = ()  => ({
    type: GET_PROFILE
});

export const getProfileSuccess = response => ({
        type: GET_PROFILE_SUCCESS,
        payload: response,
});

export const getProfileError = response => ({
    type: GET_PROFILE_ERROR,
    payload: response,
});

export const getStocks = () => ({
        type: GET_STOCKS
});

export const getStocksSuccess = ({products}) => ({
        type: GET_STOCKS_SUCCESS,
        payload: products,
});

export const getStocksError = response => ({
        type: GET_STOCKS_ERROR,
        payload: response,
});

export const setGenericLoading = () => ({
        type: SET_GENERIC_LOADING
});

export const clearGenericLoading = () => ({
        type: CLEAR_GENERIC_LOADING
});