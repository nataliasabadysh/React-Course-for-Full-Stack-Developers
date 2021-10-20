// Core
import { combineReducers } from 'redux';
import { notesReducer } from '../redux/notes/reducer';

export const themeReducer = (state = { name: 'drak'}, action) => state;

// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer,
    notes: notesReducer,
});
