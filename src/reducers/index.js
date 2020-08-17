// 3rd party
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// lib
import UserReducer from "./user";

export default (history) =>
  combineReducers({
    currentUser: UserReducer,
    router: connectRouter(history),
  });
