// lib
import {
  USER_LOGIN_ACTION,
  USER_LOGIN_FETCH_FAILED,
  USER_LOGIN_FETCH_REQUESTED,
  USER_LOGIN_FETCH_SUCCEEDED,
} from "../actions/constants/user";

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  token: null,
  isLoading: false,
  errors: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_ACTION:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGIN_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    case USER_LOGIN_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGIN_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
