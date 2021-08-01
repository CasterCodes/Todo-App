import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="page">
      <div className="form-container">
        <form>
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
            <input type="submit" value="Login" className="form-submit" />
          </div>

          <div className="form-footer">
            <p>
              Not Yet A Member ? <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
