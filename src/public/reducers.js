import { SET_COLOR } from './actions';

const DEFAULT_STATE = {
  color: 'red'
};

const setColor = (state, action) => {
  return Object.assign({}, state, { color: action.payload });
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_COLOR:
      return setColor(state, action);
    default:
      return state;
  }
};

export default rootReducer;
