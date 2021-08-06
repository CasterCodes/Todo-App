import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuthListener from "../hooks/auth-listener";
import TodoContext from "../context/todoContext";

const Todos = () => {
  const { user } = useAuthListener();
  const history = useHistory();
  const { error, signout, todos, getTodos, deleteTodo, resetBoolenState } =
    useContext(TodoContext);

  useEffect(() => {
    getTodos(user.uid);
    if (!user) history.push("/login");
  }, [history]);

  useEffect(() => {
    resetBoolenState();
  }, []);

  const handleLogout = () => {
    signout();
    localStorage.removeItem("todo-user");
    history.push("/login");
  };

  const handleDelete = (id) => {
    deleteTodo(id);
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
            {todos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <h2>{todo.title}</h2>
                <div className="todo-item-footer">
                  <button className="edit">
                    <Link to={`/todo/${todo.id}`}>View</Link>
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(todo.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
