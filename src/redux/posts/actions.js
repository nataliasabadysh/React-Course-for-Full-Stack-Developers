import { FILL_POST, START_LOADING, STOP_LOADING, SET_ERROR } from "./types";

import { signIn, createUser, signOut } from "../../api/auth";

// Sync
export const fillPostSync = (data) => {
  return {
    type: FILL_POST,
    payload: data,
  };
};

export const startLoading = {
  type: START_LOADING,
};

export const stopLoading = {
  type: STOP_LOADING,
};

export const setErrorMessage = (msg) => ({
  type: SET_ERROR,
  payload: msg,
});

// Async
export const fetchPost = (params) => (dispatch) => {
  dispatch(startLoading);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => dispatch(fillPostSync(data)))
    .catch((error) => setErrorMessage(error))
    .finally(() => dispatch(stopLoading));
};

const credentials = {
  name: "Jecskф",
  email: "jectsф@gmail.com",
  password: "jecфt#s$$",
  permissions: "custom",
};

export const signUserInAsync = () => (dispatch) => {
  signIn({ email: "jectsф@gmail.com", password: "jecфt#s$$" })
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => console.log("error", error));
};

export const createUserAsync = () => (dispatch) => {
  createUser(credentials)
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => console.log("error", error));
};

export const signUserOut = () => (dispatch) => {
  return signOut().then(() => {
    console.log("delete from LS");
  });
};
