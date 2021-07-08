import React from 'react';

const Todos = props => {
  return (
    <div className={`Todos${props.todo.finished ? ' finished' : ''}`}>
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todos;