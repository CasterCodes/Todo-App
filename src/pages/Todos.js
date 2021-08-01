import React from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <div className="page">
      <div className="todo-container">
        <div className="todos-header">
          <div className="header-top">
            <h2>Hello, Kevin Caster</h2>
            <button>Logout</button>
          </div>
          <div className="header-bottom">
            <p>Here is your todos summary </p>

            <div>
              <button>All (5)</button>
              <button>Completed (3)</button>
            </div>
          </div>
        </div>
        <div className="todos-body">
          <div className="todos">
            <div className="todo-item">
              <h2>Walk my Dog</h2>
              <div className="todo-item-footer">
                <button>
                  <Link to={`/todo/${1}`}>View</Link>
                </button>
                <button>Completed</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
