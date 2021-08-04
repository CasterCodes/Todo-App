import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import firebase from "../firebase";
import { GET_TODOS, REGISTER_ERROR } from "./constants";
import { useHistory } from "react-router-dom";

const TodoState = () => {
  const history = useHistory();
  const initialState = {
    user: localStorage.getItem("todo-user")
      ? JSON.parse(localStorage.getItem("todo-user"))
      : {},
    todos: [],

    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const registerUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
        });
        history.push("/");
      })
      .catch((error) => {
        dispatch({ action: REGISTER_ERROR, payload: error });
      });
  };

  return (
    <TodoContext.Provider
      value={{
        user,
        todos,
        loading,
        registerUser,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
