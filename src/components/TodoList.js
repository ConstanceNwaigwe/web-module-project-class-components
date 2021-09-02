// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
    const handleClick = () =>{
        props.handleComplete();
    }

    return(
        <div className="todolist">
            {props.thingsTodo.map((item) => (
        <Todo
          key={item.id}
          item={item}
          handleToggle={props.handleToggle}
        />
      ))}
      <button className="clear-btn" onClick={handleClick}>
        Clear Completed
      </button>
        </div>
    );
};

export default TodoList;