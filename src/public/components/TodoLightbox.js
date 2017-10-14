import React from 'react';

const TodoLightbox = ({ hideLightbox, todos, todoIndex, handleUpdateTodo }) => (
  <div className="todoLightbox">
    <button className="todoLightbox-close" onClick={() => hideLightbox()}>
      CLOSE
    </button>
    <form
      className="todoLightbox-form"
      onSubmit={() => {
        handleUpdateTodo(
          document.getElementById('todoLightbox-input').value,
          todoIndex
        );
        hideLightbox();
      }}
    >
      <input
        type="text"
        defaultValue={todos[todoIndex]}
        id="todoLightbox-input"
      />
      <input className="todoLightbox-submit" type="submit" value="Submit" />
    </form>
  </div>
);

export default TodoLightbox;
