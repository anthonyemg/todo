export function updateTodos(todo) {
  return { type: 'UPDATE_TODOS', payload: todo };
}

export function selectTodo(index) {
  return { type: 'SELECT_TODO', payload: index };
}

export function showLightbox() {
  return { type: 'SHOW_LIGHTBOX', payload: true };
}

export function hideLightbox() {
  return { type: 'HIDE_LIGHTBOX', payload: false };
}
