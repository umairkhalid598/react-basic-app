// lib
import {
  USER_DELETE_FAILED,
  USER_DELETE_REQUESTED,
  USER_DELETE_SUCCEEDED,
  USER_INVITE_FAILED,
  USER_INVITE_REQUESTED,
  USER_INVITE_SUCCEEDED,
  USER_LOGIN_FETCH_FAILED,
  USER_LOGIN_FETCH_REQUESTED,
  USER_LOGIN_FETCH_SUCCEEDED,
  USER_SIGN_UP_FETCH_FAILED,
  USER_SIGN_UP_FETCH_REQUESTED,
  USER_SIGN_UP_FETCH_SUCCEEDED,
} from "../actions/constants/user";

const initialState = {
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  token: null,
  isLoading: false,
  errors: [],
};

// TODO Need to handle reducers for Errors.
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
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
    case USER_SIGN_UP_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case USER_SIGN_UP_FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        id: action.payload.user.id,
        username: action.payload.user.username,
        firstName: action.payload.user.first_name,
        lastName: action.payload.user.last_name,
        email: action.payload.user.email,
        token: action.payload.token,
      };
    case USER_SIGN_UP_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case USER_INVITE_REQUESTED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case USER_INVITE_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    case USER_INVITE_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case USER_DELETE_REQUESTED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case USER_DELETE_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    case USER_DELETE_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
