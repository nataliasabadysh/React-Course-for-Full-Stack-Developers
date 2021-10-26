import { createUser, signIn, signOut } from "../../api/auth";
import { types } from "./type";

// SYNC
const singUpUserRequest = {
  type: types.USER_REQUEST,
};

export const singUpUserSuccess = {
  type: types.USER_SUCCESS,
};

export const logOutUser = {
  type: types.LOG_OUT,
};

export const singUpUser = (user) => ({
  type: types.SIGN_UP,
  payload: user,
});

const logInUserResponse = (response) => ({
  type: types.LOG_IN,
  payload: response,
});

const singUpUserError = (message) => ({
  type: types.SIGN_UP_ERROR,
  payload: message,
});

const logInUserError = (message) => ({
  type: types.LOG_IN_ERROR,
  payload: message,
});

// ASYNC  - fun (side effect)
export const createUserAsync = (credentials) => (dispatch) => {
  dispatch(singUpUserRequest);
  createUser(credentials)
    .then((response) => {
      dispatch(singUpUser(response));
      dispatch(singUpUserSuccess);

      localStorage.setItem("auth", JSON.stringify(response));
    })
    .catch((error) => dispatch(singUpUserError(error)));

  // fetch('https:/uperSite.api/singup').then()
};

export const logInUserAsync = (credentials) => (dispatch) => {
  dispatch(singUpUserRequest);

  signIn(credentials)
    .then((response) => {
      dispatch(logInUserResponse(response));
      dispatch(singUpUserSuccess);
      localStorage.setItem("auth", JSON.stringify(response));
    })
    .catch((error) => dispatch(logInUserError(error)));

  // fetch('https:/uperSite.api/singup').then()
};

export const logOutUserAsync = () => (dispatch) => {
  signOut();
  dispatch(logOutUser);
};
