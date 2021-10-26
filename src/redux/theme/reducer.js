import { types } from "./types";

export const themeReducer = (state = false, { type, payload }) => {
  switch (type) {
    case types.CHANGE_THEME: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
