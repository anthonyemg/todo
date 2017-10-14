import React from 'react';

const TodoLightbox = ({ hideLightbox }) => (
  <div className="todoLightbox">
    <button onClick={() => hideLightbox()}>CLOSE</button>
  </div>
);

export default TodoLightbox;
