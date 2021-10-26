import { FILL_POST, START_LOADING, STOP_LOADING, SET_ERROR } from "./types";

export const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FILL_POST: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case START_LOADING: {
      return true;
    }
    case STOP_LOADING: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_ERROR: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
