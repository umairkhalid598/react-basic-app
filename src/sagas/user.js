// 3rd party
import { call, put, takeLatest } from "redux-saga/effects";

// lib
import { USER_LOGIN_FETCH_REQUESTED } from "../actions/constants/user";
import {
  loginRequest,
  userLoginFailed,
  userLoginSuccess,
} from "../actions/user";

function* fetchUser({ payload }) {
  try {
    const user = yield call(loginRequest, payload.email, payload.password);
    yield put(userLoginSuccess(user));
  } catch (e) {
    yield put(userLoginFailed(e.response.body.errors));
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN_FETCH_REQUESTED, fetchUser);
}

export default userSaga;
