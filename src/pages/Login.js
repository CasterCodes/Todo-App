import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TodoContext from "../context/todoContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();
  const { signedIn, error: globalError, LoginUser } = useContext(TodoContext);

  useEffect(() => {
    setError(globalError);
  }, [globalError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill the fields");
    } else {
      LoginUser(email, password);
    }

    if (signedIn) history.push("/");
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
              type="email"
              placeholder="Your Email"
              className="form-input"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              className="form-input"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
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
