// 3rd party
import { combineReducers } from "redux";

// lib
import UserReducer from "./user";

export default combineReducers({
  currentUser: UserReducer,
});
