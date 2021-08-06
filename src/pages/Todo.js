import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import TodoContext from "../context/todoContext";

const Todo = () => {
  const { id } = useParams();

  const {
    error,
    getSingleTodo,
    todo,
    deleteTodo,
    deleteSuccess,
    updateTodo,
    updateSuccess,
  } = useContext(TodoContext);

  const history = useHistory();

  useEffect(() => {
    getSingleTodo(id);
  }, [id, updateSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      history.push("/");
    }
  }, [deleteSuccess]);

  const handleDelete = (deleteId) => {
    deleteTodo(deleteId);
  };

  const handleComplete = (id) => {
    updateTodo(id, { completed: true });
  };

  if (error)
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );

  return (
    <div className="page">
      <div className="todo-container">
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <div className="todo-footer">
          <button className="go-back">
            <Link to="/">Go Back</Link>
          </button>
          <button className="complete" onClick={() => handleComplete(id)}>
            {todo.completed ? "Completed" : "Complete"}
          </button>
          <button
            className="edit"
            onClick={() => history.push(`/add-todo/${id}`)}>
            Edit
          </button>
          <button className="delete" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
