// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todos from "./Todo";

const TodoList = props => {

    const handleClick = () => {
        props.handleClear()
    }

  return (
    <div className="todo-list">
      {props.workTodo.map(todo => (
        <Todos key={todo.id} todo={todo} />
      ))}
      <button className="clear-btn">
        Clear TodoList
      </button>
    </div>
  );
};

export default TodoList;
