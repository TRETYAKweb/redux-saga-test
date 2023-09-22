import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_USERS, addUserAction } from '../reducers/usersReducer';

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* userSaga () {
    const data = yield call(fetchUsersFromApi);
    console.log(data)
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(addUserAction(json));
}

export function* userWatcher () {
    yield takeEvery(FETCH_USERS, userSaga);
}