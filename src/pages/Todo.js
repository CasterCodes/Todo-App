import React from "react";

const Todo = () => {
  return (
    <div className="page">
      <div className="todo-container">
        <h1>Todo Title</h1>
        <p>This is the to do app description section</p>
        <div className="todo-footer">
          <button>Go Back</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
