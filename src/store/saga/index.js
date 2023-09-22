import { all } from 'redux-saga/effects'
import { userWatcher } from './usersSaga'

export function* rootSaga () {
    yield all([userWatcher()]);
}