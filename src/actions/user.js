// lib
import {
  USER_LOGIN_FETCH_FAILED,
  USER_LOGIN_FETCH_REQUESTED,
  USER_LOGIN_FETCH_SUCCEEDED, USER_SIGN_UP_FETCH_FAILED,
  USER_SIGN_UP_FETCH_REQUESTED, USER_SIGN_UP_FETCH_SUCCEEDED,
} from "./constants/user";
import { post } from "../request";
import { USER_LOGIN_URL, USER_SIGN_UP_URL } from "../request/constant";

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
    errors: null,
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

export const loginRequest = async (email, password) => {
  const { body } = await post(USER_LOGIN_URL, { email, password });
  return body;
};

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
    errors: null,
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

export const signUpRequest = async (payload) => {
  const { body } = await post(USER_SIGN_UP_URL, {
    first_name: payload.firstName,
    last_name: payload.lastName,
    username: payload.username,
    email: payload.email,
    password: payload.password,
  });
  return body;
};
