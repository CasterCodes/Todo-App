import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import TodoContext from "../context/todoContext";
import useAuthListener from "../hooks/auth-listener";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuthListener();

  const history = useHistory();

  const { editId } = useParams();

  const {
    error: globalError,
    addSuccess,
    addTodo,
    getSingleTodo,
    todo,
    updateTodo,
    updateSuccess,
  } = useContext(TodoContext);

  useEffect(() => {
    if (editId) {
      getSingleTodo(editId);
      setTitle(todo.title);
      setCompleted(todo.completed);
      setDescription(todo.description);
    }
  }, [editId]);

  useEffect(() => {
    setError(globalError);
  }, [globalError]);

  useEffect(() => {
    if (addSuccess || updateSuccess) {
      history.push("/");
    }
  }, [addSuccess, updateSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      setError("Please fill all the fields");
    } else {
      const data = {
        title,
        description,
        user: user.uid,
        completed,
      };
      if (editId) {
        updateTodo(editId, data);
      } else {
        addTodo(data);
      }
    }

    if (addSuccess) {
      setTitle("");
      setError("");
      setCompleted(false);
      setDescription("");
      history.push("/");
    }
  };

  return (
    <div className="page">
      <div className="form-container">
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Todo Title"
              className="form-input"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="8"
              rows="8"
              placeholder="To do Description"
              className="form-textarea"
              value={description}
              onChange={({ target: { value } }) =>
                setDescription(value)
              }></textarea>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Your Password"
              className="form-check"
              checked={completed}
              value={completed}
              onChange={() => setCompleted((prevState) => !prevState)}
            />
            <span>Completed</span>
          </div>

          <div className="form-group">
            {editId ? (
              <input
                type="submit"
                value="Update Todo"
                className="form-submit"
              />
            ) : (
              <input type="submit" value="Add Todo" className="form-submit" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
