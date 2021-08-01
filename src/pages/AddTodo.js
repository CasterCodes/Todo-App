import React from "react";

const AddTodo = () => {
  return (
    <div className="page">
      <div className="form-container">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Todo Title"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              cols="8"
              rows="8"
              placeholder="To do Description"
              className="form-textarea"></textarea>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Your Password"
              className="form-check"
            />
            <span>Completed</span>
          </div>

          <div className="form-group">
            <input type="submit" value="Add Todo" className="form-submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
