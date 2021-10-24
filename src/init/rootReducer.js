// Core
import { combineReducers } from 'redux';

export const themeReducer = (state = { name: 'dark'}, action) => state;

// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer
});
