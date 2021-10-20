

# REDUX set up


# STORE 

```js
// 1
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// todosReducer

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;

// 2
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;

```


```js
export default {
  ADD: 'todos/add',
  DELETE: 'todos/delete'
};

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};


// ACTIONS 
import shortid from 'shortid';
import types from './todos-types';

const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});


```

