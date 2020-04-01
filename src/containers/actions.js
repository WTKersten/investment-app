import {
    CLEAR_GENERIC_LOADING,
    GET_PROFILE,
    GET_PROFILE_ERROR,
    GET_PROFILE_SUCCESS,
    GET_STOCKS,
    GET_STOCKS_ERROR,
    GET_STOCKS_SUCCESS, SET_GENERIC_LOADING
} from "./constants";

export function getProfile() {
    return {
        type: GET_PROFILE
    }
}
export function getProfileSuccess(response) {
    return {
        type: GET_PROFILE_SUCCESS,
        payload: response,
    }
}
export function getProfileError(response) {
    return {
        type: GET_PROFILE_ERROR,
        payload: response,
    }
}

export function getStocks() {
    return {
        type: GET_STOCKS
    }
}
export function getStocksSuccess({products}) {
    return {
        type: GET_STOCKS_SUCCESS,
        payload: products,
    }
}
export function getStocksError(response) {
    return {
        type: GET_STOCKS_ERROR,
        payload: response,
    }
}

export function setGenericLoading() {
    return {
        type: SET_GENERIC_LOADING
    }
}

export function clearGenericLoading() {
    return {
        type: CLEAR_GENERIC_LOADING
    }
}