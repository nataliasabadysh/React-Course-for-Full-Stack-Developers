// Core
import { combineReducers } from 'redux';
import { postsReducer, loadingReducer, errorReducer } from '../redux/posts/reducer';

export const themeReducer = (state = { name: 'drak'}, action) => state;

const postRootReducer = combineReducers({
    list: postsReducer,
    isLoading: loadingReducer,
    error: errorReducer
})
// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer,
    posts: postRootReducer
});
