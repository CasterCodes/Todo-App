import React from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="page">
      <div className="form-container">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your name" className="form-input" />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm  Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign up" className="form-submit" />
          </div>

          <div className="form-footer">
            <p>
              Already A Member ? <Link to="/login">Login</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
