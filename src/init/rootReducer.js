// Core
import { combineReducers } from 'redux';
import { postsReducer, tagReducer } from '../redux/posts/reducer';

export const themeReducer = (state = { name: 'drak'}, action) => state;

const postRootReducer = combineReducers({
    list: postsReducer,
    tag: tagReducer,
})
// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer,
    posts: postRootReducer
});
