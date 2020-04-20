// lib
import {
  USER_LOGIN_ACTION,
  USER_LOGIN_FETCH_FAILED,
  USER_LOGIN_FETCH_REQUESTED,
  USER_LOGIN_FETCH_SUCCEEDED,
} from "./constants/user";
import { post } from "../request";
import { USER_LOGIN_URL } from "../request/constant";

export const userLoginAction = (payload) => ({
  type: USER_LOGIN_ACTION,
  payload,
});

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
