import React from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <div className="page">
      <div className="todo-container">
        <div className="todos-header">
          <div className="header-top">
            <div>
              <h2>Hello, Kevin Caster,</h2>
            </div>
            <button>Logout</button>
          </div>
        </div>
        <div className="todos-body">
          <div className="todos">
            <div className="todo-item">
              <h2>Walk my Dog</h2>
              <div className="todo-item-footer">
                <button className="edit">
                  <Link to={`/todo/${1}`}>View</Link>
                </button>
                <button className="delete">Delete</button>
              </div>
            </div>
            <div className="todo-item">
              <h2>Learn React Native </h2>
              <div className="todo-item-footer">
                <button className="edit">
                  <Link to={`/todo/${1}`}>View</Link>
                </button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
