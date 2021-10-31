// Redux Toolkit 

import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('timer/increment');
export const decrement = createAction('timer/decrement');

export default createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// From React
// dispatch(increment(5))