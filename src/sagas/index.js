// 3rd party
import { all } from "redux-saga/effects";

// lib
import userSaga from "./user";

function* rootSaga() {
  yield all([userSaga()]);
}
export default rootSaga;
