import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TODOS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
