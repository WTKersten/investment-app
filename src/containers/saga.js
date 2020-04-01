import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import {
    GET_PROFILE,
    GET_PROFILE_ERROR,
    GET_PROFILE_SUCCESS,
    GET_STOCKS,
    GET_STOCKS_ERROR,
    GET_STOCKS_SUCCESS
} from "./constants";
import {
    clearGenericLoading,
    getProfileError,
    getProfileSuccess,
    getStocksError,
    getStocksSuccess,
    setGenericLoading
} from "./actions";

export default function* watcherSaga() {
    yield takeLatest(GET_PROFILE, getProfileSaga);
    yield takeLatest(GET_STOCKS, getStocksSaga);


    yield takeEvery(
        [GET_PROFILE, GET_STOCKS],
        setLoading,
    );

    yield takeEvery(
        [GET_PROFILE_ERROR, GET_PROFILE_SUCCESS, GET_STOCKS_ERROR, GET_STOCKS_SUCCESS],
        clearLoading,
    );
}



export function* getProfileSaga() {
    const requestUrl = `http://localhost:9000/api/profile`;
    try {
        const res = yield call(fetch, requestUrl, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        });
        const response = yield res.json();
        yield put(getProfileSuccess(response));
    } catch (err) {
        yield put(getProfileError(err));
    }
}

export function* getStocksSaga() {
    const requestUrl = `http://localhost:9000/api/stocks`;
    try {
        const res = yield call(fetch, requestUrl, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        });
        const response = yield res.json();
        yield put(getStocksSuccess(response));
    } catch (err) {
        yield put(getStocksError(err));
    }
}

export function* setLoading() {
    yield put(setGenericLoading());
}

export function* clearLoading() {
    yield put(clearGenericLoading());
}

