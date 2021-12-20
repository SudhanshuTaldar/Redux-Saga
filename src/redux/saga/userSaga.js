import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
async function getApi() {
   return await fetch(apiUrl).then(response => response.json())
}

function* fetchUsers(action) {
   const users = yield call(getApi);
   yield put({ type: 'GET_USERS_SUCCESS', users: users });
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;