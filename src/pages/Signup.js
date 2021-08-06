import React, { useContext, useState, useEffect } from "react";
import TodoContext from "../context/todoContext";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const {
    error: globalError,
    registerUser,
    registered,
  } = useContext(TodoContext);

  useEffect(() => {
    setError(globalError);
  }, [globalError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill all the fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      registerUser(name, email, password);
    }

    if (registered) {
      setError(null);
      setName("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
      history.push("/login");
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
              placeholder="Your name"
              className="form-input"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              className="form-input"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm  Password"
              className="form-input"
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
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
