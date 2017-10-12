import { combineReducers } from 'redux';

const color = (state = 'red', action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  color
});

export default rootReducer;
