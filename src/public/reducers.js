import { combineReducers } from 'redux';

const todos = (state = ['take out trash', 'gym'], action) => {
  switch (action.type) {
    case 'UPDATE_TODOS':
      return action.payload;
    default:
      return state;
  }
};

const todoIndex = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      return action.payload;
    default:
      return state;
  }
};

const displayLightbox = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_LIGHTBOX':
      return action.payload;
    case 'HIDE_LIGHTBOX':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
  todoIndex,
  displayLightbox
});

export default rootReducer;
