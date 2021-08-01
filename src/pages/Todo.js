import React from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div className="page">
      <div className="todo-container">
        <h1>Todo Title</h1>
        <p>This is the to do app description section</p>
        <div className="todo-footer">
          <button className="go-back">
            <Link to="/">Go Back</Link>
          </button>
          <button className="complete">Completed</button>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
