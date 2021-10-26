import { types } from "./types";

export const changeTheme = (value) => ({
  type: types.CHANGE_THEME,
  payload: value,
});
