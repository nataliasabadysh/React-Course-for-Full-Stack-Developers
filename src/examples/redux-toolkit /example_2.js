// Redux Toolkit 

import { createAction, createReducer } from '@reduxjs/toolkit';

// USE CASE for the counter 

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

export default createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// From React
// dispatch(increment(5))

/*

// TYPES 
const INCREMENT = 'timer/increment';

// REDUCER 
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    default:
      return state;
  }
}

// ACTION
function increment(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}


*/
