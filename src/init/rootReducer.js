// Core
import { combineReducers } from "redux";
import {
  postsReducer,
  loadingReducer,
  errorReducer,
} from "../redux/posts/reducer";
import { authReducer } from "../redux/auth/reducer";
import { themeReducer } from "../redux/theme/reducer";

const postRootReducer = combineReducers({
  list: postsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
// Reducers
export const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postRootReducer,
  auth: authReducer,
});
