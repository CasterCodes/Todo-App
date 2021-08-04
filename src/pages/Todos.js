import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuthListener from "../hooks/auth-listener";
import TodoContext from "../context/todoContext";

const Todos = () => {
  const { user } = useAuthListener();
  const history = useHistory();
  const { error, signout } = useContext(TodoContext);

  const handleLogout = () => {
    signout();
    localStorage.removeItem("todo-user");
    history.push("/login");
  };
  return (
    <div className="page">
      <div className="todo-container">
        <div className="todos-header">
          <div className="header-top">
            <div>
              <h2>Hello,{user.displayName},</h2>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
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
