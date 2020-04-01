import { all } from 'redux-saga/effects';
import mainSaga from './containers/saga';

// combine all sagas
export default function* rootSaga() {
  yield all([
    mainSaga(),
  ]);
}