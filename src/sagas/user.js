// 3rd party
import { call, put, takeLatest } from "redux-saga/effects";

// lib
import {
  USER_LOGIN_FETCH_REQUESTED,
  USER_SIGN_UP_FETCH_REQUESTED,
} from "../actions/constants/user";
import {
  loginRequest,
  signUpRequest,
  userLoginFailed,
  userLoginSuccess,
  userSignUpFailed,
  userSignUpSuccess,
} from "../actions/user";

function* fetchUser({ payload }) {
  try {
    const user = yield call(loginRequest, payload.email, payload.password);
    yield put(userLoginSuccess(user));
  } catch (e) {
    yield put(userLoginFailed(e.response.body.errors));
  }
}

function* createUser({ payload }) {
  try {
    const user = yield call(signUpRequest, payload);
    yield put(userSignUpSuccess(user));
  } catch (e) {
    yield put(userSignUpFailed(e.response.body.errors));
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN_FETCH_REQUESTED, fetchUser);
  yield takeLatest(USER_SIGN_UP_FETCH_REQUESTED, createUser);
}

export default userSaga;
