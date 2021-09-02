  
import React from "react";

const Todo = (props) => {
    const handleClick = () => {
        props.handleToggle(props.item.id);
      };
    return (
        <div
          className={`item${props.item.completed ? " completed" : ""}`}
          onClick={handleClick}
        >
          <p>{props.item.work}</p>
        </div>
      );
}

export default Todo;