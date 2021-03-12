// 3rd party
import { call, put, takeLatest } from "redux-saga/effects";

// lib
import {
  USER_INVITE_REQUESTED,
  USER_LOGIN_FETCH_REQUESTED,
  USER_SIGN_UP_FETCH_REQUESTED,
} from "../actions/constants/user";
import {
  deleteUserRequest,
  inviteRequest,
  loginRequest,
  signUpRequest,
  userDeleteFailed,
  userDeleteSuccess,
  userInviteFailed,
  userInviteSuccess,
  userLoginFailed,
  userLoginSuccess,
  userSignUpFailed,
  userSignUpSuccess,
} from "../actions/user";
import { Home } from "../routes/constants";
import history from "../helpers/history";

function* fetchUser({ payload }) {
  try {
    const { body } = yield call(loginRequest, payload.email, payload.password);
    yield put(
      userLoginSuccess({
        id: body.user.id,
        username: body.user.username,
        firstName: body.user.first_name,
        lastName: body.user.last_name,
        email: body.user.email,
        token: body.token,
      })
    );
    history.push(Home);
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

function* inviteuser({ payload }) {
  try {
    const user = yield call(inviteRequest, payload.email, payload.id);
    yield put(userInviteSuccess(user));
  } catch (e) {
    yield put(userInviteFailed(e.response.body.errors));
  }
}

function* deleteUser({ payload }) {
  try {
    const user = yield call(deleteUserRequest, payload.email, payload.id);
    yield put(userDeleteSuccess(user));
  } catch (e) {
    yield put(userDeleteFailed(e.response.body.errors));
  }
}


function* userSaga() {
  yield takeLatest(USER_LOGIN_FETCH_REQUESTED, fetchUser);
  yield takeLatest(USER_SIGN_UP_FETCH_REQUESTED, createUser);
  yield takeLatest(USER_INVITE_REQUESTED, inviteuser);
  yield takeLatest(USER_INVITE_REQUESTED, deleteUser);
}

export default userSaga;
