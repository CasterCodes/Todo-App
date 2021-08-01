import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">Todo App</Link>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/">My Todos </Link>
            </li>
            <li>
              <Link to="/add-todo">Add Todo</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
