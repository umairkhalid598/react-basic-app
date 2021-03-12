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
} from "./constants/user";
import { post, delRequest } from "../request";
import {
  USER_INVITE_URL,
  USER_LOGIN_URL,
  USER_SIGN_UP_URL,
  USER_DELETE_URL,
} from "../request/constant";

export const userLoginRequest = ({ email, password }) => ({
  type: USER_LOGIN_FETCH_REQUESTED,
  payload: {
    isLoading: true,
    email,
    password,
  },
});

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_FETCH_SUCCEEDED,
  payload: {
    isLoading: false,
    errors: [],
    ...payload,
  },
});

export const userLoginFailed = (payload) => ({
  type: USER_LOGIN_FETCH_FAILED,
  payload: {
    isLoading: false,
    errors: payload,
  },
});

export const loginRequest = (email, password) =>
  post(USER_LOGIN_URL, { email, password });

export const userSignUpRequest = ({
  firstName,
  lastName,
  username,
  email,
  password,
}) => ({
  type: USER_SIGN_UP_FETCH_REQUESTED,
  payload: {
    isLoading: true,
    firstName,
    lastName,
    username,
    email,
    password,
  },
});

export const userSignUpSuccess = (payload) => ({
  type: USER_SIGN_UP_FETCH_SUCCEEDED,
  payload: {
    isLoading: false,
    errors: [],
    ...payload,
  },
});

export const userSignUpFailed = (payload) => ({
  type: USER_SIGN_UP_FETCH_FAILED,
  payload: {
    isLoading: false,
    errors: payload,
  },
});

export const signUpRequest = (payload) =>
  post(USER_SIGN_UP_URL, {
    first_name: payload.firstName,
    last_name: payload.lastName,
    username: payload.username,
    email: payload.email,
    password: payload.password,
  });

export const userInviteRequest = ({ email, id }) => ({
  type: USER_INVITE_REQUESTED,
  payload: {
    isLoading: true,
    email,
    id,
  },
});

export const userInviteSuccess = (payload) => ({
  type: USER_INVITE_SUCCEEDED,
  payload: {
    isLoading: false,
    errors: [],
    ...payload,
  },
});

export const userInviteFailed = (payload) => ({
  type: USER_INVITE_FAILED,
  payload: {
    isLoading: false,
    errors: payload,
  },
});

export const inviteRequest = (payload) =>
  post(USER_INVITE_URL, {
    email: payload.email,
    id: payload.id,
  });

export const userDeleteRequest = ({ email, id }) => ({
  type: USER_DELETE_REQUESTED,
  payload: {
    isLoading: true,
    email,
    id,
  },
});

export const userDeleteSuccess = (payload) => ({
  type: USER_DELETE_SUCCEEDED,
  payload: {
    isLoading: false,
    errors: [],
    ...payload,
  },
});

export const userDeleteFailed = (payload) => ({
  type: USER_DELETE_FAILED,
  payload: {
    isLoading: false,
    errors: payload,
  },
});

export const deleteUserRequest = (payload) =>
  delRequest(USER_DELETE_URL, {
    email: payload.email,
    id: payload.id,
  });
