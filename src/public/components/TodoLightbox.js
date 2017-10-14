import React from 'react';

const TodoLightbox = ({ hideLightbox }) => (
  <div className="todoLightbox">
    <button onClick={() => hideLightbox()}>x</button>
  </div>
);

export default TodoLightbox;
