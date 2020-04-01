import { takeLatest, call, put } from 'redux-saga/effects';
import {GET_PROFILE, GET_STOCKS} from "./constants";
import {getProfileError, getProfileSuccess, getStocksError, getStocksSuccess} from "./actions";

export default function* watcherSaga() {
    yield takeLatest(GET_PROFILE, getProfileSaga);
    yield takeLatest(GET_STOCKS, getStocksSaga);
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