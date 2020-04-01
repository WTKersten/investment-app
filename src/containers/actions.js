import {
    GET_PROFILE,
    GET_PROFILE_ERROR,
    GET_PROFILE_SUCCESS,
    GET_STOCKS,
    GET_STOCKS_ERROR,
    GET_STOCKS_SUCCESS
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
